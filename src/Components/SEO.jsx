import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://skryptvolt.vercel.app';

export const defaultFaqs = [
  {
    question: 'How fast can you build and launch my website?',
    answer:
      'Timelines are calculated depending on project size and technical scope. A standard blog or starter landing page takes a minimum of 1 to 2 weeks. Comprehensive SME business platforms (up to 7 pages with WhatsApp funnels and local SEO) take 2 to 3 weeks, while custom e-commerce stores, booking engines, and portals take 4 to 6 weeks. Every project adheres strictly to thorough testing and our sub-2-second speed guarantee.',
  },
  {
    question: 'How does WhatsApp integration help my business get clients?',
    answer:
      'We link your website directly with your WhatsApp business line through 1-click inquiry buttons, custom pre-filled booking prompts, and floating action triggers. Nigerian and global customers convert much faster when they can chat with you instantly.',
  },
  {
    question: 'Do you provide professional business emails and cPanel hosting?',
    answer:
      'Yes. Every package includes branded business email addresses (e.g. info@yourcompany.com, sales@yourcompany.com) powered by Zoho, Google Workspace, or cPanel webmail, along with full SSL security certificate installation.',
  },
  {
    question: 'I am outside Ibadan (e.g. Lagos, Abuja, UK, US). Can we work together remotely?',
    answer:
      'Absolutely. More than 70% of our clients operate across Lagos, Abuja, Port Harcourt, the United Kingdom, and the United States. We conduct clear milestone reviews via WhatsApp, Google Meet, and live staging previews.',
  },
  {
    question: 'What are the payment terms?',
    answer:
      'For Nigerian clients, we operate on a transparent 50% upfront deposit to commence design and coding, and the remaining 50% upon final testing and domain launch. International clients can pay milestone-based via bank transfer, Stripe, or Flutterwave.',
  },
];

