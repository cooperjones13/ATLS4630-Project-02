import Image from "next/image";

export default function Home() {
  return (
    <> 
      <header className="flex flex-row justify-between items-center h-16 px-32">
        <span>Logo</span>
        <ul className="flex flex-row justify-end gap-12">
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
      <section className="bg-(--green) h-128 w-128 mx-auto flex flex-col justify-center items-center">
        <span className="font-black">
          Cooper Jones
        </span>
        <span>
          Front End Web Developer
        </span>
      </section>
    </>
  );
}
