import { type ClientConfig, createClient } from "next-sanity";

const SanityClient: ClientConfig ={
    projectId: "wso1i2g4",
    dataset: "production",
    apiVersion: "2024-12-22",
    useCdn: false,
}
export default createClient(SanityClient)