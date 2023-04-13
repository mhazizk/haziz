import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

interface IconButtonProps {
  icon: string;
  url: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, url }) => {
  let SelectedIcon;
  switch (icon) {
    case "github":
      SelectedIcon = <FaGithub size={36} />;
      break;
    case "twitter":
      SelectedIcon = <FaTwitter size={36} />;
  }

  return (
    <>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <div className="flex space-x-2 relative hover:scale-150 transition duration-500 ease-in-out">
          {SelectedIcon}
          <RxOpenInNewWindow
            size={18}
            style={{
              top: 0,
              right: 0,
            }}
          />
        </div>
      </Link>
    </>
  );
};

export default IconButton;
