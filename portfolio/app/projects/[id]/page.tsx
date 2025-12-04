import Image from "next/image"
import Link from "next/link"

export default async function ProjectPage(props: PageProps<'/projects/[id]'>){


    const pageData = [
        {
            title: "Friends in Low Prices",
            id: "1",
            imgSrc: "/filp.png",
            description: "Our project Friends in Low Prices is a web application made through React/Next.js that facilitates ease for ticket buying and new connections for avid concert goers. Our audience is concert lovers who want to meet new people with similar interests. They prefer to share the concert experience with others, but don’t have friends with the same taste, are new to a city, or struggle to coordinate plans." + '\n' + "Users will have a home page that shows them the options for shows near them and shows for their favorite artists. Once they click on an event, every major platform’s price for the concert will be shown right next to each other. The user then clicks on the link to the platform, buys the tickets, and comes back to the app and interacts with other users’ posts/DMs to find new friends to go to the concert with. It will be clear in the profiles the kind of music users like, what city they are in, and planning with others will be easy with the DM page. Our app will promote connection and budget-friendly fun!"

        }
    ]

    const {id} = await props.params;
    const data = pageData.find(project => project.id === id)!
    




    return(
        <div className="min-h-screen bg-{}">
            <div className="min-h-10 flex justify-center items-center text-xl py-5 bg-(--accent-darkgreen)">
                <Link href={"/"}>Home</Link>
            </div>
            <section className="flex flex-row px-10 py-10">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl">{data.title}</h1>
                    <p style={{ whiteSpace: "pre-line" }}>{data.description}</p>
                </div>
                <Image 
                    src={data.imgSrc}
                    height={500}
                    width={500}
                    alt=""
                />

            </section>
        </div>
    )
}