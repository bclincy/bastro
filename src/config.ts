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

    // Hero Section (Home Page) - Main content does not need to be translated for 8 languages by default
    hero: {
        title: 'Advancing Computer Vision & Deep Learning Research.',
        subtitle: 'We are the Scholar-Lite Lab.',
        action: 'View Publications', // Optional call to action text
        image: heroImage, // Hero image path
    },

    // Navigation
    nav: [
        { text: 'Home', link: '/', key: 'home' },
        { text: 'Research', link: '/research', key: 'research' },
        { text: 'Achievements', link: '/achievements', key: 'achievements' },
        { text: 'Team', link: '/team', key: 'team' },
        { text: 'Activities', link: '/activities', key: 'activities' },
        { text: 'Join Us', link: '/join', key: 'join' },
        { text: 'Search', link: '/search', key: 'search' },
    ],
    footerNav: [
        { text: 'Home', link: '/', key: 'home' },
        { text: 'Research', link: '/research', key: 'research' },
        { text: 'Achievements', link: '/achievements', key: 'achievements' },
        { text: 'Team', link: '/team', key: 'team' },
        { text: 'Activities', link: '/activities', key: 'activities' },
        { text: 'Join Us', link: '/join', key: 'join' },
    ],

    // Custom Pages (Appended after 'Join Us')
    customPages: [
        // Example: { text: 'Alumni', link: '/alumni', key: 'alumni' }
    ],

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
        link: 'https://github.com/bclincy',
        active: true,
    },
];

// Default language configuration
export const DEFAULT_LANG: 'en' | 'es' | 'fr' | 'de' | 'ko' | 'ja' | 'zh' = 'en'; 