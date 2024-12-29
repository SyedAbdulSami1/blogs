import { groq } from "next-sanity";
import { SanityClient } from "sanity";

export async function GetMovieData(){
    return SanityClient.tetch(
        groq`
        *[_type=="movie"]{
        name,
        description,
        "imageURL" : thumbnail.asset->url
        }`
    )
}