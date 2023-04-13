export type Project = {
  name: string;
  description: string;
  logo: {
    url: string;
    alt: string;
  };
  projectURL: {
    name: string;
    url: string;
  }[];
  theme: "light" | "dark";
  applicationType: {
    type: string;
    link: string;
  }[];
  technologies: string[];
};

const myProjects = [
  {
    name: "Juta",
    description: `Your Personal Finance Tracker`,
    logo: {
      url: "https://raw.githubusercontent.com/mhazizk/juta-release-notes/main/src/assets/juta-app-icon.png",
      alt: "Juta Logo",
    },
    projectURL: [
      {
        name: "github",
        url: "https://github.com/mhazizk/juta-release-notes",
      },
      {
        name: "twitter",
        url: "https://twitter.com/juta_app",
      },
    ],
    theme: "dark",
    applicationType: [
      { type: "web", link: "https://juta-web.vercel.app/" },
      {
        type: "android",
        link: "https://play.google.com/store/apps/details?id=app.juta",
      },
      { type: "ios", link: "" },
    ],
    technologies: [
      "React Native",
      "Expo",
      "Javascript",
      "Firebase",
      "Google Cloud Platform",
    ],
  },
  {
    name: "Pokechan",
    description: "A simple Pokemon client",
    logo: {
      url: "https://raw.githubusercontent.com/mhazizk/pokechan/main/src/assets/pokechan_logo.png",
      alt: "Pokechan Logo",
    },
    projectURL: [
      {
        name: "github",
        url: "https://github.com/mhazizk/pokechan",
      },
    ],
    theme: "light",
    applicationType: [
      {
        type: "web",
        link: "https://pokechan.vercel.app/",
      },
    ],
    technologies: ["React", "Javascript", "HTML", "CSS"],
  },
] satisfies Project[];

export default myProjects;
