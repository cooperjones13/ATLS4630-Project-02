"use client"

import ContactForm from "@/components/ContactForm";
import LogoLoop from "@/components/LogoLoop";
import Project from "@/components/Project";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useRef } from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiHtml5, SiAdobephotoshop, SiAdobeillustrator, SiTailwindcss, SiNodedotjs, SiLinkedin, SiGithub} from "react-icons/si";


export default function Home() {

    const aboutRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)

    const iconColor = "#ABC4B7"

    const techLogos = [
      { node: <SiReact color={iconColor} tabIndex={-1} className="drop-shadow-md/10 hover"/>, title: "React", href: "https://react.dev" },
      { node: <SiNextdotjs color={iconColor} tabIndex={-1} className="drop-shadow-md/10"/>, title: "Next.js", href: "https://nextjs.org" },
      { node: <SiTypescript color={iconColor} tabIndex={-1} className="drop-shadow-md/10"/>, title: "TypeScript", href: "https://www.typescriptlang.org" },
      { node: <SiHtml5 color={iconColor} tabIndex={-1} className="drop-shadow-md/10"/>, title: "TypeScript", href: "https://www.typescriptlang.org" },
      { node: <SiAdobephotoshop color={iconColor} tabIndex={-1} className="drop-shadow-md/10"/>, title: "TypeScript", href: "https://www.typescriptlang.org" },
      { node: <SiAdobeillustrator color={iconColor} tabIndex={-1} className="drop-shadow-md/10"/>, title: "TypeScript", href: "https://www.typescriptlang.org" },
      { node: <SiTailwindcss color={iconColor} tabIndex={-1} className="drop-shadow-md/10"/>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
      { node: <SiNodedotjs color={iconColor} tabIndex={-1} className="drop-shadow-md/10"/>, title: "Node.js", href: "https://tailwindcss.com" },
    ];

    function smoothScrollTo(divRef: RefObject<HTMLDivElement|null>){
      divRef.current?.scrollIntoView({behavior:"smooth"})
    }

  return (
    <div>
      {/* Navbar */}
      <header className="flex flex-row justify-center w-full absolute">
        <div className="flex flex-row justify-center md:justify-between w-full max-w-300 h-20 items-center mx-10">
          <div className="hidden flex-col justify-center items-center md:flex">
            <Image src={"/logo-white.png"} alt="Cooper Jones Logo" width={35} height={35}></Image>
          </div>
          <ul className="flex flex-row gap-4">
            <li>
              <button
                className="px-5 py-2 cursor-pointer underline decoration-2 underline-offset-5 decoration-transparent hover:decoration-(--accent-tangerine) transition"
                onClick={()=>{
                  smoothScrollTo(aboutRef)
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="px-5 py-2 cursor-pointer  underline decoration-2 underline-offset-5 decoration-transparent hover:decoration-(--accent-tangerine) transition"
                onClick={()=>{
                  smoothScrollTo(projectsRef)
                }}
              >
                Projects
              </button>
            </li><li>
              <button
                className="px-5 py-2 cursor-pointer  underline decoration-2 underline-offset-5 decoration-transparent hover:decoration-(--accent-tangerine) transition"
                onClick={()=>{
                  smoothScrollTo(contactRef)
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </header>
      <section className="flex flex-col h-screen w-full items-center justify-center text-center gap-7">
        <h2 className="text-8xl text-(--foreground) serif">
          Cooper Jones
        </h2>
        <p className="text-4xl">
          Let&apos;s Make Cool Sh*t
        </p>
        <div className="flex flex-row flex-wrap gap-10 justify-center">
          <Link
              href="https://www.linkedin.com/in/cooper-jones-dev/"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-(--accent-darkgreen) w-50 text-center p-3 flex flex-row justify-center items-center gap-5 text-xl hover:bg-(--accent-lightgreen) transition hover:text-(--accent-darkgreen) rounded-lg drop-shadow-sm/50"
              >
                  <SiLinkedin/>
                  LinkedIn
              </Link>
              <Link
                href="https://www.github.com/cooperjones13"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-(--accent-darkgreen) w-50 text-center p-3 flex flex-row justify-center items-center gap-5 text-xl hover:bg-(--accent-lightgreen) transition hover:text-(--accent-darkgreen) rounded-lg drop-shadow-sm/50"
                >
                    <SiGithub/>
                    Github
              </Link>
        </div>
      </section>
      <section ref={aboutRef} className="flex flex-col min-h-100 w-full items-center justify-center text-center gap-10 bg-(--accent-darkgreen) py-15">
        <div className="flex flex-col text-left max-w-300 gap-5 mx-10">
          <h2 className="text-5xl serif">About Me</h2>
          <p>
            I’m a Creative Technology and Design student at the University of Colorado Boulder with a passion for crafting engaging, user-centered digital experiences through front-end web development and UX design. I’ve built a strong foundation in creating responsive, visually appealing, and accessible web applications that balance creativity with functionality. Skilled in React, TypeScript, JavaScript, HTML, and CSS, I enjoy turning design concepts into interactive and intuitive interfaces. I’m always looking for opportunities to collaborate on innovative projects that push the boundaries of web design and development.
          </p>
        </div>
        <LogoLoop
          logos={techLogos}
          logoHeight={80}
          gap={60}
          scaleOnHover={true}
          speed={80}
          fadeOut={true}
          fadeOutColor="#3B5447"
        />
      </section>
      <section ref={projectsRef} className="flex flex-col min-h-100 w-full items-center justify-center text-center gap-10 bg-(--background) py-15">
        <div className="flex flex-col text-left max-w-300 gap-10 mx-10">
          <h2 className="text-5xl serif">Projects</h2>
          <div className="flex flex-wrap justify-center gap-10">
              <Project title="Friends in Low Prices" imgSrc="/filp.png" id={1}/>
              <Project title="Radii" imgSrc="/radii.png" id={2}/>
              <Project title="PASTIME" imgSrc="/pastime.png" id={3}/>
          </div>
        </div>
      </section> 
      <section ref={contactRef} className="flex flex-col min-h-100 w-full items-center justify-center text-center gap-10 bg-(--accent-darkgreen) py-15">
        <div className="flex flex-col text-left max-w-300 w-full gap-5 px-10">
          <h2 className="text-4xl serif">Contact</h2>
          <div className="flex md:justify-between justify-center w-full items-start flex-wrap gap-5">
            <ContactForm/>
            <div className="flex flex-col gap-10 justify-around">
              <Link
              href="https://www.linkedin.com/in/cooper-jones-dev/"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-(--background) w-50 text-center p-3 flex flex-row justify-center items-center gap-5 text-xl hover:bg-(--accent-lightgreen) transition hover:text-(--background) rounded-lg drop-shadow-sm/50"
              >
                  <SiLinkedin/>
                  LinkedIn
              </Link>
              <Link
                href="https://www.github.com/cooperjones13"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-(--background) w-50 text-center p-3 flex flex-row justify-center items-center gap-5 text-xl hover:bg-(--accent-lightgreen) transition hover:text-(--background) rounded-lg drop-shadow-sm/50"
                >
                    <SiGithub/>
                    Github
              </Link>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
