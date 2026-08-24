import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Callistus Ngeywa | AI & Data Automation Engineer',
  description: 'Personal portfolio of Callistus Ngeywa — AI & Data Automation Engineer, Full-Stack Developer, and UI/UX Designer based in Nairobi, Kenya. Specialist in n8n workflows, Power Automate, Power Query, Next.js, and OpenAI Agents.',
  keywords: [
    'Callistus Ngeywa',
    'AI Automation Engineer',
    'Data Analyst Nairobi',
    'n8n Specialist',
    'Power Automate Developer',
    'Power Query M Language',
    'Full-Stack Developer Kenya',
    'Next.js Developer',
    'm365consult',
  ],
  authors: [{ name: 'Callistus Ngeywa', url: 'https://github.com/Carley505' }],
  openGraph: {
    title: 'Callistus Ngeywa | AI & Data Automation Engineer',
    description: 'Architecting automated workflows, data engines, and full-stack web applications that scale business efficiency.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Callistus Ngeywa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Callistus Ngeywa | AI & Data Automation Engineer',
    description: 'AI & Data Automation Engineer • Full-Stack Developer • UI/UX Designer based in Nairobi, Kenya.',
  },
  icons: {
    icon: 'icon.svg',
    shortcut: 'icon.svg',
    apple: 'icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Callistus Ngeywa',
    jobTitle: 'AI & Data Automation Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'm365consult',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'The East African University',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'Kenya',
    },
    sameAs: [
      'https://github.com/Carley505',
      'https://www.linkedin.com/in/callistus-ngeywa-838184231',
      'https://www.behance.net/canon505',
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-bg text-brand-text min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
