import React from "react";

interface FrameProps {
  url: string;
}

const DesktopFrame: React.FC<FrameProps> = ({ url }) => {
  return (
    <div
      className="flex relative justify-center items-center text-center rounded-xl overflow-hidden bg-slate-700 pt-10 pb-2 pl-2 pr-2 shadow-lg hover:scale-110 transition duration-500 ease-in-out
    "
    >
      <div className="flex absolute top-3 left-4 z-10 items-center space-x-1">
        <div className="flex relative bg-red-600 w-4 h-4 rounded-lg" />
        <div className="flex relative bg-yellow-400 w-4 h-4 rounded-lg" />
        <div className="flex relative bg-green-700 w-4 h-4 rounded-lg" />
      </div>
      <div className="flex justify-center items-center text-center rounded-xl overflow-hidden">
        <iframe
          src={url}
          width={800 / 1.2}
          height={600 / 1.2}
          className="pointer-events-none"
        />
      </div>
    </div>
  );
};

export default DesktopFrame;
