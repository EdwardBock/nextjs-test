import {notFound} from "next/navigation";

type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return [];
}


export default function Slug_Page(
    {
        params: {
            slug
        }
    }: Props
){
    if(slug != "a"){
        notFound();
    }
    return (
        <div>{slug}</div>
    )
}