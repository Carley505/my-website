import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Automation & AI Technologies',
    description: 'Building autonomous workflows, AI agents, and RPA pipelines that connect enterprise SaaS APIs and automate repetitive operations.',
    iconName: 'Cpu',
    accentColor: '#22D3B8', // Teal
    skills: [
      'n8n Workflow Automation',
      'Power Automate & Webhooks',
      'Automa RPA & Scraping',
      'OpenAI Agents & Prompt Engineering',
      'General OCR & Document AI',
      'MS Teams Adaptive Cards',
      'WhatsApp Business API',
      'GraphQL & REST Webhook Triggers',
    ],
  },
  {
    title: 'Data Analytics & Engineering',
    description: 'Transforming messy raw exports into automated, self-updating analytics models, dynamic reports, and clean relational database schemas.',
    iconName: 'Database',
    accentColor: '#7C6CF6', // Violet
    skills: [
      'Power Query & M Language',
      'SQL & PostgreSQL',
      'Microsoft Excel (Advanced Index-Match/XLOOKUP)',
      'MongoDB & Chroma DB (Vector Search)',
      'Data Sanitation & Left Anti-Joins',
      'SharePoint & OneDrive Automated Sync',
      'Reporting Dashboards',
      'Harvest Data Pipeline Ingestion',
    ],
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Architecting fast, responsive, modern web applications from frontend interfaces down to REST/FastAPI backends and database models.',
    iconName: 'Code2',
    accentColor: '#3B82F6', // Blue
    skills: [
      'Next.js 14 (App Router)',
      'React.js & TypeScript',
      'Tailwind CSS & Framer Motion',
      'Node.js & Express',
      'Python FastAPI Framework',
      'Shopify Headless Storefront API',
      'Prisma ORM & Firebase Auth',
      'Git, GitHub & CI/CD Pipelines',
    ],
  },
  {
    title: 'UI/UX & Graphic Design',
    description: 'Designing intuitive user interfaces, visual design systems, brand identities, and high-impact digital collateral.',
    iconName: 'Palette',
    accentColor: '#F5A623', // Amber
    skills: [
      'Figma & UI Wireframing',
      'Adobe Creative Suite (Photoshop/Illustrator)',
      'Brand Strategy & Poster Design',
      'Vector & Mandala Art Creation',
      'Component Design Systems',
      'User Flow Optimization',
      'Mobile-First Responsive Layouts',
      'Design System Documentation',
    ],
  },
];
