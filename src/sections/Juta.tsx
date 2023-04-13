import ApplicationType from "@/components/ApplicationType";
import DesktopFrame from "@/components/DesktopFrame";
import LogoImage from "@/components/LogoImage";
import TechStack from "@/components/TechStack";
import { Project } from "@/constants/myProjects";
import React from "react";
import SectionProps from "./sectionProps";
import dashboard from "@/assets/juta/dashboard.svg";
import analytics from "@/assets/juta/analytics.svg";
import budgets from "@/assets/juta/budgets.svg";
import my_reports from "@/assets/juta/my_reports.svg";
import logbook_creamy from "@/assets/juta/logbook_creamy.svg";
import logbook_light from "@/assets/juta/logbook_light.svg";
import logbook_dark from "@/assets/juta/logbook_dark.svg";

import PhoneScreenshots, {
  PhoneScreenshotsProps,
} from "@/components/PhoneScreenshots";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@/components/IconButton";

const jutaScreeenshots = [
  {
    url: analytics,
    alt: "Analytics",
  },
  {
    url: logbook_dark,
    alt: "Logbook Dark Theme",
  },
  {
    url: dashboard,
    alt: "Dashboard",
  },
  {
    url: budgets,
    alt: "Budgets",
  },
  {
    url: my_reports,
    alt: "My Reports",
  },
  //   {
  //     url: logbook_creamy,
  //     alt: "Logbook Creamy Theme",
  //   },
  //   {
  //     url: logbook_light,
  //     alt: "Logbook Light Theme",
  //   },
];

const Juta: React.FC<SectionProps> = ({ project }) => {
  const isDark = project.theme === "dark";
  return (
    <>
      <section
        key={project.name}
        className="flex relative flex-col items-center justify-center p-24 w-screen"
      >
        <div
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "200%",
            height: "100%",
            backgroundColor: "#000000",
            transform: "rotate(15deg)",
            zIndex: -1,
          }}
        />
        <div className="flex relative flex-col justify-center items-center text-center">
          <LogoImage src={project.logo.url} alt={project.logo.alt} />
          <h1
            className="pb-1"
            style={{
              color: isDark ? "white" : "black",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            {project.name}
          </h1>
          <h2
            className="pb-1"
            style={{
              color: isDark ? "white" : "black",
            }}
          >
            {project.description}
          </h2>
          <ApplicationType project={project} />
          <PhoneScreenshots screenshots={jutaScreeenshots} />
          <TechStack project={project} />
          <div className="flex space-x-4">
            {project.projectURL.map(({ name, url }) => {
              return <IconButton key={name} icon={name} url={url} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Juta;
