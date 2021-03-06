import { FC, ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  children: ReactNode;
  header?: boolean | undefined;
  date?: string;
}

export const Layout: FC<Props> = ({ children, header = false, date }) => {
  const meta = {
    title: 'Muhammad Zourdy | Software Engineer',
    description: `Front End Software Engineer | traveller | hiking | explorer`,
    type: 'website',
    image: '../public/images/ccp.png',
    date,
  };

  return (
    <div className="container mx-auto px-10 mb-8">
      {!header ? (
        <Head>
          <title>{meta.title}</title>
          <link rel="icon" href="/images/ccp.png" />
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />

          <meta property="og:type" content={meta.type} />
          <meta
            property="og:site_name"
            content="Muhammad Zourdy | Front End Software Engineer & Web Security Penetration tester OWASP & Bushcraft & North Hemisphere Forest Guardian"
          />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:site"
            content="https://twitter.com/zourdythedev"
          />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
          <link rel="icon" href="/favicon.ico" />
        </Head>
      ) : null}

      {children}
    </div>
  );
};
