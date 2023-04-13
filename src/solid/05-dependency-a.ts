import { PostService } from "./05-dependency-b"
import { ApiDataService, HttpClient } from "./05-dependency-c"

// Main
;(async () => {
	const httpClient = new HttpClient()

	// const provider = new LocalDataBaseService()
	// const provider = new JsonDataBaseService()
	const provider = new ApiDataService(httpClient)

	const postService = new PostService(provider)
	const posts = await postService.getPosts()

	console.log({ posts })
})()
