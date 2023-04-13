export interface Post {
	body: string
	id: number
	title: string
	userId: number
}

export abstract class PostsProvider {
	abstract getPosts(): Promise<Array<Post>>
}

export class PostService {
	private posts: Array<Post> = []

	constructor(private _postProvider: PostsProvider) {}

	async getPosts() {
		this.posts = await this._postProvider.getPosts()
		return this.posts
	}
}
