import { Project } from "@/constants/myProjects";
import React from "react";
import TechLogoImage from "./TechLogoImage";
import iconsURL from "@/constants/iconsURL";
import Link from "next/link";

interface TechStackProps {
  project: Project;
}

const ApplicationType: React.FC<TechStackProps> = ({ project }) => {
  const isDark = project.theme === "dark";
  return (
    <div className="flex relative space-x-4 p-4">
      {project.applicationType.map((applicationType) => {
        let name = applicationType.type.toLowerCase() as keyof typeof iconsURL;
        const foundIconURL = iconsURL[name];
        return (
          <>
            <Link
              href={applicationType.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col pb-4 items-center">
                <TechLogoImage src={foundIconURL} alt={applicationType.type} />
                <h2
                  style={{
                    color: isDark ? "white" : "black",
                  }}
                >
                  {applicationType.type[0].toUpperCase() +
                    applicationType.type.substring(1)}
                </h2>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default ApplicationType;
