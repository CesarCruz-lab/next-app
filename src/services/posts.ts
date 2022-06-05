import { Post } from "types/post"

export async function getAllPosts(id?: string) {
  const postId = id || ''
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
  const jsonData = await response.json()

  return jsonData as Post[]
}

export async function getPostById(id: string) {
  const data: any = await getAllPosts(id)
  return data as Post
}
