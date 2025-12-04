import Image from "next/image"
import Link from "next/link"

type ProjectProps = {
    title: string,
    imgSrc: string,
    id: number
}


export default function Project({title, imgSrc, id}:ProjectProps){

    return (
        <Link className="bg-black" href={`/projects/${id}`}>
            <Image 
                src={null}
                height={500}
                width={500}
                alt=""
            />
            {title}
        </Link>
    )
}