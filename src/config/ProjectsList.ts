import LOGOS from "@assets/Logos"
import SCREENSHOTS from "@assets/Shots"
import SKILL_STACK from "@/constants/skillStack";
import { buildTechStack } from "@/utils/commonUtils";

//#region Types
/**
 * Projects List Type Definition
 * This interface defines the structure and types of properties for each project in the projects list.
 * It ensures consistency and type safety when working with project data throughout the application.
 * Each project includes details such as name, description, technologies used, features, and links.
 */
export interface IProject {
    isHidden: boolean;

    name: string;
    shortDescription: string;
    description: string;

    logoImage: string;
    previewImage: string;
    deviceMockupImage: string;

    theme: string;
    status: "completed" | "development";

    liveUrl: string;
    sourceUrl: string;

    demoCredentials?: {
        email: string;
        password: string;
    };

    technologies: {
        title: string;
        description: string;
        icon: string;
    }[];

    features: {
        title: string;
        description: string;
    }[];

    logoSize: number;

    versions: {
        title: string;
        version: string;
        url: string;
    }[];
}

/**
 * Technology Stack Type Definition
 * This interface defines the structure and types of properties for each technology in the tech stack.
 */
export interface ITechStack {
    title: string;
    description: string;
    icon: string;
}
//#endregion


//#region Tech Stack
export const TECH_STACK = {
    // Web Fundamentals & Languages
    ...buildTechStack(SKILL_STACK.WebLanguagesStack),

    // Frameworks & Technologies
    ...buildTechStack(SKILL_STACK.FrameworksStack),

    // Hidden Dependencies (Old Frontend)
    ...buildTechStack(SKILL_STACK.HiddenStack),

    // State & Events
    ...buildTechStack(SKILL_STACK.StateEventStack),

    // AI & ML
    ...buildTechStack(SKILL_STACK.AIMLStack),

    // Databases & Tools
    ...buildTechStack(SKILL_STACK.DatabaseToolsStack),

    // Cloud, Storage & DevOps
    ...buildTechStack(SKILL_STACK.CloudDevOpsStack),

    // Tooling, Testing & Observability
    ...buildTechStack(SKILL_STACK.ToolingTestingStack),

    // Configuration & Templating
    ...buildTechStack(SKILL_STACK.ConfigTemplatingStack),

    // IDEs & Design Tools
    ...buildTechStack(SKILL_STACK.IdesDesignStack),
};
//#endregion


//#region COMMON_FEATURES
/**
 * Common Features used across multiple projects
 * This object defines features that are commonly implemented in various projects.
 * Each feature includes a title and description to provide a clear understanding of its purpose.
 * These features can be easily referenced and reused in project configurations to maintain consistency and reduce redundancy.
 * To add a new common feature, simply create a new property in the COMMON_FEATURES object with the appropriate title and description.
 */
const COMMON_FEATURES = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}
//#endregion


//#region Template
// {
//     isHidden: false,
//     name:"TITLE",
//     shortDescription:"SHORT_DESCRIPTION",
//     description:"DESCRIPTION",
//     logoImage:LOGO_URL,
//     previewImage:Screenshots.SCREENSHOT_URL,
//     deviceMockupImage:MockupImages.MOCKUP_URL,
//     theme:"PROJECT_THEME_COLOR_HEX",
//     status:"completed OR development",
//     liveUrl:"PROJECT_URL",
//     sourceUrl:"GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     technologies:[TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     logoSize:50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },
//#endregion Template


//#region Projects List
/**
 * Projects List Configuration
 * This file contains an array of project objects, each representing a project with its details.
 * Each project object includes properties such as name, description, technologies used, features, and links.
 * The projects are organized in a structured format for easy access and management.
 * To add a new project, simply create a new object following the existing structure and append it to the PROJECTS_LIST array.
 * Make sure to import any necessary assets or icons at the top of this file.
 */
