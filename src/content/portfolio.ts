import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    fullName: "Blessing Iyekeretin Edoleyi",
    professionalTitle: "Virtual Assistant | Customer Support & Administrative Support",
    tagline: "I help busy professionals, founders, and small businesses manage their daily tasks, improve customer relationships, and stay organized so they can focus on what matters most.",
    email: "edoleyiblessing7@gmail.com",
    whatsApp: "09059628581",
    whatsAppFormatted: "09059628581",
    whatsAppLink: "https://wa.me/2349059628581",
    location: "Lagos, Nigeria",
    workArrangement: "Available for remote work",
    languages: ["English (Fluent)"],
    workingHours: "Flexible; to be discussed and agreed upon based on client requirements.",
    pricing: "Quote based on the scope of work, complexity, and duration of the engagement.",
    profilePhoto: null, // Ready for verified portrait asset
    resumeUrl: null, // Ready for verified CV/Resume PDF link
    socialLinks: [], // Unverified social links omitted as instructed
  },

  about: {
    introduction: [
      "Running a business comes with many responsibilities, from communicating with customers to keeping daily tasks organized. I help busy professionals, founders, and small businesses manage these responsibilities by providing customer support and administrative assistance.",
      "My experience running my own hair business, coordinating administrative activities at a tutorial centre, and working as a teacher has helped me develop practical skills in communication, organization, recordkeeping, and managing multiple responsibilities.",
      "I aim to help clients maintain positive customer relationships, stay organized, and focus on other important aspects of their work."
    ],
    callToActionText: "Learn More About Me"
  },

  services: [
    {
      id: "customer-support",
      title: "Customer Support",
      iconName: "Headphones",
      features: [
        "Responding to customer enquiries via email, WhatsApp, and chat.",
        "Providing accurate information and answering frequently asked questions.",
        "Following up on customer enquiries and orders.",
        "Assisting with customer complaints professionally and courteously.",
        "Maintaining clear, respectful, and helpful communication with customers."
      ]
    },
    {
      id: "social-media",
      title: "Social Media Page Management",
      iconName: "Share2",
      focusNote: "Focus: Community management and scheduling client-provided content. Content creation is not included in the current service offering.",
      features: [
        "Scheduling posts using content provided by clients.",
        "Responding to comments and direct messages on business pages.",
        "Answering customer questions and handling complaints received through social media.",
        "Maintaining professional and consistent communication with the online community."
      ]
    },
    {
      id: "admin-support",
      title: "Administrative & Personal Support",
      iconName: "Calendar",
      features: [
        "Managing emails and organizing inboxes.",
        "Calendar management and meeting scheduling.",
        "Appointment coordination and reminders.",
        "Daily task tracking and follow-up.",
        "Organizing documents and maintaining records.",
        "Assisting with routine administrative tasks."
      ]
    },
    {
      id: "travel-planning",
      title: "Travel Planning & Booking Assistance",
      iconName: "Plane",
      features: [
        "Researching flight and accommodation options.",
        "Preparing travel itineraries.",
        "Organizing travel details, meeting schedules, and relevant information.",
        "Assisting with bookings upon client authorization."
      ]
    },
    {
      id: "research-data",
      title: "Research & Data Management",
      iconName: "Database",
      features: [
        "Conducting online research and preparing concise summaries.",
        "Performing basic data entry and recordkeeping.",
        "Organizing information into structured documents.",
        "Updating CRM records and tracking tasks using relevant tools, as required by the client."
      ]
    }
  ],

  tools: [
    {
      name: "Google Workspace",
      category: "workspace",
      description: "Proficient in Gmail, Google Calendar, and Google Docs; developing practical skills in Google Sheets.",
      iconType: "google"
    },
    {
      name: "HubSpot",
      category: "crm",
      description: "Developing skills in CRM contact management and record updates.",
      iconType: "hubspot"
    },
    {
      name: "Monday.com",
      category: "project-management",
      description: "Developing skills in task tracking and workflow organization.",
      iconType: "monday"
    },
    {
      name: "Microsoft Office",
      category: "office",
      description: "Currently developing proficiency across core office productivity applications.",
      iconType: "microsoft"
    }
  ],

  softSkills: [
    "Communication",
    "Organization",
    "Time Management",
    "Problem Solving",
    "Customer Service",
    "Attention to Detail",
    "Adaptability"
  ],

  experiences: [
    {
      id: "hair-vendor",
      role: "Self-Employed",
      organization: "Hair Vendor",
      period: "January 2024 – Present",
      responsibilities: [
        "Manage customer enquiries about wigs and hair extensions, providing product information and personalized recommendations based on customers' needs and preferences.",
        "Communicate with prospective customers and assist them in choosing suitable hair options.",
        "Handle customer communication throughout the product enquiry and purchasing process."
      ]
    },
    {
      id: "unibest-lectures",
      role: "Business Manager",
      organization: "Unibest Lectures",
      period: "December 2024 – April 2025",
      responsibilities: [
        "Managed student and parent enquiries and coordinated class schedules, payment records, and student records.",
        "Followed up with tutors, parents, and management to support smooth daily operations and effective communication.",
        "Developed promotional ideas to attract more students and support the growth of the tutorial centre."
      ]
    },
    {
      id: "al-maala-college",
      role: "Teacher",
      organization: "Al-Maala College",
      period: "April 2025 – March 2026",
      responsibilities: [
        "Taught English, Economics, and Civic Education.",
        "Maintained and updated students' termly assessment records.",
        "Communicated information clearly and supported students' learning and academic progress."
      ]
    }
  ],

  education: [
    {
      id: "uniben-degree",
      degree: "Bachelor of Arts (B.A.) in History",
      institution: "University of Benin",
      certificateUrl: null
    }
  ],

  training: [
    {
      id: "dexa-training",
      title: "Virtual Assistant Training",
      institution: "DEXA",
      certificateUrl: null
    }
  ],

  portfolioSamples: [
    {
      id: "customer-inquiry-tracker",
      title: "Customer Inquiry Tracker",
      subtitle: "Customer Service Demonstration",
      category: "Customer Support",
      description: "A sample record demonstrating customer inquiries, prompt status tracking, and structured follow-up scheduling.",
      isDemonstration: true,
      keyFeatures: [
        "Inquiry categorization & priority tags",
        "Response timestamps & channel indicators",
        "Actionable follow-up calendar triggers"
      ],
      screenshotUrl: null,
      documentPreviewUrl: null,
      sampleDownloadUrl: null,
      externalLink: null
    },
    {
      id: "weekly-task-tracker",
      title: "Weekly Task Tracker",
      subtitle: "Workflow & Project Management Demonstration",
      category: "Task Management",
      description: "A sample task-management board showing structured workflows, prioritized deliverables, deadlines, and completion statuses.",
      isDemonstration: true,
      keyFeatures: [
        "Priority matrix & status indicators",
        "Daily checklists & milestone tracking",
        "Clear task ownership & handover notes"
      ],
      screenshotUrl: null,
      documentPreviewUrl: null,
      sampleDownloadUrl: null,
      externalLink: null
    },
    {
      id: "meeting-notes-action-items",
      title: "Meeting Notes & Action Items",
      subtitle: "Executive Administration Demonstration",
      category: "Administrative Support",
      description: "A structured executive document summarizing meeting discussions, high-level decisions, and follow-up responsibilities with deadlines.",
      isDemonstration: true,
      keyFeatures: [
        "Meeting agenda & participant tracking",
        "Concise decision logs",
        "Assigned action items with target dates"
      ],
      screenshotUrl: null,
      documentPreviewUrl: null,
      sampleDownloadUrl: null,
      externalLink: null
    }
  ],

  whyWorkWithMe: {
    heading: "Why Work With Me?",
    introduction: "I understand the importance of keeping customers informed, handling administrative tasks carefully, and ensuring important details don't get overlooked.",
    strengths: [
      {
        id: "communication",
        title: "Clear & Courteous Communication",
        description: "Prompt, respectful, and thoughtful interactions that reflect your brand values and keep clients feeling valued."
      },
      {
        id: "organization",
        title: "Organized Administrative Support",
        description: "Systematic inbox handling, calendar coordination, and workflow tracking to eliminate chaos."
      },
      {
        id: "attention-to-detail",
        title: "Attention to Detail",
        description: "Meticulous verification of schedules, itineraries, client notes, and operational records."
      },
      {
        id: "reliable-follow-up",
        title: "Reliable Task Follow-Up",
        description: "Consistent oversight ensuring deadlines are met, queries answered, and no pending action falls through."
      },
      {
        id: "recordkeeping",
        title: "Careful Recordkeeping",
        description: "Accurate maintenance of customer logs, databases, CRM profiles, and payment references."
      },
      {
        id: "adaptability",
        title: "Willingness to Learn Client Systems",
        description: "Quick to adapt to your preferred software, communication channels, and team workflows."
      }
    ]
  },

  faqs: [
    {
      id: "faq-who",
      question: "Who can work with you?",
      answer: "I provide virtual assistance to small businesses, founders, busy professionals, and individuals who need help with customer communication and administrative tasks."
    },
    {
      id: "faq-remote",
      question: "Do you work remotely?",
      answer: "Yes. I provide remote support and welcome opportunities to work with clients in Nigeria and internationally."
    },
    {
      id: "faq-hours",
      question: "What are your working hours?",
      answer: "My working schedule can be discussed and agreed upon based on the client's needs and the scope of work."
    },
    {
      id: "faq-turnaround",
      question: "How quickly can you complete tasks?",
      answer: "Turnaround times depend on the type of task, its complexity, and the agreed deadline. I communicate timelines clearly and keep clients informed of progress."
    },
    {
      id: "faq-rates",
      question: "What are your rates?",
      answer: "Pricing depends on the scope of work, the level of support required, and the duration of the engagement. Clients can contact me for a personalized quote."
    },
    {
      id: "faq-get-started",
      question: "How do we get started?",
      answer: "We begin with a brief conversation about the business, the tasks requiring assistance, and the client's priorities. I then recommend a suitable scope of support and provide a quote."
    },
    {
      id: "faq-quote",
      question: "How can clients request a quote?",
      answer: "Clients can contact me directly via WhatsApp at 09059628581 or email me at edoleyiblessing7@gmail.com."
    }
  ],

  // Optional sections: intentionally empty until verified, authenticated information is supplied
  testimonials: [],
  achievements: [],
  volunteerExperiences: []
};
