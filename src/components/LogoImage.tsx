import Image from "next/image";
import React from "react";

interface LogoImageProps {
  src: string;
  alt: string;
}

const LogoImage: React.FC<LogoImageProps> = ({ src, alt }) => {
  return <Image src={src} width={200} height={200} className="m-4" alt={alt} />;
};

export default LogoImage;
