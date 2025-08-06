import { FaBuilding, FaMoneyBillWave, FaTools, FaChartLine, FaUsers, FaChartBar, FaSync, FaMobileAlt, FaShoppingCart, FaCreditCard, FaUsersCog, FaSearch } from 'react-icons/fa';

export const products = [
  {
    name: 'Zelox Apartment Management System',
    description:
      'A comprehensive property management solution designed for residential and multi-family properties. Streamline tenant management, rent collection, maintenance tracking, and financial reporting with an intuitive, cloud-based platform.',
    features: [
      { icon: <FaBuilding size={24} />, text: 'Tenant Management: Track tenant information, leases, and communications.' },
      { icon: <FaMoneyBillWave size={24} />, text: 'Automated Rent Collection: Integrate with payment systems for seamless rent payments.' },
      { icon: <FaTools size={24} />, text: 'Maintenance Tracking: Manage requests and maintenance schedules efficiently.' },
      { icon: <FaChartLine size={24} />, text: 'Financial Reporting: Generate reports on revenue, expenses, and cash flow.' },
    ],
    pricing: 'Contact us for pricing or to schedule a free demo.',
  },
  {
    name: 'Zelox Sales KeepUp PWA',
    description:
      'A powerful Progressive Web App for sales tracking, designed to help businesses manage leads, track performance, and gain insights on the go. Works seamlessly online or offline across all devices.',
    features: [
      { icon: <FaUsers size={24} />, text: 'Lead Management: Organize and track leads with ease.' },
      { icon: <FaChartBar size={24} />, text: 'Real-Time Analytics: Monitor sales performance with dynamic dashboards.' },
      { icon: <FaSync size={24} />, text: 'Offline Functionality: Access and update data without an internet connection.' },
      { icon: <FaMobileAlt size={24} />, text: 'Cross-Device Compatibility: Use on mobile, tablet, or desktop.' },
    ],
    pricing: 'Contact us for pricing or to schedule a free demo.',
  },
  {
    name: 'Zelox Ecomass System',
    description:
      'A complete e-commerce platform for businesses to create and manage online stores. Features a robust product catalog, seamless shopping cart, secure payment gateways, and advanced customer management tools to drive sales and engagement.',
    features: [
      { icon: <FaShoppingCart size={24} />, text: 'Product Catalog: Easily manage and categorize products with a dynamic inventory system.' },
      { icon: <FaCreditCard size={24} />, text: 'Payment Gateways: Support for multiple secure payment options like PayPal and Stripe.' },
      { icon: <FaUsersCog size={24} />, text: 'Customer Management: Personalized recommendations and CRM integration.' },
      { icon: <FaSearch size={24} />, text: 'Search & Analytics: Advanced search functionality and customer behavior insights.' },
    ],
    pricing: 'Contact us for pricing or to schedule a free demo.',
  },
];