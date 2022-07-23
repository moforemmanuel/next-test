import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const handleclick = () => {
    console.log('Placing Order');
    router.push('/product');
  };
  return (
    <div>
      Homepage
      <br />
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/product">
        <a>Products</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <button onClick={handleclick}>Place Order</button>
    </div>
  );
}
