import React, { useState, useEffect } from "react";

interface TypingAnimationProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  speed: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed,
  ...rest
}) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let timer: any;
    let currentIndex = 0;

    const animateText = () => {
      if (currentIndex >= text.length) {
        clearInterval(timer);
        return;
      }
      setCurrentText((prevText) => {
        return text.slice(0, currentIndex + 1);
      });
      currentIndex++;
    };

    timer = setInterval(animateText, speed);

    return () => {
      clearInterval(timer);
    };
  }, [text, speed]);

  return <p {...rest}>{currentText}</p>;
};

export default TypingAnimation;
