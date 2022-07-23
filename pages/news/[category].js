import axios from 'axios';
// import { useRouter } from 'next/router';
import React from 'react';

export default function Category({ articles, category }) {
  // const router = useRouter();
  // const {
  //   query: { category },
  // } = router;
  //dont use router for server side

  return (
    <>
      <h1>{category} News Updates</h1>
      <div>
        {articles
          // .filter((article) => article.category === category) for Client side, see serveer side in params dest
          .map((article) => {
            return (
              <div key={article.id}>
                <h2>
                  {article.id} {article.title} | {article.category}
                </h2>
              </div>
            );
          })}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    // req,
    // res,
    // query,
    // params,
    params: { category },
  } = context;
  // res.setHeader('Set-Cookie', ['name=Manuel']);
  // console.log(req.headers.cookie);
  // console.log(query);
  // console.log(params);

  const response = await axios.get(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.data;

  return {
    props: {
      articles: data,
      category,
    },
  };
}
