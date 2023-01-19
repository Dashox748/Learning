export async function getMemes(id:any){

    const res = await fetch(`https://api.imgflip.com/get_memes`)
    const tempData=await res.json()
    return id !== "0" ? tempData.data.memes.find((item: any) => item.id === id) : tempData?.data?.memes
}