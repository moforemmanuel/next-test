import React from 'react';

export default function NewsHeadlines({ data }) {
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(context.previewData);
  return {
    props: {
      data: context.preview
        ? `list of draft articles by ${context.previewData.user}`
        : 'list of published articles',
    },
  };
}
