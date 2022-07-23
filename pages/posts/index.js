import axios from 'axios';
import Link from 'next/link';
import React from 'react';

export default function PostList({ posts }) {
  return (
    <div>
      <h1>List of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const data = response.data;

  return { props: { posts: data.slice(0, 1) } };
}
