import DesktopFrame from "@/components/DesktopFrame";
import LogoImage from "@/components/LogoImage";
import TechStack from "@/components/TechStack";
import myProjects from "@/constants/myProjects";
import React from "react";
import ApplicationType from "./ApplicationType";
import Juta from "@/sections/Juta";
import Pokechan from "@/sections/Pokechan";

const Projects: React.FC = () => {
  return (
    <>
      {myProjects.map((project) => {
        switch (project.name) {
          case "Juta":
            return <Juta key={project.name} project={project} />;
          case "Pokechan":
            return <Pokechan key={project.name} project={project} />;
        }
      })}
    </>
  );
};

export default Projects;
