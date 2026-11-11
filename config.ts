import heroImage from './assets/bcnobg.svg';

export const SITE = {
    website: 'https://brianclincy.com', //Will Added to the .env file during deployment
    author: 'Brian Clincy',
    description: 'Brian Clincy the technologist, activist, podcaster and developer, who wants to make the world better than what he found it. ',
    title: 'Brian Clincy A Plus in a world of Minuses',
    theme: 'A Plus in a world of Minuses',
    ogTitle: 'Brian Clincy A Plus in a world of Minuses',
    ogImage: 'astropaper-og.jpg',
    lightAndDarkMode: true,
    postPerPage: 3,
    scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
    email: 'info@brianclincy.com',

    // Lab Info
    labName: 'Brian Clincy',
    university: 'University Name',
    logo: '/assets/blogo.svg', // Logo path
    avatar: '/assets/bclogo.svg', // Avatar for SEO/Schema

    // Hero Section (Home Page) - Main content does not need to be translated for 8 languages by default
    hero: {
        title: 'Advancing Computer Vision & Deep Learning Technologist.',
        subtitle: 'We are the Scholar-Lite Lab.',
        action: 'View Publications', // Optional call to action text
        image: heroImage, // Hero image path
    },

    // Navigation
    nav: [
        { text: 'Home', link: '/', key: 'home', active: false },
        { text: 'Technologist', link: '/technologist', key: 'technologist', active: false },
        { text: 'Activist', link: '/activist', key: 'activist', active: false },
        { text: 'Projects', link: '/projects', key: 'projects', active: false },
        { text: 'Connect', link: '/join', key: 'join', active: false },
        { text: 'Team', link: '/team', key: 'team', active: false },
        { text: 'Search', link: '/search', key: 'search', active: false },
    ],
    footerNav: [
        { text: 'Home', link: '/', key: 'home', active: false },
        { text: 'Technologist', link: '/technologist', key: 'technologist', active: false },
        { text: 'Activist', link: '/activist', key: 'activist', active: false },
        { text: 'projects', link: '/projects', key: 'projects', active: false },
        { text: 'Team', link: '/team', key: 'team', active: false },
        { text: 'Join Us', link: '/join', key: 'join', active: false },
    ],

    // Custom Pages (Appended after 'Join Us')
    customPages: [
        // Example: { text: 'Alumni', link: '/alumni', key: 'alumni' }
    ],
    // i18n Config
    i18n: {
        enabled: true,
        defaultLocale: 'en',
        locales: [
            { code: 'en', name: 'English', tag: 'en-EN' },
            { code: 'es', name: 'Español', tag: 'es-ES' },
            { code: 'fr', name: 'Français', tag: 'fr-FR' },
            { code: 'de', name: 'Deutsch', tag: 'de-DE' },
            { code: 'ko', name: '한국어', tag: 'ko-KR' },
            { code: 'ja', name: '日本語', tag: 'ja-JP' },
            { code: 'zh', name: '中文', tag: 'zh-CN' },
        ],
    }

};

export const LOCALE = {
    lang: 'en', // html lang code. Set this empty and default will be "en"
    langTag: ['en-EN'], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
    enable: true,
    svg: true,
    width: 216,
    height: 46,
};

export const SOCIALS = [
    {
        name: 'GitHub',
        link: 'https://github.com/bclincy',
        active: true,
    },
    {
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/bclincy',
        active: true,
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/clincy',
        active: true,
    },
    {
        name: 'Facebook',
        link: 'https://facebook.com/bclincy',
        active: true,
    }
];

// Default language configuration
export const DEFAULT_LANG: 'en' | 'es' | 'fr' | 'de' | 'ko' | 'ja' | 'zh' = 'en'; 