export const PROJECTS_LIST: IProject[] = [
    {
        isHidden: false,
        name: "Travel Planning Agent",
        shortDescription: "AI-powered travel assistant that creates personalized itineraries, smart destination recommendations, and seamless trip planning experiences.",
        description: "AI-powered travel assistant that creates personalized itineraries, smart destination recommendations, and seamless trip planning experiences.",
        logoImage: LOGOS.ArmsLogo,
        previewImage: SCREENSHOTS.TravelPlanningAgentShots,
        deviceMockupImage: SCREENSHOTS.TravelPlanningAgentShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/travel-planning-agent",
        sourceUrl: "https://github.com/Divyanshu-hash/travel-planning-agent",
        technologies: [
            TECH_STACK.Python,
            TECH_STACK.Reactjs,
            TECH_STACK.Nodejs
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "RepoTalk",
        shortDescription: "AI-driven GitHub repository assistant that helps developers understand codebases, summarize repositories, and improve collaboration workflows.",
        description: "AI-driven GitHub repository assistant that helps developers understand codebases, summarize repositories, and improve collaboration workflows.",
        logoImage: LOGOS.VortexaLogo,
        previewImage: SCREENSHOTS.RepoTalkShots,
        deviceMockupImage: SCREENSHOTS.RepoTalkShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/RepoTalk",
        sourceUrl: "https://github.com/Divyanshu-hash/RepoTalk",
        technologies: [
            TECH_STACK.Python,
            TECH_STACK.Nextjs,
            TECH_STACK.TypeScript
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "ResolveX",
        shortDescription: "Intelligent problem-solving platform designed to automate workflows, enhance productivity, and deliver smart user assistance.",
        description: "Intelligent problem-solving platform designed to automate workflows, enhance productivity, and deliver smart user assistance.",
        logoImage: LOGOS.NextmartLogo,
        previewImage: SCREENSHOTS.ResolveXShots,
        deviceMockupImage: SCREENSHOTS.ResolveXShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/ResolveX",
        sourceUrl: "https://github.com/Divyanshu-hash/ResolveX",
        technologies: [
            TECH_STACK.Reactjs,
            TECH_STACK.Nodejs,
            TECH_STACK.MongoDB
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "Steganographic",
        shortDescription: "Secure image-based steganography system for hiding and retrieving sensitive information using advanced image processing techniques.",
        description: "Secure image-based steganography system for hiding and retrieving sensitive information using advanced image processing techniques.",
        logoImage: LOGOS.XReconLogo,
        previewImage: SCREENSHOTS.SteganographicShots,
        deviceMockupImage: SCREENSHOTS.SteganographicShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/Steganographic",
        sourceUrl: "https://github.com/Divyanshu-hash/Steganographic",
        technologies: [
            TECH_STACK.Python,
            TECH_STACK.Reactjs
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "GitPilot-MCP",
        shortDescription: "AI-powered Git workflow assistant that streamlines repository management, automation, and developer productivity.",
        description: "AI-powered Git workflow assistant that streamlines repository management, automation, and developer productivity.",
        logoImage: LOGOS.YoatubeLogo,
        previewImage: SCREENSHOTS.GitPilotMCPShots,
        deviceMockupImage: SCREENSHOTS.GitPilotMCPShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/GitPilot-MCP",
        sourceUrl: "https://github.com/Divyanshu-hash/GitPilot-MCP",
        technologies: [
            TECH_STACK.TypeScript,
            TECH_STACK.Nodejs
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "Real-Time Emotion Detection",
        shortDescription: "Deep learning-based emotion recognition system that analyzes facial expressions and delivers real-time emotion insights.",
        description: "Deep learning-based emotion recognition system that analyzes facial expressions and delivers real-time emotion insights.",
        logoImage: LOGOS.SrinivasLogo,
        previewImage: SCREENSHOTS.EmotionDetectionShots,
        deviceMockupImage: SCREENSHOTS.EmotionDetectionShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/Real-Time-Emotion-Detection",
        sourceUrl: "https://github.com/Divyanshu-hash/Real-Time-Emotion-Detection",
        technologies: [
            TECH_STACK.Python,
            TECH_STACK.Reactjs
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: []
    }
];
