import {getMemes} from "@/app/memes/utils/fetch";
import Link from "next/link"



export default async function HomePage() {

    const memes = await getMemes("0")
    return (
        <div>
            <ul>
                {memes?.map((item:any)=> {
                   return <Link href={`/memes/${item.id}`} key={item.name}>
                       <li key={item.name}>
                           {item.name}
                       </li>
                   </Link>
                })}
            </ul>
        </div>
    );
}