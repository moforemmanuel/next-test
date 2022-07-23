import { userAgent } from 'next/server';
import React from 'react';

export default function User({ user }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
