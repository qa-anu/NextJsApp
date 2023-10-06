// import React from "react";
// import Image from "next/image";

// const Blog = () => {
//   return (
//     <main className='max-w-6xl mx-auto mt-4'>
//    <h1>hello</h1>
//   </main>
//   );
// };

// export default Blog;
import Link from "next/link";
import fakePosts from  "../../posts";


export default function Blog({ fakePosts }) {
  return (
    <>
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <h2>All Posts</h2>
        <ol>
          {fakePosts && fakePosts.map((post) => (
            <li key={post.Id}>
              <Link href={`/post/${post.Slug}`}>
                
                <a>{post.Title}</a>
                {/* {console.log(post.Title, 'hello')} */}
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}

export async function getInitialProps() {
  const posts = fakePosts;

  return {
    props: { posts }
  };
}