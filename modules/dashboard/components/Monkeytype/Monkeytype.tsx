'use client';

import Link from 'next/link';
import useSWR from 'swr';
import { SiMonkeytype as MonkeytypeIcon } from 'react-icons/si';
import { useTranslations } from 'next-intl';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import EmptyState from '@/common/components/elements/EmptyState';
import { fetcher } from '@/services/fetcher';
import { MONKEYTYPE_ACCOUNT } from '@/common/constants/monkeytype';

import MonkeytypeSkeleton from './MonkeytypeSkeleton';
import Overview from './Overview';
import Profile from './Profile';
import Leaderboard from './Leaderboard';
import { useEffect, useState } from 'react';

const Monkeytype = () => {
  const { data, isLoading, error } = useSWR('/api/monkeytype', fetcher);
  // const [data, setData] = useState<any>(null);

  // useEffect(() => {
  //   setData({
  //     name: 'ntrungduong',
  //     addedAt: 1763453269854,
  //     typingStats: {
  //       completedTests: 1,
  //       startedTests: 1,
  //       timeTyping: 30.01,
  //     },
  //     personalBests: {
  //       time: {
  //         '30': [
  //           {
  //             acc: 85.29,
  //             consistency: 34.35,
  //             difficulty: 'normal',
  //             lazyMode: false,
  //             language: 'english',
  //             punctuation: false,
  //             raw: 22.39,
  //             wpm: 22.39,
  //             numbers: false,
  //             timestamp: 1763520288475,
  //           },
  //         ],
  //       },
  //       words: {},
  //     },
  //     xp: 53,
  //     streak: 1,
  //     maxStreak: 1,
  //     isPremium: false,
  //     allTimeLbs: {
  //       time: {
  //         '15': {},
  //         '60': {},
  //       },
  //     },
  //     uid: 'vldEhFozizOd8yYtUN9fnpNqKXk1',
  //   });
  // }, []);
  // const isLoading = false;
  // const error = null;
  const { monkeytype_url, is_active } = MONKEYTYPE_ACCOUNT;

  const t = useTranslations('DashboardPage');

  if (!is_active) return null;

  return (
    <section className="space-y-2">
      <SectionHeading
        title={t('monkeytype.title')}
        icon={
          <div className="h-5 w-5 overflow-hidden rounded-full">
            <MonkeytypeIcon />
          </div>
        }
      />
      <SectionSubHeading>
        <p>{t('monkeytype.sub_title')}</p>
        <Link
          href={monkeytype_url}
          target="_blank"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-400"
        >
          ntrungduong
        </Link>
      </SectionSubHeading>

      {error ? (
        <EmptyState message={t('error')} />
      ) : isLoading || data === null ? (
        <MonkeytypeSkeleton />
      ) : (
        <div className="flex flex-col gap-4">
          <Profile data={data} />
          <Leaderboard data={data} />
          <Overview data={data} />
        </div>
      )}
    </section>
  );
};

export default Monkeytype;
