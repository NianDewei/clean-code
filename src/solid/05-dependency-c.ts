import { PostsProvider } from "./05-dependency-b"
import localJsonPosts from "./data/local-database.json"

export class LocalDataBaseService implements PostsProvider {
	async getPosts() {
		return [
			{
				userId: 1,
				id: 1,
				title:
					"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
				body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
			},
			{
				userId: 1,
				id: 2,
				title: "qui est esse",
				body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
			}
		]
	}
}

export class JsonDataBaseService implements PostsProvider {
	async getPosts() {
		return localJsonPosts
	}
}

export class ApiDataService implements PostsProvider {
	constructor(private _http: HttpClient) {}

	async getPosts() {
		const post = await this._http.get({
			url: "https://jsonplaceholder.typicode.com/posts"
		})

		return post
	}
}

//! adapter
export class HttpClient {
	async get({ url }: { url: string }) {
		const resp = await fetch(url)
		return await resp.json()

	}
}
