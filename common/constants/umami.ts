import { CSSProperties } from "react";

export const UMAMI_ACCOUNT = {
  username: "ntrungduong",
  api_key: process.env.UMAMI_API_KEY,
  base_url: "https://api.umami.is/v1/websites",
  endpoint: {
    page_views: "/pageviews",
    sessions: "/sessions/stats",
  },
  parameters: {
    startAt: 1717174800000, // 1 Juni 2024 00:00 WIB
    endAt: 1767190799000, // 31 Desember 2025 23:59 WIB
    unit: "month",
    timezone: "Asia/Jakarta",
  },
  is_active: true,
  websites: [
    {
      domain: "portfolio-ntrungduong.vercel.app",
      website_id: process.env.UMAMI_WEBSITE_ID_SITE,
      umami_url:
        "https://cloud.umami.is/share/uu6q1cdJDpcnHy17",
    },
  ],
};
export const MAP_FILE = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

export const ISO_COUNTRIES: Record<string, string> = {
  '004': 'AF', '008': 'AL', '012': 'DZ', '016': 'AS', '020': 'AD',
  '024': 'AO', '028': 'AG', '031': 'AZ', '032': 'AR', '036': 'AU',
  '040': 'AT', '044': 'BS', '048': 'BH', '050': 'BD', '051': 'AM',
  '052': 'BB', '056': 'BE', '060': 'BM', '064': 'BT', '068': 'BO',
  '070': 'BA', '072': 'BW', '076': 'BR', '084': 'BZ', '090': 'SB',
  '092': 'VG', '096': 'BN', '100': 'BG', '104': 'MM', '108': 'BI',
  '112': 'BY', '116': 'KH', '120': 'CM', '124': 'CA', '132': 'CV',
  '140': 'CF', '144': 'LK', '148': 'TD', '152': 'CL', '156': 'CN',
  '170': 'CO', '178': 'CG', '180': 'CD', '188': 'CR', '191': 'HR',
  '192': 'CU', '196': 'CY', '203': 'CZ', '204': 'BJ', '208': 'DK',
  '214': 'DO', '218': 'EC', '222': 'SV', '231': 'ET', '233': 'EE',
  '246': 'FI', '250': 'FR', '266': 'GA', '268': 'GE', '270': 'GM',
  '276': 'DE', '288': 'GH', '300': 'GR', '320': 'GT', '324': 'GN',
  '332': 'HT', '340': 'HN', '344': 'HK', '348': 'HU', '352': 'IS',
  '356': 'IN', '360': 'ID', '364': 'IR', '368': 'IQ', '372': 'IE',
  '376': 'IL', '380': 'IT', '388': 'JM', '392': 'JP', '398': 'KZ',
  '400': 'JO', '404': 'KE', '410': 'KR', '414': 'KW', '422': 'LB',
  '428': 'LV', '440': 'LT', '442': 'LU', '458': 'MY', '484': 'MX',
  '504': 'MA', '508': 'MZ', '528': 'NL', '554': 'NZ', '566': 'NG',
  '578': 'NO', '586': 'PK', '604': 'PE', '608': 'PH', '616': 'PL',
  '620': 'PT', '642': 'RO', '643': 'RU', '682': 'SA', '688': 'RS',
  '702': 'SG', '710': 'ZA', '724': 'ES', '752': 'SE', '756': 'CH',
  '764': 'TH', '784': 'AE', '788': 'TN', '792': 'TR', '804': 'UA',
  '826': 'GB', '840': 'US', '704': 'VN', '887': 'YE',
};

