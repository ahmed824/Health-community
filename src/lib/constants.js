export const siteConfig = {
  name: "Health Community ",
  description: "A comprehensive health community platform for wellness and medical information",
  url: "https://health-community.com",
  ogImage: "https://health-community.com/og.jpg",
  links: {
    social: [
      {
        name: "Snapchat",
        href: "https://snapchat.com/add/healthcommunity",
        icon: "FaSnapchat",

      },
      {
        name: "TikTok",
        href: "https://tiktok.com/@healthcommunity",
        icon: "PiTiktokLogoLight",

      },
      {
        name: "Facebook",
        href: "https://facebook.com/healthcommunity",
        icon: "FiFacebook",

      },
      {
        name: "Instagram",
        href: "https://instagram.com/healthcommunity",
        icon: "FiInstagram",
      },
    ],
  },
};

export const getNavigation = (lang) => [
  { title: "Home", href: `/${lang}/` },
  { title: "Articles", href: `/${lang}/articles` },
  { title: "Community", href: `/${lang}/community` },
  { title: "Resources", href: `/${lang}/resources` },
  { title: "About", href: `/${lang}/about` },
];

export const getFooterLinks = (lang) => ({
  company: [
    { name: "home", href: `/${lang}/` },
    { name: "about us", href: `/${lang}/about-us` },
    { name: "courses", href: `/${lang}/courses` },
    { name: "jobs", href: `/${lang}/jobs` },
    { name: "blogs", href: `/${lang}/blogs` },
  ],
  resources: [
    { name: "Health terms and conditions", href: `/${lang}/conditions` },
    { name: "privacy policy", href: `/${lang}/privacy-policy` },
    { name: "contact us", href: `/${lang}/contact` },
    { name: "login", href: `/${lang}/login` },
    { name: "sign up", href: `/${lang}/sign-up` },
  ],
});
