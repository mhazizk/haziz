import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16">
      <p className="text-white">
        {`Made with ❤️ by Haziz © ${new Date().getFullYear()}`}
      </p>
    </div>
  );
};

export default Footer;
