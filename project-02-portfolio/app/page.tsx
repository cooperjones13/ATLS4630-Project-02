// import Image from "next/image";
import Jumbotron from './jumbotron'

export default function Home() {
  return (
    <> 
      <header className="flex flex-row justify-between items-center h-16 px-16 flex-wrap">
        <h1>Logo</h1>
        <ul className="flex flex-row justify-end gap-12">
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
      <Jumbotron/>
      <section className='bg-(--blue) h-screen'>
        <h2>About</h2>
        <p>Hey im Cooper</p>
      </section>
      <section className='bg-(--green) h-screen'>
        <h2>Projects</h2>
      </section>
      <section className='bg-(--yellow) h-screen'>
        <h2>Contact</h2>
      </section>
    </>
  );
}
