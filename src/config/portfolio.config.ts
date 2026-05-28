import { Avatar_180, Avatar_250 } from "@assets/images";

// Importing SVGs as raw strings
import GithubIconRaw from "@assets/SVGs/Github.svg?raw";
import LinkedinIconRaw from "@assets/SVGs/Linkedin.svg?raw";
import TwitterIconRaw from "@assets/SVGs/Twitter.svg?raw";
import InstagramIconRaw from "@assets/SVGs/Instagram.svg?raw";
import GoogleIconRaw from "@assets/SVGs/Google.svg?raw";
import DiscordIconRaw from "@assets/SVGs/Discord.svg?raw";

import { LogoIcon } from "@/assets/SVGs";

// Theme Configuration
export const themeConfig = "default";

// Site Configuration
export const siteConfig = {
    title: "Divyanshu Giri | Fullstack Software Engineer & Web Developer",
    description: "Divyanshu Giri is a full stack software engineer building high-performance, interactive web applications, real-time systems, and scalable digital experiences.",
    canonical: "https://divyanshugiri.netlify.app/",
    googleSiteVerification: "YRAUUyc8TP4QJ1s53KAdLxcON9xifQf33BnLeP-F_5Y",
    keywords: "Divyanshu Giri, DivyanshuGiri, Fullstack Software Engineer, Fullstack Web Developer, React Developer, Node.js Developer, TypeScript Developer, UI/UX Engineer, Frontend Developer, Backend Developer, JavaScript Developer, Portfolio, Vortexa, ARMS, ARMS 2.0, ARMS v3, Academic Resource Management System, xrecon, Oriv, Oriv.io, Epitome, Epitome 2k24, AIMIT, I create exciting stuff on the internet, Modern Web Apps, Scalable Web Applications",
    avatar: "https://raw.githubusercontent.com/DivyanshuGiri/DivyanshuGiri.github.io/main/Avatar.webp",
    siteUrl: "https://divyanshugiri.netlify.app/",
}

// Header Section
export const headerConfig = {
    logotext: "Portfolio.",
    actionButton: {
        text: "Resume",
        url: "/Divyanshu Resume.pdf" // use full URL or Public Folder path
    },
}

// Hero Section
export const heroConfig = {
    salutation: "Hi👋🏻 My name is",
    firstName: "Divyanshu.",
    lastName: "",
    position: "AI & Backend Developer",
    tagLine: {
        prefixText: "I create",
        highlightedText: "Exciting Stuff",
        suffixText: "on the Internet."
    },
    avatar: Avatar_180 as unknown as string,
    links: [
        {
            label: "GitHub",
            url: "https://github.com/Divyanshu-hash",
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/divyanshu-giri-944b80332/",
            icon: LinkedinIconRaw
        },
        {
            label: "X",
            url: "https://github.com/Divyanshu-hash",
            icon: TwitterIconRaw
        },
        {
            label: "Instagram",
            url: "https://github.com/Divyanshu-hash",
            icon: InstagramIconRaw
        },
        {
            label: "Google Search",
            url: "https://github.com/Divyanshu-hash",
            icon: GoogleIconRaw
        }
    ],
}

// About Section
export const aboutConfig = {
    aboutAvatar: Avatar_250 as unknown as string,
    description: [
        "Hey there! 👋 I’m Divyanshu. I build intelligent AI-powered applications with a strong focus on problem-solving, backend systems, and creating impactful user experiences.",
        "I enjoy working on projects that combine AI with real-world utility — from Retrieval-Augmented Generation systems and computer vision applications to scalable backend architectures and automation workflows. I naturally dive deep into understanding how systems work, optimizing them, and refining every detail until everything feels smooth and reliable.",
        "I like exploring the intersection of Generative AI, machine learning, and modern web technologies — constantly learning, experimenting, and building projects that push my skills further.",
        "If you’re building something innovative, challenging, or AI-driven... I’d love to collaborate on it 🚀"
    ],
}

// Footer Section
export const footerConfig = {
    logo: LogoIcon,
    title: "DivyanshuGiri | Portfolio.",
    links: [
        {
            label: "GitHub",
            url: "https://github.com/Divyanshu-hash",
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/divyanshu-giri-944b80332/",
            icon: LinkedinIconRaw
        },
        {
            label: "X",
            url: "https://github.com/Divyanshu-hash",
            icon: TwitterIconRaw
        },
        {
            label: "Instagram",
            url: "https://github.com/Divyanshu-hash",
            icon: InstagramIconRaw
        },
        {
            label: "Discord",
            url: "https://github.com/Divyanshu-hash",
            icon: DiscordIconRaw
        },
        {
            label: "Google Search",
            url: "https://github.com/Divyanshu-hash",
            icon: GoogleIconRaw
        }
    ],
    copyrightText: `© Copyright 2023-${new Date().getFullYear()} DivyanshuGiri`
}

export type AppConfig = {
    theme: typeof themeConfig;
    site: typeof siteConfig;
    header: typeof headerConfig;
    hero: typeof heroConfig;
    about: typeof aboutConfig;
    footer: typeof footerConfig;
};
