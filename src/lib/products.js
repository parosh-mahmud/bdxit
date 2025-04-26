// src/lib/products.js

/**
 * A single source-of-truth for all product data.
 * Each product includes demo descriptions, features, categories, and related product IDs.
 */
export const products = [
  {
    id: 1,
    slug: "adobe-creative-cloud",
    name: "Adobe Creative Cloud",
    price: 6800,
    originalPrice: 10000,
    sale: true,
    image: "/images/adobe.jpg",
    description:
      "Adobe Creative Cloud provides access to industry-leading desktop and mobile apps for design, video, web, and photography. Includes Photoshop, Illustrator, InDesign, Premiere Pro, and more.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Windows, Mac, Mobile",
    },
    categories: ["Adobe", "Creative Suite", "Design"],
    relatedIds: [2, 3, 4],
  },

  {
    id: 2,
    slug: "canva-pro",
    name: "Canva Pro",
    price: 55,
    originalPrice: 99,
    sale: true,
    image: "/images/canva.jpg",
    description:
      "Canva Pro unlocks premium templates, stock photos, and advanced design tools to create stunning social media posts, presentations, and marketing materials in minutes.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web, iOS, Android",
    },
    categories: ["Design", "Marketing"],
    relatedIds: [1, 3, 5],
  },

  {
    id: 3,
    slug: "capcut-pro-account",
    name: "CapCut Pro Account",
    price: 350,
    originalPrice: 4200,
    sale: true,
    image: "/images/capcutpro.jpg",
    extraText: "Order Now",
    description:
      "CapCut Pro Account grants access to advanced video-editing features, high-resolution export, premium effects, and royalty-free music to craft professional reels and stories.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "iOS, Android, Web",
    },
    categories: ["Video Editing", "Social Media"],
    relatedIds: [2, 4, 6],
  },

  {
    id: 4,
    slug: "chatgpt-plus",
    name: "ChatGPT Plus",
    price: 350,
    originalPrice: 1950,
    sale: true,
    image: "/images/chatgptplus.jpg",
    description:
      "ChatGPT Plus subscription grants priority access to GPT-4, faster response times, and extended usage limits for advanced AI-assisted writing, coding, and brainstorming.",
    features: {
      Source: "OpenAI",
      "Product Type": "Subscription",
      Validity: "1 Month",
      "Device Compatibility": "Web",
    },
    categories: ["AI", "Productivity"],
    relatedIds: [1, 3, 5],
  },

  {
    id: 5,
    slug: "chorki-subscription",
    name: "Chorki Subscription",
    price: 125,
    originalPrice: 199,
    sale: true,
    image: "/images/chorki.jpg",
    description:
      "Chorki Subscription offers unlimited streaming of Bangladeshi and international movies, TV series, and exclusive Chorki Originals on all your devices.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web, iOS, Android",
    },
    categories: ["Streaming", "Entertainment"],
    relatedIds: [6, 7, 8],
  },

  {
    id: 6,
    slug: "crunchyroll-premium",
    name: "Crunchyroll Premium",
    price: 160,
    originalPrice: 300,
    sale: true,
    image: "/images/crunchyroll.jpg",
    description:
      "Crunchyroll Premium provides ad-free anime streaming, access to simulcasts, offline downloads, and full HD viewing on any device.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web, iOS, Android",
    },
    categories: ["Streaming", "Anime"],
    relatedIds: [5, 7, 9],
  },

  {
    id: 7,
    slug: "envato-elements",
    name: "Envato Elements",
    price: 450,
    originalPrice: 600,
    sale: true,
    image: "/images/envatoelements.jpg",
    description:
      "Envato Elements gives unlimited downloads of premium creative assets, templates, stock videos, fonts, and more—all royalty-free for personal and commercial projects.",
    features: {
      Source: "Envato",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web",
    },
    categories: ["Assets", "Templates"],
    relatedIds: [8, 9, 10],
  },

  {
    id: 8,
    slug: "freepik-premium",
    name: "Freepik Premium",
    price: 450,
    sale: false,
    image: "/images/freepik.jpg",
    description:
      "Freepik Premium grants full access to millions of vectors, icons, PSDs, and photos for commercial use without attribution requirements.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web",
    },
    categories: ["Assets", "Design"],
    relatedIds: [7, 9, 11],
  },

  {
    id: 9,
    slug: "google-meet",
    name: "Google Meet",
    price: 499,
    sale: false,
    image: "/images/googlemeet.jpg",
    description:
      "Google Meet provides secure video conferencing, screen sharing, live captions, and recording for professional meetings and webinars.",
    features: {
      Source: "Google",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web, iOS, Android",
    },
    categories: ["Video Conferencing"],
    relatedIds: [6, 10, 29],
  },

  {
    id: 10,
    slug: "grammarly-premium-account",
    name: "Grammarly Premium Account",
    price: 2800,
    originalPrice: 3500,
    sale: true,
    image: "/images/grammarly.jpg",
    description:
      "Grammarly Premium offers advanced writing suggestions, tone detection, plagiarism checks, and clarity improvements to elevate your writing.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web, Desktop",
    },
    categories: ["Writing", "Productivity"],
    relatedIds: [2, 8, 15],
  },

  {
    id: 11,
    slug: "hoichoi-subscription",
    name: "Hoichoi Subscription",
    price: 160,
    originalPrice: 200,
    sale: true,
    image: "/images/hoicoi.jpg",
    description:
      "Hoichoi Subscription offers on-demand Bengali movies, series, music videos, and exclusive Hoichoi Originals anytime, anywhere.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web, iOS, Android",
    },
    categories: ["Streaming", "Bangla Entertainment"],
    relatedIds: [5, 12, 13],
  },

  {
    id: 12,
    slug: "microsoft-365-personal",
    name: "Microsoft 365 Personal",
    price: 1200,
    originalPrice: 1500,
    sale: true,
    image: "/images/microsoft365.jpg",
    description:
      "Microsoft 365 Personal includes Word, Excel, PowerPoint, Outlook, and 1 TB of OneDrive cloud storage for one user.",
    features: {
      Source: "Microsoft",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Windows, Mac, Web, Mobile",
    },
    categories: ["Office", "Productivity"],
    relatedIds: [13, 14, 19],
  },

  {
    id: 13,
    slug: "netflix-subscription",
    name: "Netflix Subscription",
    price: 199,
    originalPrice: 350,
    sale: true,
    image: "/images/netflix.jpg",
    description:
      "Netflix Subscription lets you enjoy unlimited streaming of movies, series, documentaries, and Netflix Originals in HD and Ultra HD.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Month",
      "Device Compatibility": "Web, iOS, Android, Smart TVs",
    },
    categories: ["Streaming", "Entertainment"],
    relatedIds: [6, 11, 28],
  },

  {
    id: 14,
    slug: "office-2021-license-key",
    name: "Office 2021 License Key",
    price: 449,
    originalPrice: 650,
    sale: true,
    image: "/images/office2021.jpg",
    description:
      "Office 2021 License Key activates the perpetual version of Word, Excel, PowerPoint, and Outlook for one PC or Mac (lifetime use).",
    features: {
      Source: "Official",
      "Product Type": "Perpetual License",
      Validity: "Lifetime",
      "Device Compatibility": "Windows, Mac",
    },
    categories: ["Office", "Productivity"],
    relatedIds: [12, 19, 20],
  },

  {
    id: 15,
    slug: "quillbot-premium",
    name: "QuillBot Premium",
    price: 2500,
    originalPrice: 2999,
    sale: true,
    image: "/images/quillbot.jpg",
    description:
      "QuillBot Premium unlocks advanced paraphrasing modes, grammar checks, vocabulary enhancements, and plagiarism detection for polished writing.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web",
    },
    categories: ["Writing", "Education"],
    relatedIds: [10, 17, 25],
  },

  {
    id: 16,
    slug: "sonyliv-premium",
    name: "SonyLiv Premium",
    price: 170,
    sale: false,
    image: "/images/sonyliv.jpg",
    description:
      "SonyLiv Premium provides ad-free access to live sports, TV shows, movies, and exclusive originals with HD streaming.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web, iOS, Android",
    },
    categories: ["Streaming", "Sports"],
    relatedIds: [6, 22, 23],
  },

  {
    id: 17,
    slug: "spotify-pro",
    name: "Spotify Pro",
    price: 1150,
    originalPrice: 1499,
    sale: true,
    image: "/images/spotify.jpg",
    description:
      "Spotify Pro offers high-quality music streaming, offline listening, ad-free experience, and access to millions of tracks and podcasts.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Month",
      "Device Compatibility": "Web, iOS, Android, Desktop",
    },
    categories: ["Music", "Entertainment"],
    relatedIds: [15, 28, 29],
  },

  {
    id: 18,
    slug: "t-sports-subscription",
    name: "T-Sports Subscription",
    price: 230,
    sale: false,
    image: "/images/tsports.jpg",
    description:
      "T-Sports Subscription delivers live sports coverage, including cricket, football, and major sporting events, in high definition.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web, Mobile",
    },
    categories: ["Sports", "Live Streaming"],
    relatedIds: [16, 17, 19],
  },

  {
    id: 19,
    slug: "windows-10-pro-license-key",
    name: "Windows 10 Pro License Key",
    price: 350,
    originalPrice: 400,
    sale: true,
    image: "/images/windows10pro.jpg",
    description:
      "Windows 10 Pro License Key unlocks advanced security, BitLocker encryption, Remote Desktop, and business management features.",
    features: {
      Source: "Official",
      "Product Type": "Perpetual License",
      Validity: "Lifetime",
      "Device Compatibility": "PC",
    },
    categories: ["OS", "Windows"],
    relatedIds: [20, 21, 22],
  },

  {
    id: 20,
    slug: "windows-11-pro-license-key",
    name: "Windows 11 Pro License Key",
    price: 399,
    originalPrice: 650,
    sale: true,
    image: "/images/windows11pro.jpg",
    description:
      "Windows 11 Pro License Key provides the latest Windows features, enhanced security, performance improvements, and productivity tools.",
    features: {
      Source: "Official",
      "Product Type": "Perpetual License",
      Validity: "Lifetime",
      "Device Compatibility": "PC",
    },
    categories: ["OS", "Windows"],
    relatedIds: [19, 21, 23],
  },

  {
    id: 21,
    slug: "wondershare-filmora",
    name: "Wondershare Filmora",
    price: 350,
    originalPrice: 499,
    sale: true,
    image: "/images/Wondershare.jpg",
    description:
      "Wondershare Filmora offers intuitive drag-and-drop video editing, templates, transitions, and effects for both beginners and pros.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Windows, Mac",
    },
    categories: ["Video Editing"],
    relatedIds: [22, 23, 24],
  },

  {
    id: 22,
    slug: "wondershare-dr-fone",
    name: "Wondershare Dr. Fone",
    price: 650,
    originalPrice: 899,
    sale: true,
    image: "/images/Wondersharedrphone.jpg",
    description:
      "Wondershare Dr. Fone helps you recover deleted data, repair system issues, unlock phones, and transfer data between devices securely.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Windows, Mac",
    },
    categories: ["Utilities", "Recovery"],
    relatedIds: [21, 23, 24],
  },

  {
    id: 23,
    slug: "wondershare-edrawmax",
    name: "Wondershare EdrawMax",
    price: 450,
    originalPrice: 799,
    sale: true,
    image: "/images/WondershareEdrawMax.jpg",
    description:
      "EdrawMax is a professional diagramming tool for flowcharts, mind maps, org charts, network diagrams, and more with built-in templates.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Windows, Mac",
    },
    categories: ["Diagramming", "Productivity"],
    relatedIds: [22, 24, 25],
  },

  {
    id: 24,
    slug: "wondershare-filmora-14-android",
    name: "Wondershare Filmora 14 Android",
    price: 399,
    originalPrice: 650,
    sale: true,
    image: "/images/WondershareFilmora14Android.jpg",
    description:
      "Filmora 14 Android brings powerful video editing to your phone with filters, transitions, music, and easy sharing options.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Android",
    },
    categories: ["Mobile Editing"],
    relatedIds: [21, 23, 25],
  },

  {
    id: 25,
    slug: "wondershare-filmora-14-mac",
    name: "Wondershare Filmora 14 Mac",
    price: 350,
    originalPrice: 499,
    sale: true,
    image: "/images/WondershareFilmora14Mac.jpg",
    description:
      "Filmora 14 Mac delivers advanced editing capabilities including keyframing, motion tracking, and color grading for Mac users.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Mac",
    },
    categories: ["Video Editing", "Mac"],
    relatedIds: [24, 26, 27],
  },

  {
    id: 26,
    slug: "wondershare-filmstock",
    name: "Wondershare Filmstock",
    price: 1050,
    sale: false,
    image: "/images/WondershareFilmstock.jpg",
    description:
      "Wondershare Filmstock provides royalty-free stock videos, images, music, and effects to enrich your creative projects.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web",
    },
    categories: ["Assets", "Stock Media"],
    relatedIds: [25, 27, 28],
  },

  {
    id: 27,
    slug: "wondershare-recoverit",
    name: "Wondershare Recoverit",
    price: 750,
    originalPrice: 899,
    sale: true,
    image: "/images/WondershareRecoverit.jpg",
    description:
      "Wondershare Recoverit helps you recover lost or deleted files—photos, videos, documents—from PCs, external drives, and SD cards.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Windows, Mac",
    },
    categories: ["Recovery", "Utilities"],
    relatedIds: [26, 28, 29],
  },

  {
    id: 28,
    slug: "youtube-premium-subscription",
    name: "YouTube Premium Subscription",
    price: 115,
    originalPrice: 199,
    sale: true,
    image: "/images/youtubepremium.jpg",
    description:
      "YouTube Premium offers ad-free video streaming, background play, offline downloads, and access to YouTube Music.",
    features: {
      Source: "Official",
      "Product Type": "Subscription",
      Validity: "1 Month",
      "Device Compatibility": "Web, iOS, Android",
    },
    categories: ["Streaming", "Music"],
    relatedIds: [27, 1, 2],
  },

  {
    id: 29,
    slug: "zoom-premium",
    name: "Zoom Premium",
    price: 650,
    sale: false,
    image: "/images/zoom.jpg",
    description:
      "Zoom Premium enables larger meeting capacity, cloud recording, transcription, and advanced host controls for seamless video conferencing.",
    features: {
      Source: "Zoom",
      "Product Type": "Subscription",
      Validity: "1 Year",
      "Device Compatibility": "Web, Desktop, Mobile",
    },
    categories: ["Video Conferencing"],
    relatedIds: [1, 4, 9],
  },
];

/**
 * Return the full array of products
 */
export function getAllProducts() {
  return products;
}

/**
 * Find a single product by its numeric id
 */
export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
