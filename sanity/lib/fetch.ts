import { createClient } from "next-sanity";

const client = createClient({
    projectId : "jtcqg1an",
    dataset : "production",
    useCdn : true,
    apiVersion : "2023-10-10",
    token:'skaWzKpz7gLMdDKxCWaao2EgGQ0PgCouT32qUyNQuskJ3m3dQtwNPs8Vj7tOA7nIO2DSgGvJUghkVK4KdLGe9wnRdwvDEuUJgZP1eqOt4wWpY8ky640obkWHPpeFmVlxfUOrZWpX2Ubj9Bikl7zAHCXkZF9tic6xe6wJurftlka7ZsWPvGG4'
})
export async function sanityFetch({query, params = {}}: {query : string , params?: any}){
    return await client.fetch(query)
}