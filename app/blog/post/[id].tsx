import { useRouter } from 'next/router';

const Content = () => {
  const router = useRouter();
  return (
    <div>
        <h2>{router.query.id}</h2>
        <p>This is a detailed dynamic routing page in Nextjs.</p>
    </div>
  );
}

const Post = () => {
  return (
    <div>
      <Content />
    </div>
  );
}

export default Post;