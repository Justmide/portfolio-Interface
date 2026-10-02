import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://skryptbymidey.vercel.app';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'SkryptByMide',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Fast, mobile-first websites for Nigerian SMEs. WhatsApp-integrated, local SEO, business email setup, and cPanel hosting support.',
  founder: {
    '@type': 'Person',
    name: 'Olumide Oyediran',
    jobTitle: 'Web Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ibadan',
      addressCountry: 'NG',
    },
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ibadan',
    addressCountry: 'NG',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: 'https://wa.me/2347088136059',
    email: 'mailto:oyediranolumide97@gmail.com',
  },
  sameAs: [
    'https://github.com/justmide',
    'https://www.tiktok.com/@skryptbymide',
    'https://linkedin.com/in/interface-i-b15357253',
    'https://twitter.com/skryptbymide',
  ],
};

const SEO = ({
  title = 'SkryptByMide | Websites for Nigerian Businesses · Ibadan',
  description = 'Fast, mobile-first websites tailored for Nigerian SMEs. WhatsApp-integrated, local SEO, business email setup, and cPanel hosting support.',
  path = '/',
  image = `${SITE_URL}/logo.png`,
}) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_NG" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
