import { CountryData, WorldMapProps } from '@/common/constants/umami';
import { useMemo, useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { colord } from 'colord';
import { ISO_COUNTRIES, COUNTRY_NAMES, MAP_FILE } from '@/common/constants/umami';
import { useTranslations } from 'next-intl';

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toLocaleString();
}

function calculatePercentages(data: CountryData[]): CountryData[] {
  const total = data?.reduce((sum, item) => sum + item.y, 0);
  return data.map((item) => ({
    ...item,
    percentage: total > 0 ? (item.y / total) * 100 : 0,
  }));
}

export function WorldMap({
  data,
  theme = 'light',
  height = '',
  className = '',
  style = {},
  onCountryClick,
}: WorldMapProps) {
  const t = useTranslations('DashboardPage');

  const [tooltip, setTooltip] = useState<{
    country: string;
    count?: number;
  } | null>(null);

  // Tính phần trăm cho data
  const metrics = useMemo(() => calculatePercentages(data), [data]);

  // Tạo map để lookup nhanh
  const dataMap = useMemo(() => {
    const map: Record<string, CountryData> = {};
    metrics.forEach((item) => {
      map[item.x] = item;
    });
    return map;
  }, [metrics]);

  // Theme colors
  const colors =
    theme === 'light'
      ? {
          base: '#2563eb',
          fill: '#f3f4f6',
          stroke: '#e5e7eb',
          hover: '#dbeafe',
        }
      : {
          base: '#3b82f6',
          fill: '#374151',
          stroke: '#4b5563',
          hover: '#1e40af',
        };

  // Tính màu fill cho từng quốc gia
  const getFillColor = (geoId: string): string => {
    const code = ISO_COUNTRIES[geoId];
    if (!code || code === 'AQ') return colors.fill; // Antarctica

    const countryData = dataMap[code];
    if (!countryData) return colors.fill;

    const intensity = (countryData.percentage || 0) / 100;

    // Điều chỉnh màu dựa trên intensity
    if (theme === 'light') {
      return colord(colors.base)
        .lighten(0.4 * (1 - intensity))
        .toHex();
    } else {
      return colord(colors.base)
        .darken(0.4 * (1 - intensity))
        .toHex();
    }
  };

  const handleMouseEnter = (geoId: string) => {
    const code = ISO_COUNTRIES[geoId];
    if (!code || code === 'AQ') return;

    const countryData = dataMap[code];
    if (countryData) {
      setTooltip({
        country: COUNTRY_NAMES[code] || code,
        count: countryData.y,
      });
    } else {
      setTooltip({
        country: COUNTRY_NAMES[code] || code,
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  const handleClick = (geoId: string) => {
    const code = ISO_COUNTRIES[geoId];
    if (code && onCountryClick) {
      onCountryClick(code);
    }
  };

  return (
    <div className={`relative ${className}`} style={{ height, ...style }}>
      <ComposableMap projection="geoMercator">
        <ZoomableGroup zoom={0.8} minZoom={0.7} center={[0, 40]}>
          <Geographies geography={MAP_FILE}>
            {({ geographies }) => {
              return geographies.map((geo) => {
                const code = ISO_COUNTRIES[geo.id];
                const opacity = code === 'AQ' ? 0 : 1;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getFillColor(geo.id)}
                    stroke={colors.stroke}
                    strokeWidth={0.5}
                    opacity={opacity}
                    style={{
                      default: { outline: 'none' },
                      hover: {
                        outline: 'none',
                        fill: colors.hover,
                        cursor: onCountryClick ? 'pointer' : 'default',
                      },
                      pressed: { outline: 'none' },
                    }}
                    onMouseEnter={() => handleMouseEnter(geo.id)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(geo.id)}
                  />
                );
              });
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none absolute left-4 top-4 z-10"
          style={{
            backgroundColor: theme === 'light' ? '#ffffff' : '#1f2937',
            color: theme === 'light' ? '#111827' : '#f9fafb',
            padding: '8px 12px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: `1px solid ${theme === 'light' ? '#e5e7eb' : '#374151'}`,
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: '4px' }}>{tooltip.country}</div>
          {tooltip.count && (
            <div style={{ fontSize: '14px', opacity: 0.8 }}>
              {formatNumber(tooltip.count)} visitors
            </div>
          )}
        </div>
      )}
    </div>
  );
}
