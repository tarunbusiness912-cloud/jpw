import {
  Home,
  Building2,
  Compass,
  Sparkles,
} from 'lucide-react'

/* =========================================================
   CONSTRUCTION SERVICES
   ========================================================= */

export const constructionServices = [
  {
    number: '01',
    title: 'Residential Construction',
    description:
      'Thoughtfully planned residential construction tailored to the requirements of each client and project.',
    icon: Home,
    image: '/images/construction/services/residential.jpeg',
  },

  {
    number: '02',
    title: 'Building Construction',
    description:
      'Construction solutions for building projects with a focus on planning, execution and project requirements.',
    icon: Building2,
    image: '/images/construction/services/building.jpeg',
  },

  {
    number: '03',
    title: 'Planning & Architecture',
    description:
      'Project planning and architectural support developed around the client’s vision and requirements.',
    icon: Compass,
    image: '/images/construction/services/planning.jpeg',
  },

  {
    number: '04',
    title: 'Development',
    description:
      'Development-focused construction solutions customized according to project scope and requirements.',
    icon: Sparkles,
    image: '/images/construction/services/development.jpeg',
  },
]

/* =========================================================
   CONSTRUCTION PACKAGES
   ========================================================= */

export const constructionPackages = [
  {
    id: 'economy',

    title: 'Economy',
    subtitle: 'Essential Construction',

    category: 'Construction Package',
    status: 'Available',
    location: 'JP Wings Construction',

    image:
      '/images/construction/packages/economy.jpeg',

    description:
      'An economical construction option designed around the requirements and scope of the project.',

    price:
      'Starting from ₹2,400 / sq ft',

    features: [
      'Project-specific quotation',
      'Construction scope based on requirements',
      'Customized according to client requirements',
    ],

    note:
      'Detailed Economy package inclusions are to be confirmed by JP Wings.',

    isDemo: false,
  },

  {
    id: 'premium',

    title: 'Premium',
    subtitle: 'Construction Without Interior Work',

    category: 'Construction Package',
    status: 'Available',
    location: 'JP Wings Construction',

    image:
      '/images/construction/packages/premium.jpeg',

    description:
      'A premium construction option focused on construction without interior work, customized according to project requirements.',

    price:
      'Starting from ₹2,400 / sq ft',

    features: [
      'Construction without interior work',
      'Project-specific quotation',
      'Customized according to client requirements',
    ],

    note:
      'Detailed Premium package inclusions are to be confirmed by JP Wings.',

    isDemo: false,
  },

  {
    id: 'luxury',

    title: 'Luxury',
    subtitle: 'Design & Construction',

    category: 'Construction Package',
    status: 'Available',
    location: 'JP Wings Construction',

    image:
      '/images/construction/packages/luxury.jpeg',

    description:
      'A luxury construction option incorporating luxury interiors, interior design and architectural requirements.',

    price:
      'Customized quotation',

    features: [
      'Luxury interiors',
      'Interior design',
      'Architecture',
      'Customized according to client requirements',
    ],

    note:
      'Detailed Luxury package inclusions and pricing are to be confirmed by JP Wings.',

    isDemo: false,
  },
]

/* =========================================================
   ONGOING PROJECTS
   ========================================================= */

export const ongoingProjects = [
  {
    id: 'ongoing-01',

    title: 'Contemporary Residential Villa',

    category: 'Residential',

    status: 'Ongoing',

    location: 'Davanagere, Karnataka',

    image:
      '/images/construction/projects/ongoing-01.jpeg.jpeg',

    isDemo: false,
  },

  {
    id: 'ongoing-02',

    title: 'Modern Residential Project',

    category: 'Residential',

    status: 'Ongoing',

    location: 'Davanagere, Karnataka',

    image:
      '/images/construction/projects/ongoing-02.jpeg.jpeg',

    isDemo: false,
  },
]

/* =========================================================
   COMPLETED PROJECTS
   ========================================================= */

export const constructionProjects = [
  {
    id: 'project-01',

    title: 'Elegant Modern Residence',

    category: 'Residential',

    status: 'Completed',

    location: 'Davanagere, Karnataka',

    image:
      '/images/construction/projects/project-01.jpeg',

    isDemo: false,
  },

  {
    id: 'project-02',

    title: 'Contemporary Family Home',

    category: 'Residential',

    status: 'Completed',

    location: 'Davanagere, Karnataka',

    image:
      '/images/construction/projects/project-02.jpeg',

    isDemo: false,
  },

  {
    id: 'project-03',

    title: 'Modern Commercial Development',

    category: 'Commercial',

    status: 'Completed',

    location: 'Davanagere, Karnataka',

    image:
      '/images/construction/projects/project-03.jpeg',

    isDemo: false,
  },

  {
    id: 'project-04',

    title: 'Premium Residential Villa',

    category: 'Residential',

    status: 'Completed',

    location: 'Davanagere, Karnataka',

    image:
      '/images/construction/projects/project-04.jpeg',

    isDemo: false,
  },
]