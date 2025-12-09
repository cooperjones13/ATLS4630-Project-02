import Image from "next/image"
import Link from "next/link"
import { IoOpenOutline } from "react-icons/io5";
import { SiAdobecreativecloud, SiArduino, SiExpress, SiFigma, SiGithub, SiNextdotjs, SiReact, SiTypescript, SiWordpress } from "react-icons/si";

export default async function ProjectPage(props: PageProps<'/projects/[id]'>){


    const pageData = [
        {
            title: "Friends in Low Prices",
            subtitle: "Full Stack Web Application",
            id: "1",
            imgSrc: "/filp.png",
            imgAlt:"Mock Layout for Application",
            description: "Our project Friends in Low Prices is a web application made through React/Next.js that facilitates ease for ticket buying and new connections for avid concert goers. Our audience is concert lovers who want to meet new people with similar interests. They prefer to share the concert experience with others, but don’t have friends with the same taste, are new to a city, or struggle to coordinate plans. \n \n Users will have a home page that shows them the options for shows near them and shows for their favorite artists. Once they click on an event, every major platform’s price for the concert will be shown right next to each other. The user then clicks on the link to the platform, buys the tickets, and comes back to the app and interacts with other users’ posts/DMs to find new friends to go to the concert with. It will be clear in the profiles the kind of music users like, what city they are in, and planning with others will be easy with the DM page. Our app will promote connection and budget-friendly fun! \n \n This project is still in progress but will be completed in May 2026",
            tags: [
                {
                    name: "React",
                    icon: <SiReact />
                },
                {
                    name: "Typescript",
                    icon: <SiTypescript/>
                },
                {
                    name: "Next.js",
                    icon: <SiNextdotjs/>
                }
            ],
            links:[
                // {
                //     name:"Github Repo",
                //     icon: <SiGithub/>,
                //     url:""
                // }
            ]
        },
        {
            title: "Radii",
            subtitle: "UX Design for Mobile Application",
            id: "2",
            imgSrc: "/radii.png",
            imgAlt:"Mock Layout for Application",
            description: "Radii is a concept for a social music-sharing and listening app built to make discovering and enjoying music with friends more seamless. Instead of relying on traditional streaming links, Radii creates a space where users can share tracks, explore what others are listening to, and even join real-time listening sessions together. \n \n The design process included user research, iterative interface sketches, and the creation of a high-fidelity Figma prototype focused on three core areas: a personalized music feed, a live listening feature, and a discovery page. To ground the concept in real functionality, I also developed a backend prototype using Node.js and the Spotify API, along with a structured data model for users, tracks, artists, albums, and playlists. \n \n Radii showcases a full product workflow - from identifying a problem in the way people share music to designing intuitive, connected experiences supported by real data integration.",
            tags: [
                {
                    name: "Figma",
                    icon: <SiFigma />
                },
                {
                    name: "Adobe CC",
                    icon: <SiAdobecreativecloud />
                },
            ],
            links:[
                {
                    name:"Project Blog",
                    icon: <SiWordpress/>,
                    url: "https://cooperjonesdesign.wordpress.com/category/capstone/"
                },
            ]
        },
        {
            title: "Pastime",
            subtitle: "Digital Physical Interface",
            id: "3",
            imgSrc: "/pastime.png",
            imgAlt:"Screenshot of web component",
            description: "Pastime is a physical–digital system for exploring Major League Baseball team history and statistics. Users select a team by scanning a custom baseball embedded with an RFID chip and adjust the season using a sliding potentiometer. Data from the Arduino hardware is sent to an Express.js API, which interprets the inputs and provides the team ID, slider value, and color scheme. A React-based frontend then requests data from the MLB Stats API and updates the display in real time, creating a seamless interactive experience that connects physical interaction with live, API-driven information.",
            tags: [
                {
                    name:"React",
                    icon: <SiReact/>
                },
                {
                    name: "Arduino",
                    icon: <SiArduino/>
                },
                {
                    name: "Express",
                    icon: <SiExpress/>
                }
            ],
            links:[
                {
                    name:"Github Repo",
                    icon: <SiGithub/>,
                    url: "https://github.com/cooperjones13/object-react"
                },
                {
                    name:"Project Blog",
                    icon: <SiWordpress/>,
                    url: "https://cooperjonesdesign.wordpress.com/category/object/"
                },
            ]
        }
    ]

    const {id} = await props.params;
    const data = pageData.find(project => project.id === id)!
    




    return(
        <div className="min-h-screen bg-{}">
            <div className="min-h-10 flex justify-center items-center text-xl py-5 bg-(--accent-darkgreen)">
                <Link href={"/"}>Home</Link>
            </div>
            <section className="flex flex-col justify-center items-center px-10 py-10">
                <div className="flex flex-row max-w-400 gap-10  flex-wrap justify-center items-start">
                    <div className="flex flex-col gap-5 max-w-150">
                        <h1 className="text-3xl font-bold serif tracking-wider">{data.title}</h1>
                        <strong>{data.subtitle}</strong>
                        <ul className="flex flex-row gap-5">
                            {data.tags.map((tag, index)=>
                                <li key={index} className="flex flex-row justify-center items-center gap-2 bg-(--accent-darkgreen) p-2 rounded-md">
                                    {tag.icon} {tag.name}
                                </li>
                            )}
                        </ul>
                        <p style={{ whiteSpace: "pre-line" }}>{data.description}</p>
                        <div className="flex flex-row gap-5">
                            {data.links.map((link, index)=>
                                <Link 
                                    href = {link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    key={index} 
                                    className="flex flex-row justify-center items-center gap-2 bg-(--accent-darkgreen) p-2 rounded-md hover:bg-(--accent-lightgreen) hover:text-(--background)"
                                    >
                                    {link.icon} {link.name} <IoOpenOutline/>
                                </Link>
                            )}
                        </div>
                    </div>
                    <Image 
                        src={data.imgSrc}
                        height={500}
                        width={500}
                        alt=""
                    />
                </div>

            </section>
        </div>
    )
}