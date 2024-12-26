This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<br/>
1. Create folder in lower case  <br/> <br/>
2. Generate Next js file<br/>
npx create-next-app@14 .<br/>
add " ." for not create a project folder<br/> <br/>
3. Install Github CLI <br/>
https://cli.github.com/ <br/> <br/>
4. GitHub CLI Login <br/>
gh auth login <br/> <br/>
5. Rename Local Branch <br/>
git branch -m master main <br/> <br/>
6. create repo <br/>
git init <br/>
git add . <br/>
git commit -m "Initial commit" <br/>
gh repo create <br/> <br/>
7. git push -u origin main <br/> <br/>
8. diploy on vercel <br/> <br/>
9. install shad cn and Button <br/>
npx shadcn@latest init <br/>
npx shadcn@latest add button <br/> <br/>
10. push on github <br/> <br/>
11. Run 3 comand for sanity <br/> <br/>
npm i sanity next-sanity @sanity/vision <br/>
12. push on github <br/>
13. class-14-new/src/sanity/sanity.client.ts
 import { createClient, type ClientConfig } from "next-sanity";

const SanityClient: ClientConfig = {
    projectId: "kn4xk1pb",
    dataset: "production",
    apiVersion: "2024-12-22",
    useCdn: false
}

export default createClient(SanityClient);
14. class-14-new/src/sanity/sanity.config.ts
    import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema";

export const SanityConfig = defineConfig({
    name: "default",
    title: "studio",
    projectId: "kn4xk1pb",
    dataset: "production",
    plugins: [structureTool(), visionTool()],
    basePath: "/studio",
    schema: {
        types: schemaTypes
    }
})

15. class-14-new/src/sanity/sanity.query.ts
  import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function GetMovieData() {
    return sanityClient.fetch(
        groq`
        *[_type=="movie"]{
  name,
    description,
    "imageURL": thumbnail.asset->url
}
        `
    )
}
16. class-14-new/src/sanity/schema/index.ts
import { MovieSchema } from "./movie";
import { MovieSchema2 } from "./movie-2";

export const schemaTypes = [MovieSchema, MovieSchema2];
17. class-14-new/src/sanity/schema/movie.ts
export const MovieSchema = {
    name: "movie",
    title: "Movie",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Movie Name",
            type: "string",
        },
        {
            name: "description",
            title: "Movie Description",
            type: "string",
        },
        {
            name: "thumbnail",
            title: "Movie Thumbnail",
            type: "image",
        },
    ]
}






18. class-14-new/src/app/studio/[[...index]]/page.tsx
"use client"
import { SanityConfig } from "@/sanity/sanity.config"
import { NextStudio } from "next-sanity/studio"

export default function SanityStudio(){
    return (<NextStudio config={SanityConfig} />)
}