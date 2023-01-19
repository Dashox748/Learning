import {getMemes} from "@/app/memes/utils/fetch";

export default async function Mem ({params}:any){

    // console.log(params.id)
    const oneMem = await getMemes(params.id)
    console.log(oneMem)
    return(
        <div style={{display:"flex",flexDirection:"column"}}>
            <img src={oneMem?.url} alt={oneMem?.name} style={{width:"700px"}}/>
        </div>
    )
}