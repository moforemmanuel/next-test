import { getSession } from 'next-auth/react';
import React from 'react';

export default function Blog({ data }) {
  return <div>Blog Page - {data}</div>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log('blog', { session });

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin/callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session ? 'List of auth posts' : 'list of free blogs',
    },
  };
}
