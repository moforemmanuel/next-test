import axios from 'axios';
import React from 'react';
import User from '../components/User';
export default function UserList({ users }) {
  return (
    <div>
      <h1>List of Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  // const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(typeof response);
  const data = await response.data;

  return { props: { users: data } };
}
