import { useRouter } from 'next/router';

export default function ReviewDetails() {
  const router = useRouter();
  const {
    query: { productId, reviewId },
  } = router;

  return (
    <div>
      This is review {reviewId} of product {productId}
    </div>
  );
}
