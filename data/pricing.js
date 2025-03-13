export const pricingTiers = [
  {
    id: 1,
    title: "Essentials",
    description: "For creating impressive tools that generate results.",
    price: "$19 USD",
    priceInfo: "Seat per month, 2 seats max",
    buttonLabel: "Start a free trial",

    features: [
      "Real-time tracking and notifications",
      "Real-time analytics",
      "Drag and drop templates",
      "Project Management",
      "24/7 email and chat support",
    ],
  },
  {
    id: 2,
    title: "Business",
    description: "For seamless integrations and sending tools in bulk.",
    price: "$49 USD",
    priceInfo: "Seat cost per month",
    buttonLabel: "Start a free trial",

    features: [
      "CRM and Zapier integrations",
      "Content reporting",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    popular: true,
    imageUrl: "/assets/images/template/money.svg",
    imageAlt: "money",
    darkImageUrl: "/assets/images/template/money-dark.svg",
    darkImageAlt: "money-dark",
  },
];
export const tiers = [
  {
    id: 1,
    plan: "Basic plan",
    price: "$49",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Up to 10 individual users",
      "Basic reporting and analytics",
      "Project Management",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    icon: "unicon-sub-volume",
    buttonText: "Get started",

    highlight: false,
  },
  {
    id: 2,
    plan: "Business plan",
    price: "$79",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Access to all <b>Basic</b> features",
      "200+ integrations",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    icon: "unicon-course",
    buttonText: "Start a free trial",

    highlight: true,
  },
  {
    id: 3,
    plan: "Enterprise plan",
    price: "$199",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Access to all <b>Business</b> features",
      "Unlimited files uploads",
      "Real-time team collaboration",
      "SSO support and custom user roles",
      "Bulk send & Forms",
    ],
    icon: "unicon-building",
    buttonText: "Book a demo",

    highlight: false,
  },
];

export const pricingPlans = [
  {
    title: "Starter",
    price: "$49",
    description: "For creating impressive tools that generate results.",
    features: [
      "Up to 10 individual users",
      "Basic reporting and analytics",
      "Project Management",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    linkText: "Get started",

    additionalClasses: "",
  },
  {
    title: "Pro",
    price: "$79",
    description: "For seamless integrations and sending tools in bulk.",
    features: [
      "Access to all Starter features",
      "200+ integrations",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    linkText: "Start a free trial",

    additionalClasses:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5",
    badge: "Popular",
  },
];

export const tiers2 = [
  {
    name: "Free",
    price: "$0",
    description: "Build a <b>hobby site</b> with every basic features.",
    details: "Free Forever!",
    buttonClass: "btn-secondary",
    features: [
      "Use on 1 website",
      "Personal License",
      "20 Basic Elements",
      "Basic Dynamic Data",
      "Basic Design Library",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    description: "Build <b>one website</b> with every pro feature.",
    details: "Billed annually.",
    buttonClass: "btn-primary",
    features: [
      "Use on 1 website",
      "Personal License",
      "100 Pro Elements",
      "Full Dynamic Data",
      "Full Design Library",
      "Priority support",
    ],
    offer: "Save $25",
  },
  {
    name: "Agency",
    price: "$199",
    description: "Build <b>unlimited websites</b> with every pro feature",
    details: "Billed annually.",
    buttonClass: "btn-secondary",
    features: [
      "Use on unlimited websites",
      "Commercial License",
      "100 Pro Elements",
      "Full Dynamic Data",
      "Full Design Library",
      "Priority support",
    ],
  },
];

export const tiers3 = [
  {
    title: "Free",
    description: "Perfect for casual networkers and newcomers. ",
    price: "Free",
    yearlyPrice: "Free",
    priceDetails: "Upgrade To Premium plans for additional Features",
    linkText: "Start a free trial",
    linkSubtext: "No credit card required",
    features: [
      "1-time connection requests (125 characters)",
      "Basic tone customization (formal, casual) ",
      "Auto-translation for 5+ languages",
    ],
    isPopular: false,
  },
  {
    title: "Silver",
    description: "For professionals looking to scale their LinkedIn outreach",
    price: "$19 USD",
    yearlyPrice: "$180 USD",
    priceDetails: "Seat cost per month",
    linkText: "Subscribe",
    linkSubtext: "No credit card required",
    features: [
      "200-character limit for concise, impactful messages ",
      "50 monthly messages (ideal for steady outreach) ",
      "CRM tagging to organize connections",
      "Priority email support for quick assistance ",
      "",
    ],
    isPopular: false,
  },
  {
    title: "Gold",
    description: "For Recruiters & High-Volume Users ",
    price: "$ 39 USD",
    yearlyPrice: "$ 280 USD",
    priceDetails: "Per‑seat or per‑tool pricing",
    linkText: "Subscribe",
    linkSubtext: "Respond within 24 hrs max",
    features: [
      "300-character limit for detailed, personalized outreach",
      "200 monthly messages (4x the quota of Silver) ",
      "Workflow optimization to streamline follow-ups ",
      "Priority email + chat support for urgent needs ",
      "",
    ],
    isPopular: true,
  },
  {
    title: "Platinum",
    description: "For enterprises with advanced automation, analytics, and CRM integration",
    price: "$19 USD",
    yearlyPrice: "$12 USD",
    priceDetails: "Seat per month, 2 seats max",
    linkText: "Subscribe",
    linkSubtext: "No credit card required",
    features: [
      "Voice/video scripts for standout follow-ups ",
      "24/7 premium support & dedicated account manager ",
      "Advanced analytics (acceptance rates, engagement trends)",
      "24/7 email and chat support"
    ],
    isPopular: false,
  }
];
