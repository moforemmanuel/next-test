import axios from 'axios';
import React from 'react';

export default function ProductList({ products }) {
  return (
    <div>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  console.log('Generating or regenerating productlist');
  const response = await axios.get('http://localhost:4000/products');
  const data = await response.data;

  return {
    props: {
      products: data,
    },
    revalidate: 30, //revalidate every 30s - ISR
  };
}
