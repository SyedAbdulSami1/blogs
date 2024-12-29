export const MovieSchema = {
    name:"movie",
    title:"Movie",
    type: "document",
    fields : [
        {
            name:"name",
            title: "Movie Name",
            type: "string",
        },
        {
            name:"discription", 
            title: "Movie Description",
            type: "string",
        },
        {
            name: "thumbnail", 
            title: "Movie Thumbnail",
            type: "imagee"
        },
    ]
}