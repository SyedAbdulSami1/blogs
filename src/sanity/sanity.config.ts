import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";

export const SanityConfig = defineConfig({
    name:"default",
    title:"studio",
    projectId: "wso1i2g4",
    dataset:"production",
    plugins:[structureTool(), visionTool()],
    basePath:"/studio",
    schema:{
        types: schemaTypes
    }
})