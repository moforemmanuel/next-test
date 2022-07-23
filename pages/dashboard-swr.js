import axios from 'axios';
import React from 'react';
import useSWR from 'swr';

export default function DashboardSWR() {
  const fetcher = async () => {
    const response = await axios.get('http://localhost:4000/dashboard');
    const data = response.data;
    return data;
  };
  const { data, error } = useSWR('dashboard', fetcher);

  if (error) {
    console.log(error);
    return <h2>An error has occurred - {error.message}</h2>;
  }
  if (!data) {
    return <h2>Loading ...</h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
}