export const COUNTRY_NAMES: Record<string, string> = {
  'AF': 'Afghanistan', 'AL': 'Albania', 'DZ': 'Algeria', 'AS': 'American Samoa',
  'AD': 'Andorra', 'AO': 'Angola', 'AG': 'Antigua and Barbuda', 'AZ': 'Azerbaijan',
  'AR': 'Argentina', 'AU': 'Australia', 'AT': 'Austria', 'BS': 'Bahamas',
  'BH': 'Bahrain', 'BD': 'Bangladesh', 'AM': 'Armenia', 'BB': 'Barbados',
  'BE': 'Belgium', 'BM': 'Bermuda', 'BT': 'Bhutan', 'BO': 'Bolivia',
  'BA': 'Bosnia and Herzegovina', 'BW': 'Botswana', 'BR': 'Brazil', 'BZ': 'Belize',
  'SB': 'Solomon Islands', 'VG': 'British Virgin Islands', 'BN': 'Brunei',
  'BG': 'Bulgaria', 'MM': 'Myanmar', 'BI': 'Burundi', 'BY': 'Belarus',
  'KH': 'Cambodia', 'CM': 'Cameroon', 'CA': 'Canada', 'CV': 'Cape Verde',
  'CF': 'Central African Republic', 'LK': 'Sri Lanka', 'TD': 'Chad', 'CL': 'Chile',
  'CN': 'China', 'CO': 'Colombia', 'CG': 'Republic of the Congo', 'CD': 'Democratic Republic of the Congo',
  'CR': 'Costa Rica', 'HR': 'Croatia', 'CU': 'Cuba', 'CY': 'Cyprus',
  'CZ': 'Czech Republic', 'BJ': 'Benin', 'DK': 'Denmark', 'DO': 'Dominican Republic',
  'EC': 'Ecuador', 'SV': 'El Salvador', 'ET': 'Ethiopia', 'EE': 'Estonia',
  'FI': 'Finland', 'FR': 'France', 'GA': 'Gabon', 'GE': 'Georgia',
  'GM': 'Gambia', 'DE': 'Germany', 'GH': 'Ghana', 'GR': 'Greece',
  'GT': 'Guatemala', 'GN': 'Guinea', 'HT': 'Haiti', 'HN': 'Honduras',
  'HK': 'Hong Kong', 'HU': 'Hungary', 'IS': 'Iceland', 'IN': 'India',
  'ID': 'Indonesia', 'IR': 'Iran', 'IQ': 'Iraq', 'IE': 'Ireland',
  'IL': 'Israel', 'IT': 'Italy', 'JM': 'Jamaica', 'JP': 'Japan',
  'KZ': 'Kazakhstan', 'JO': 'Jordan', 'KE': 'Kenya', 'KR': 'South Korea',
  'KW': 'Kuwait', 'LB': 'Lebanon', 'LV': 'Latvia', 'LT': 'Lithuania',
  'LU': 'Luxembourg', 'MY': 'Malaysia', 'MX': 'Mexico', 'MA': 'Morocco',
  'MZ': 'Mozambique', 'NL': 'Netherlands', 'NZ': 'New Zealand', 'NG': 'Nigeria',
  'NO': 'Norway', 'PK': 'Pakistan', 'PE': 'Peru', 'PH': 'Philippines',
  'PL': 'Poland', 'PT': 'Portugal', 'RO': 'Romania', 'RU': 'Russia',
  'SA': 'Saudi Arabia', 'RS': 'Serbia', 'SG': 'Singapore', 'ZA': 'South Africa',
  'ES': 'Spain', 'SE': 'Sweden', 'CH': 'Switzerland', 'TH': 'Thailand',
  'AE': 'United Arab Emirates', 'TN': 'Tunisia', 'TR': 'Turkey', 'UA': 'Ukraine',
  'GB': 'United Kingdom', 'US': 'United States', 'VN': 'Vietnam', 'YE': 'Yemen',
};

// ============================================
// TYPES
// ============================================

export interface CountryData {
  x: string;      // ISO code: VN, US, JP
  y: number;     // Số lượng visitors
  percentage?: number; // Auto calculated
}

export interface WorldMapProps {
  data: CountryData[];
  theme?: 'light' | 'dark';
  height?: string;
  className?: string;
  style?: CSSProperties;
  onCountryClick?: (countryCode: string) => void;
}