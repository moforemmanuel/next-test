import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

export default function Product({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
      <hr />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productId: '1',
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { productId },
  } = context;
  console.log(`regenerating product ${productId}`)
  const response = await axios.get(
    `http://localhost:4000/products/${productId}`
  );

  const data = await response.data;

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
