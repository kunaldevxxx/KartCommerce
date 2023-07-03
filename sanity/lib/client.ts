import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skebTqhACXFzz5IZV4OOqbyo960FgpII3ANwa9BeYa70cqDtS6FT7qUh0eM4qj1bx5qWhchvjzsWqixrzexRmdXEK9zcO4cToswCEfow8DthuZY8FNGWGwhpo4yangnqlgNngbsIz5qSI0PQ9CO2apwC5QswZlKYwkVf1MVk3t9NZfaoB8U0",
})
