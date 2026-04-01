'use client';

import useSWR from 'swr';
import { SiUmami as UmamiIcon } from 'react-icons/si';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import UmamiSkeleton from './UmamiSkeleton';
import TrafficTrendsChart from './TrafficTrendsChart';
import Overview from './Overview';
import ComboBoxFilter from './ComboBoxFilter';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import EmptyState from '@/common/components/elements/EmptyState';
import { fetcher } from '@/services/fetcher';
import { CountryData, UMAMI_ACCOUNT } from '@/common/constants/umami';
import { WorldMap } from './WorldMap';

const Umami = () => {
  const searchParams = useSearchParams();
  const domain = searchParams.get('domain');

  const key = domain ? `/api/umami?domain=${domain}` : `/api/umami`;
  const { data, isLoading, error } = useSWR(key, fetcher);
  const { is_active } = UMAMI_ACCOUNT;

  const t = useTranslations('DashboardPage');

  if (!is_active) return null;

  const dataTEst: CountryData[] = [
    { x: 'USA', y: 45230 },
    { x: 'VNM', y: 38940 },
    { x: 'JPN', y: 32540 },
    { x: 'DEU', y: 28210 },
    { x: 'GBR', y: 25890 },
    { x: 'FRA', y: 23670 },
    { x: 'CAN', y: 21120 },
    { x: 'AUS', y: 19890 },
    { x: 'KOR', y: 18340 },
    { x: 'IND', y: 16980 },
  ];

  return (
    <section className="space-y-2">
      <SectionHeading title={t('umami.title')} icon={<UmamiIcon />} />
      <SectionSubHeading>
        <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>{t('umami.sub_title')} </p>
          <ComboBoxFilter />
        </div>
      </SectionSubHeading>

      {error ? (
        <EmptyState message={t('error')} />
      ) : isLoading ? (
        <UmamiSkeleton />
      ) : (
        <div className="space-y-3">
          <Overview data={data} />
          <TrafficTrendsChart data={data} />

          <div className="w-full overflow-hidden rounded-lg border border-neutral-300 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {t('umami.geographic_distribution')}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t('umami.visitor_traffic_by_country')}
              </p>
            </div>
            <div className="relative h-fit w-full overflow-hidden">
              <WorldMap
                data={data?.metricsMap || []}
                theme="light"
                height=""
                className="w-full"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Umami;
