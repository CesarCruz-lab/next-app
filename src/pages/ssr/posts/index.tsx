import { GetServerSideProps } from 'next'
import { getAllPosts } from 'services/posts'
import { Post } from 'types/post'

type PostsProps = {
  posts: Post[]
}

function Posts({ posts }: PostsProps) {
  return (
    <div>
      <ol>
        {posts?.map(post => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr />
          </li>
        ))}
      </ol>
    </div>
  )
}

// TODO: SSR method -- Server Side Rendering on page request
export const getServerSideProps: GetServerSideProps = async function (context) {
  const posts = await getAllPosts()

  return {
    props: { posts },
  }
}

export default Posts
