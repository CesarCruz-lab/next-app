import { useRouter } from "next/router";

function Post() {
  const router = useRouter();
  const { post_id } = router.query as { post_id: string }

  return (
    <div>
      <h1>Post number: {post_id}</h1>
    </div>
  );
}

export default Post;
