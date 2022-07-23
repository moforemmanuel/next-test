import React from 'react';
import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter();
  // const productId = router.query.productId;
  const {query: {productId}} = router;

  return <div>Details about product {productId}</div>;
}
