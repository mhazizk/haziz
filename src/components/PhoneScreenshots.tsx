import { Project } from "@/constants/myProjects";
import React from "react";
import TechLogoImage from "./TechLogoImage";
import iconsURL from "@/constants/iconsURL";
import Image from "next/image";

export interface PhoneScreenshotsProps {
  screenshots: {
    url: any;
    alt: string;
  }[];
}

const PhoneScreenshots: React.FC<PhoneScreenshotsProps> = ({ screenshots }) => {
  return (
    <div className="flex relative space-x-4 p-4">
      {screenshots.map(({ url, alt }) => {
        return (
          <>
            <div
              key={alt}
              className="flex flex-col pb-4 items-center shadow-lg hover:scale-110 transition duration-500 ease-in-out"
            >
              <Image
                src={url}
                alt={alt}
                style={{
                  scale: alt === "Dashboard" ? 2 : 1,
                }}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default PhoneScreenshots;
