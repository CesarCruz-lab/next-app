import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getAllPosts, getPostById } from 'services/posts'
import { Post as PostItem } from 'types/post'

type PostProps = {
  post: PostItem
}

function Post({ post }: PostProps) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <div>
      <h4>{post?.title}</h4>
      <p>{post?.body}</p>
    </div>
  )
}

// TODO: Mapping posts to create static paths at build time
export const getStaticPaths: GetStaticPaths = async function () {
  const posts = await getAllPosts()

  const paths = posts.slice(0, 50).map(post => ({
    params: { post_id: String(post.id) },
  }))

  // TODO: fallback allows creating new static path when server is running
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async function (context) {
  const post = await getPostById(String(context.params?.post_id || ''))

  return {
    props: { post },
    revalidate: 30 // seconds,
  }
}

export default Post
