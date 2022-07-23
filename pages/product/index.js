import Link from 'next/link';
import React from 'react';

export default function ProductList({ productId = 100 }) {
  return (
    <div>
      <Link href="/product/1">
        <a>
          <h2>Product 1</h2>
        </a>
      </Link>
      <Link href="/product/1">
        <a>
          <h2>Product 2</h2>
        </a>
      </Link>
      <Link href={`/product/${productId}`}>
        <a>
          <h2>Product 3</h2>
        </a>
      </Link>

      <br />
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