const SEO = ({
  title = 'Skryptvolt | High-Converting Websites & Software Engineering · Olumide Oyediran',
  description = 'Fast, mobile-first websites tailored for Nigerian SMEs and global brands by Olumide Oyediran (Skryptvolt). Direct WhatsApp leads, business email setup, and local SEO ranking in under 2 seconds load time.',
  path = '/',
  image = `${SITE_URL}/logo.png`,
  keywords = 'Olumide Oyediran, Skryptvolt, web developer Ibadan, software developer Nigeria, website designer Nigeria, SME websites Nigeria, WhatsApp business website, local SEO Nigeria, mobile-first websites, cPanel hosting Nigeria, Paystack website integration',
  includeFaqSchema = true,
  faqs = defaultFaqs,
  noindex = false,
}) => {
  const url = `${SITE_URL}${path}`;

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: 'Skryptvolt',
    alternateName: ['Skryptvolt', 'SkryptByMide', 'Olumide Oyediran Web Development'],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description:
      'Fast, mobile-first websites for Nigerian SMEs in Ibadan, Lagos, Abuja and international businesses. WhatsApp-integrated, local SEO, business email setup, and cPanel hosting support.',
    priceRange: '₦180,000 - ₦650,000+',
    currenciesAccepted: 'NGN, USD, GBP',
    paymentAccepted: 'Bank Transfer, Paystack, Flutterwave, Cash',
    telephone: '+2347088136059',
    email: 'oyediranolumide97@gmail.com',
    founder: {
      '@type': 'Person',
      name: 'Olumide Oyediran',
      jobTitle: 'Full-Stack Web Developer & Founder',
      url: SITE_URL,
      sameAs: [
        'https://github.com/justmide',
        'https://www.tiktok.com/@skryptbymide',
        'https://linkedin.com/in/interface-i-b15357253',
        'https://twitter.com/skryptbymide',
      ],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ibadan',
      addressLocality: 'Ibadan',
      addressRegion: 'Oyo State',
      postalCode: '200223',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '7.3775',
      longitude: '3.9470',
    },
    areaServed: [
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'City', name: 'Ibadan' },
      { '@type': 'City', name: 'Lagos' },
      { '@type': 'City', name: 'Abuja' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+2347088136059',
      email: 'oyediranolumide97@gmail.com',
      availableLanguage: ['English', 'Yoruba'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile-First SME Website Development',
            description: 'Custom, lightning-fast responsive website optimized for Nigerian mobile traffic and high conversions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WhatsApp Lead Funnel Integration',
            description: 'Direct 1-click WhatsApp chat triggers, quote calculators, and automated client message routing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local Google SEO & Google Business Profile',
            description: 'On-page SEO, schema markup, and Google local maps rankings for businesses in Ibadan, Lagos, and nationwide.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Email Setup & Hosting Support',
            description: 'Professional branded emails (info@yourcompany.com) with cPanel, DNS management, and SSL installation.',
          },
        },
      ],
    },
    sameAs: [
      'https://github.com/justmide',
      'https://www.tiktok.com/@skryptbymide',
      'https://linkedin.com/in/interface-i-b15357253',
      'https://twitter.com/skryptbymide',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Skryptvolt',
    description: 'High-Converting Websites and Custom Software Engineering by Olumide Oyediran',
    inLanguage: 'en-NG',
    publisher: {
      '@type': 'Organization',
      name: 'Skryptvolt',
      logo: `${SITE_URL}/logo.png`,
    },
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Olumide Oyediran',
    alternateName: ['Skryptvolt', 'Mide', 'SkryptByMide', 'Justmide', 'Oyediran Olumide'],
    jobTitle: 'Software Developer & Full-Stack Web Engineer',
    description:
      'Olumide Oyediran (Skryptvolt) is a professional software developer and full-stack web engineer based in Ibadan, Nigeria. He specializes in high-speed web applications, React.js, Node.js, cPanel deployments, and local SEO for SMEs in Nigeria and worldwide.',
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    email: 'oyediranolumide97@gmail.com',
    telephone: '+2347088136059',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ibadan',
      addressRegion: 'Oyo State',
      addressCountry: 'NG',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Developer',
      occupationalCategory: '15-1252.00',
      description: 'Design, development, and deployment of web applications, cloud hosting infrastructure, and e-commerce platforms.',
      skills: [
        'Software Development',
        'Full-Stack Web Engineering',
        'React.js',
        'Next.js',
        'Node.js',
        'JavaScript',
        'TypeScript',
        'Python',
        'Tailwind CSS',
        'cPanel Server Deployment',
        'DirectAdmin',
        'PostgreSQL',
        'MongoDB',
        'Local SEO',
        'Paystack Payment Integration',
      ],
    },
    knowsAbout: [
      'Software Development',
      'Web Application Engineering',
      'React.js Framework',
      'Node.js Ecosystem',
      'cPanel & DirectAdmin Deployment',
      'E-Commerce & Paystack API',
      'Local Search Engine Optimization (SEO)',
      'Sub-2s Mobile Web Performance',
    ],
    sameAs: [
      'https://github.com/justmide',
      'https://linkedin.com/in/interface-i-b15357253',
      'https://www.tiktok.com/@skryptbymide',
      'https://twitter.com/skryptbymide',
    ],
  };

  const faqSchema = includeFaqSchema && faqs && faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  } : null;

  return (
    <Helmet>
      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta name="google-site-verification" content="q_TkiUTIUMmb6F443Vpi1kfkwuKl7pwTnDTTVcL4FVg" />

      {/* Crawlers & Multi-browser */}
      {noindex ? (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
          <meta name="bingbot" content="noindex, nofollow" />
          <meta name="yandex" content="noindex, nofollow" />
        </>
      ) : (
        <>
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow" />
          <meta name="yandex" content="index, follow" />
        </>
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Skryptvolt" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@skryptbymide" />
      <meta name="twitter:creator" content="@skryptbymide" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
