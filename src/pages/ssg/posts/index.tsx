import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getAllPosts } from 'services/posts'
import { Post } from 'types/post'

type PostsProps = {
  posts: Post[]
}

function Posts({ posts }: PostsProps) {
  return (
    <div style={{ width: '90%', maxWidth: 800, margin: '0 auto' }}>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none' }}>
        {posts?.map(post => (
          <li
            key={post.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#efefef',
              color: '#454545',
              padding: 8,
              borderRadius: 8,
            }}
          >
            <h4>
              {post.id}. {post.title}
            </h4>
            <p>{post.body}</p>
            <Link href={`/ssg/posts/${post.id}`}>
              <a style={{ color: '#4488dd', textAlign: 'end' }}>View</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// TODO: SSG method -- Static Site Generation on build time
export const getStaticProps: GetStaticProps = async function (context) {
  const posts = await getAllPosts()

  return {
    props: { posts },
  }
}

export default Posts
