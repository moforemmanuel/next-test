import axios from 'axios';
import React from 'react';

//useRouter to build without error
// import { useRouter } from 'next/router';

export default function Post({ post }) {
  // const router = useRouter();
  // if (router.isFallback) {
  //   //next is generating html + json in backgroun and post/prop is not yet available
  //   return <h1>Loading...</h1>;
  // }
  return (
    //fallback is false
    <div>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body} </p>
    </div>
  );
}

export async function getStaticPaths() {
  // const response = await axios.get(
  //   'https://jsonplaceholder.typicode.com/posts'
  // );
  // const data = response.data;

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   }; //array of 100 objects
  // });
  return {
    paths: [
      {
        params: { postId: '1' },
      },
      {
        params: { postId: '2' },
      },
      {
        params: { postId: '3' },
      },
    ],
    fallback: 'blocking',
  };
}
export async function getStaticProps(context) {
  const {
    params: { postId },
  } = context;
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = response.data;

    console.log(`Generating page for /post/${postId}`);

    return {
      props: {
        post: data,
      },
    };
  } catch (err) {
    return { notFound: true };
  }
}
