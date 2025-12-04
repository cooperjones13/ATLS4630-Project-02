import LogoLoop from "@/components/LogoLoop";
import Project from "@/components/Project";
import { SiReact, SiNextdotjs, SiTypescript, SiHtml5, SiAdobephotoshop, SiAdobeillustrator, SiTailwindcss, SiNodedotjs} from "react-icons/si";


export default function Home() {

    const iconColor = "#ABC4B7"

    const techLogos = [
      { node: <SiReact color={iconColor}/>, title: "React", href: "https://react.dev" },
      { node: <SiNextdotjs color={iconColor} />, title: "Next.js", href: "https://nextjs.org" },
      { node: <SiTypescript color={iconColor} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
      { node: <SiHtml5 color={iconColor} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
      { node: <SiAdobephotoshop color={iconColor} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
      { node: <SiAdobeillustrator color={iconColor} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
      { node: <SiTailwindcss color={iconColor} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
      { node: <SiNodedotjs color={iconColor}/>, title: "Node.js", href: "https://tailwindcss.com" },
    ];

  return (
    <div>
      {/* Navbar */}
      <header className="flex flex-row justify-center w-full absolute">
        <div className="flex flex-row justify-between w-full max-w-300 h-20 items-center mx-10">
          <div className="flex flex-col justify-center items-center">
            <span>COOPER</span>
            <span>JONES</span>
          </div>
          <ul className="flex flex-row gap-4">
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
      <section className="flex flex-col h-screen w-full items-center justify-center text-center gap-4">
        <h2 className="text-7xl text-(--foreground)">
          Cooper Jones
        </h2>
        <p className="text-4xl">
          Let&apos;s Make Cool Sh*t
        </p>
      </section>
      <section className="flex flex-col min-h-100 w-full items-center justify-center text-center gap-10 bg-(--accent-darkgreen) py-15">
        <div className="flex flex-col text-left max-w-300 gap-5 mx-10">
          <h2 className="text-4xl">About Me</h2>
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
      <section className="flex flex-col min-h-100 w-full items-center justify-center text-center gap-10 bg-(--background) py-15">
        <div className="flex flex-col text-left max-w-300 gap-5 mx-10">
          <h2 className="text-4xl">Projects</h2>
          <div className="bg-white flex flex-wrap justify-center gap-10">
              <Project title="Friends in Low Prices" imgSrc="" id={1}/>
              <Project title="Friends in Low Prices" imgSrc="" id={2}/>
              <Project title="Friends in Low Prices" imgSrc=" "id={3}/>
          </div>
        </div>
      </section>
      <section className="flex flex-col h-100 w-full items-center justify-center text-center gap-10 bg-(--accent-darkgreen)">
        <div className="flex flex-col text-left max-w-300 gap-5">
          <h2 className="text-4xl">Contact</h2>
          <div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
