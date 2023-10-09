import Link from "next/link";


const PostLink = (props) => {
  return (
    <div>
      <Link href="/blog/post/[id]" as={`/blog/post/${props.id}`}>
        {props.id}
      </Link>
    </div>
  );
};

const Blog=()=> {
  return (
    <>
      <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-left my-5 flex flex-col gap-4'><br />

  
      <PostLink id="Learn-ReactJS" />
      <PostLink id="Learn-NextJS" />
      <PostLink id="Learn-Javascript" />
      </div>
      </main>
    </>
  );
}
export default Blog;
