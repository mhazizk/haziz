import { Project } from "@/constants/myProjects";
import React from "react";
import TechLogoImage from "./TechLogoImage";
import iconsURL from "@/constants/iconsURL";

interface TechStackProps {
  project: Project;
}

const TechStack: React.FC<TechStackProps> = ({ project }) => {
  const isDark = project.theme === "dark";
  return (
    <div className="flex relative space-x-4 p-4">
      {project.technologies.map((technologyName) => {
        let name = technologyName
          .split(" ")
          .join("")
          .toLowerCase() as keyof typeof iconsURL;
        const foundIconURL = iconsURL[name];
        return (
          <>
            <div key={name} className="flex flex-col pb-4 items-center">
              <TechLogoImage src={foundIconURL} alt={technologyName} />
              <h2
                style={{
                  color: isDark ? "white" : "black",
                }}
              >
                {technologyName}
              </h2>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default TechStack;
