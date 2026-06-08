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
        shortDescription: "An intelligent AI-powered travel planner that transforms simple travel requests into personalized, budget-aware itineraries using agentic workflows.",
        description: "An intelligent AI-powered travel planner that transforms simple travel requests into personalized, budget-aware itineraries. Using agentic workflows, real-time travel data, weather forecasts, and smart budget allocation, it automatically creates detailed day-by-day travel plans tailored to each user's preferences.",
        logoImage: LOGOS.ArmsLogo,
        previewImage: SCREENSHOTS.TravelPlanningAgentShots,
        deviceMockupImage: SCREENSHOTS.TravelPlanningAgentShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/travel-planning-agent",
        sourceUrl: "https://github.com/Divyanshu-hash/travel-planning-agent",
        technologies: [
            TECH_STACK.LangGraph,
            TECH_STACK.Python,
            TECH_STACK.Reactjs,
        ],
        features: [
            {
                title: "Smart Travel Planning",
                description: "Understands natural language travel requests, extracts trip requirements, and automatically generates personalized itineraries with destinations, activities, accommodations, and budget recommendations."
            },
            {
                title: "Real-Time Research & Optimization",
                description: "Combines weather forecasts, hotel searches, attraction discovery, currency conversion, and budget validation to create practical, data-driven travel plans while staying within user-defined constraints."
            },
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "RepoTalk",
        shortDescription: "An AI-powered repository intelligence platform that helps developers understand, analyze, and interact with GitHub repositories through natural language using RAG.",
        description: "An AI-powered repository intelligence platform that helps developers understand, analyze, and interact with GitHub repositories through natural language. By combining Retrieval-Augmented Generation (RAG) with large language models, RepoTalk transforms complex codebases into conversational knowledge, making onboarding, code exploration, and documentation understanding significantly faster.",
        logoImage: LOGOS.VortexaLogo,
        previewImage: SCREENSHOTS.RepoTalkShots,
        deviceMockupImage: SCREENSHOTS.RepoTalkShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/RepoTalk",
        sourceUrl: "https://github.com/Divyanshu-hash/RepoTalk",
        technologies: [
            TECH_STACK.FastAPI,
            TECH_STACK.Python,
            TECH_STACK.GitHub,
        ],
        features: [
            {
                title: "Intelligent Repository Understanding",
                description: "Analyzes repository structure, source code, and documentation to generate contextual explanations, summaries, and insights. Developers can quickly understand unfamiliar projects without manually reading hundreds of files."
            },
            {
                title: "Conversational Code Exploration",
                description: "Enables natural language interactions with GitHub repositories, allowing users to ask questions about architecture, functionality, dependencies, and implementation details while receiving accurate, context-aware responses."
            },
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "ResolveX",
        shortDescription: "An enterprise-grade complaint and issue management platform that streamlines grievance handling through intelligent categorization, automated escalation, and real-time analytics.",
        description: "ResolveX is an enterprise-grade complaint and issue management platform designed for colleges, hostels, offices, housing societies, and organizations. It streamlines grievance handling through intelligent categorization, automated escalation, role-based workflows, and real-time analytics, ensuring transparency, accountability, and faster issue resolution.",
        logoImage: LOGOS.NextmartLogo,
        previewImage: SCREENSHOTS.ResolveXShots,
        deviceMockupImage: SCREENSHOTS.ResolveXShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/ResolveX",
        sourceUrl: "https://github.com/Divyanshu-hash/ResolveX",
        technologies: [
            TECH_STACK.Reactjs,
            TECH_STACK.FastAPI,
            TECH_STACK.MySQL,
        ],
        features: [
            {
                title: "Smart Complaint Management",
                description: "Enables users to submit complaints with supporting evidence while automatically categorizing issues, assigning priorities, tracking status changes, and maintaining a complete audit trail throughout the resolution lifecycle."
            },
            {
                title: "Automated Escalation & Analytics",
                description: "Monitors unresolved complaints against predefined SLAs, automatically escalates overdue cases, and provides comprehensive dashboards with performance metrics, resolution trends, staff productivity insights, and user feedback analysis."
            },
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "Steganographic",
        shortDescription: "A secure full-stack steganography platform that enables users to hide and extract text, images, and audio within digital images using LSB steganography.",
        description: "Steganographic is a secure full-stack steganography platform that enables users to hide and extract text, images, and audio files within digital images using LSB (Least Significant Bit) steganography. Built with a modern React frontend and FastAPI backend, the platform combines secure authentication, intelligent file processing, and seamless media handling to provide a practical solution for confidential data transmission.",
        logoImage: LOGOS.XReconLogo,
        previewImage: SCREENSHOTS.SteganographicShots,
        deviceMockupImage: SCREENSHOTS.SteganographicShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/Steganographic",
        sourceUrl: "https://github.com/Divyanshu-hash/Steganographic",
        technologies: [
            TECH_STACK.FastAPI,
            TECH_STACK.Reactjs,
            TECH_STACK.OpenCV,
        ],
        features: [
            {
                title: "Multi-Format Secure Data Hiding",
                description: "Supports embedding text, images, and audio files inside carrier images while preserving image quality. The system automatically processes payloads, normalizes image formats, and ensures reliable encoding and decoding of hidden information."
            },
            {
                title: "Secure Media Management & Authentication",
                description: "Provides JWT-based authentication, protected user access, secure file uploads, downloadable encoded content, and intelligent file-type detection, creating a complete end-to-end platform for secure steganographic communication."
            },
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "GitPilot-MCP",
        shortDescription: "An autonomous GitHub contribution agent powered by the Model Context Protocol (MCP) that automates issue analysis, code generation, testing, and pull request workflows.",
        description: "GitPilot MCP is an autonomous GitHub contribution agent that streamlines the entire open-source development workflow. Powered by the Model Context Protocol (MCP), it can analyze issues, understand codebases, generate patches, run tests, create pull requests, handle review feedback, and synchronize repositories automatically, helping developers contribute faster and more efficiently.",
        logoImage: LOGOS.YoatubeLogo,
        previewImage: SCREENSHOTS.GitPilotMCPShots,
        deviceMockupImage: SCREENSHOTS.GitPilotMCPShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/GitPilot-MCP",
        sourceUrl: "https://github.com/Divyanshu-hash/GitPilot-MCP",
        technologies: [
            TECH_STACK.Python,
            TECH_STACK.GitHub,
            TECH_STACK.LangChain,
        ],
        features: [
            {
                title: "Autonomous Open-Source Contributions",
                description: "Automates the complete GitHub contribution lifecycle, from repository forking and issue analysis to code generation, testing, commits, and pull request creation. The agent minimizes manual effort while following real-world open-source development practices."
            },
            {
                title: "Intelligent Code Understanding & PR Management",
                description: "Uses Retrieval-Augmented Generation (RAG) to understand repository context, generate targeted code changes, detect merge conflicts, synchronize with upstream repositories, and update pull requests based on maintainer feedback."
            },
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "Real-Time Emotion Detection",
        shortDescription: "A real-time computer vision application that analyzes facial expressions through a webcam and predicts human emotions using a MobileNetV2-based deep learning model.",
        description: "A real-time computer vision application that analyzes facial expressions through a webcam and accurately predicts human emotions using a MobileNetV2-based deep learning model. By combining face detection with transfer learning, the system provides instant emotion recognition, making it suitable for human-computer interaction, behavioral analysis, and AI-powered user experience applications.",
        logoImage: LOGOS.SrinivasLogo,
        previewImage: SCREENSHOTS.EmotionDetectionShots,
        deviceMockupImage: SCREENSHOTS.EmotionDetectionShots,
        theme: "#FFF",
        status: "development",
        liveUrl: "https://github.com/Divyanshu-hash/Real-Time-Emotion-Detection",
        sourceUrl: "https://github.com/Divyanshu-hash/Real-Time-Emotion-Detection",
        technologies: [
            TECH_STACK.Python,
            TECH_STACK.OpenCV,
            TECH_STACK.TensorFlow,
        ],
        features: [
            {
                title: "Real-Time Emotion Recognition",
                description: "Captures live video from a webcam, detects faces instantly, and classifies emotions such as Happy, Sad, Angry, Fear, Surprise, Neutral, and Disgust with real-time visual feedback."
            },
            {
                title: "Efficient Deep Learning Pipeline",
                description: "Leverages transfer learning with MobileNetV2 to deliver fast and accurate emotion predictions while maintaining lightweight performance suitable for real-time applications on standard hardware."
            },
        ],
        logoSize: 50,
        versions: []
    }
];
