import ApplicationType from "@/components/ApplicationType";
import DesktopFrame from "@/components/DesktopFrame";
import LogoImage from "@/components/LogoImage";
import TechStack from "@/components/TechStack";
import { Project } from "@/constants/myProjects";
import React from "react";
import SectionProps from "./sectionProps";
import Image from "next/image";
import IconButton from "@/components/IconButton";

const pokemonImageURL = [
  {
    name: "Pikachu",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    top: "60vh",
    left: "15vw",
    right: "0px",
    bottom: "0px",
  },
  {
    name: "Charmander",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    top: "100vh",
    left: "15vw",
    right: "0px",
    bottom: "0px",
  },
  {
    name: "Squirtle",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    top: "100vh",
    left: "70vw",
    right: "0px",
    bottom: "0px",
  },
  {
    name: "Bulbasaur",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    top: "60vh",
    left: "70vw",
    right: "0px",
    bottom: "0px",
  },
] as const;

const Pokechan: React.FC<SectionProps> = ({ project }) => {
  const isDark = project.theme === "dark";
  return (
    <>
      <section
        key={project.name}
        className="flex relative flex-col items-center justify-center p-24 w-screen"
      >
        {/* <div
          style={{
            position: "absolute",
            top: "-800px",
            borderRadius: "50%",
            width: "1000px",
            height: "1000px",
            backgroundColor: "#EB0006",
            zIndex: -2,
          }}
        /> */}
        {pokemonImageURL.map((pokemon, index) => {
          const { name, url, top, left, right, bottom } = pokemon;
          return (
            <Image
              key={name}
              src={url}
              alt={name}
              width={200}
              height={200}
              style={{
                position: "absolute",
                top: top,
                left: left,
                right: right,
                bottom: bottom,
                zIndex: 20,
              }}
            />
          );
        })}

        <div
          style={{
            display: "flex",
            position: "absolute",
            backgroundColor: "#FEC30A",
            top: "-100px",
            width: "200%",
            height: "100%",
            transform: "rotate(15deg)",
            zIndex: -3,
          }}
        />
        <div className="flex flex-col justify-center items-center text-center">
          <LogoImage src={project.logo.url} alt={project.logo.alt} />
          <h1
            className="pb-1"
            style={{
              color: isDark ? "white" : "black",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            {project.name}
          </h1>
          <h2
            className="pb-1"
            style={{
              color: isDark ? "white" : "black",
            }}
          >
            {project.description}
          </h2>
          <ApplicationType project={project} />
          <DesktopFrame url={project.applicationType[0].link} />
          <TechStack project={project} />
          <div className="flex space-x-4">
            {project.projectURL.map(({ name, url }) => {
              return <IconButton key={name} icon={name} url={url} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pokechan;
