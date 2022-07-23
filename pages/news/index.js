import axios from 'axios';
import React from 'react';

export default function NewsArticleList({ articles }) {
  return (
    <div>
      <h1>List of News Articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:4000/news');
  const data = await response.data;

  return {
    props: {
      articles: data,
    },
  };
}
