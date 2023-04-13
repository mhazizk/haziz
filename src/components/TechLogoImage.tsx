import Image from "next/image";
import React from "react";

interface LogoImageProps {
  src: string;
  alt: string;
  color?: string;
}

const TechLogoImage: React.FC<LogoImageProps> = ({ src, alt, color }) => {
  return <Image src={src} alt={alt} width={48} height={48} className="m-2" />;
};

export default TechLogoImage;
