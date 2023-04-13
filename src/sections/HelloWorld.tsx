import TypingAnimation from "@/components/TypingAnimation";
import React from "react";
// import burning from "/burning.webm";

const HelloWorld = () => {
  return (
    <section className="flex relative flex-col items-center justify-center p-24 w-screen min-h-screen">
      <video
        muted
        autoPlay
        loop
        playsInline
        style={{
          position: "fixed",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          transform: "scaleX(-1)",
          zIndex: -3,
        }}
      >
        <source src="/burning.webm" type="video/webm" />
      </video>
      <div
        style={{
          position: "absolute",
          justifyItems: "center",
          left: "10vw",
        }}
      >
        <TypingAnimation
          text="Hello World 👋"
          speed={100}
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        />
        <TypingAnimation
          text="Haziz is here!"
          speed={90}
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        />
        <TypingAnimation
          text={`{ Read : "A Passionate Mobile Developer" }`}
          speed={100}
          style={{
            fontSize: "1.5rem",
            color: "yellow",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          justifyItems: "center",
          bottom: "5vh",
        }}
      >
        <TypingAnimation
          text="👇 Scroll down to see my projects 👇"
          speed={100}
          style={{
            fontSize: "1.5rem",
          }}
        />
      </div>
    </section>
  );
};

export default HelloWorld;
