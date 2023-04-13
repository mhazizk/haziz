import Image from "next/image";
import { Inter } from "next/font/google";
import DesktopFrame from "@/components/DesktopFrame";
import LogoImage from "@/components/LogoImage";
import myProjects from "@/constants/myProjects";
import iconsURL from "@/constants/iconsURL";
import TechLogoImage from "@/components/TechLogoImage";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Head from "next/head";
import HelloWorld from "@/sections/HelloWorld";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
      <Head>
        <title>Hello World 👋</title>
      </Head>
      <main className="flex flex-col overflow-x-hidden overflow-y-hidden">
        <HelloWorld />
        <Projects />
      </main>
    </>
    // </main>
  );
}
