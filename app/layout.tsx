import NextTopLoader from 'nextjs-toploader';
import Script from 'next/script';
import { getServerSession } from 'next-auth';
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import './globals.css';

import Layouts from '@/common/components/layouts';
import ThemeProviderContext from '@/common/stores/theme';
import NextAuthProvider from '@/SessionProvider';
import { METADATA } from '@/common/constants/metadata';
import { onestSans } from '@/common/styles/fonts';
import StructuredData from '@/common/components/elements/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.DOMAIN || ''
  ),

  title: {
    default: 'Nguyễn Thành Trung | Fullstack Developer & Automation Tester | Personal Website',
    template: '%s | Nguyễn Thành Trung',
  },

  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,

  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },

  verification: {
    google: 'ARDjnOa2rctFLJ7Ee9iKmHmxU1_cQRwDnquDp-GySVA',
  },

  openGraph: {
    title: 'Nguyễn Thành Trung | Fullstack Developer & Automation Tester | Personal Website',
    description: METADATA.description,
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: 'website',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  const messages = await getMessages();
  const session = await getServerSession();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="5251ab34-54b7-4b51-a9be-fe0da8c1804e"
      ></Script>
      <head>
        <StructuredData />
      </head>
      <body className={onestSans.className}>
        <NextTopLoader
          color="#4ade80"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #4ade80,0 0 5px #86efac"
        />
        <NextIntlClientProvider messages={messages}>
          <NextAuthProvider session={session}>
            <ThemeProviderContext>
              <Layouts>{children}</Layouts>
            </ThemeProviderContext>
          </NextAuthProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
