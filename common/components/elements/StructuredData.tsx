export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nguyễn Trung Dương',
    alternateName: 'ntrungduong',
    url: process.env.DOMAIN,
    image: `${process.env.DOMAIN}/images/ntrungduong-7.png`,
    jobTitle: 'Frontend Developer & Automation Tester',
    sameAs: [
      'https://github.com/Trungduong2111',
      'https://www.linkedin.com/in/ntrungduong',
      // Thêm social media links
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Automation Testing',
      'Frontend Development',
      'Angular',
      'HTML',
      'CSS',
      'Selenium',
      'Jest',
      'Testing Library',
      'Web Development',
      'Software Testing',
    ],
    email: 'nguyentrungduong21111998a@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressRegion: 'Ho Chi Minh City',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nguyen Thanh Trung Portfolio',
    url: process.env.DOMAIN,
    description:
      'Personal website, portfolio, and blog of Nguyễn Trung Dương - Frontend Developer & Automation Tester specializing in Angular, React, Next.js, Selenium and TypeScript',
    author: {
      '@type': 'Person',
      name: 'Nguyen Thanh Trung',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${process.env.DOMAIN}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    keywords: 'Frontend Developer, React, Next.js, TypeScript, Automation Testing, Vietnam',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
