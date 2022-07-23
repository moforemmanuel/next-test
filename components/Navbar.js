import Link from 'next/link';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data, status } = useSession();
  // console.log(useSession());
  // console.log(data);
  // console.log(status);

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>

      <ul
        className={`main-nav ${
          !data && status === 'loading' ? 'loading' : 'loaded'
        }`}
      >
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>

        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>

        {status === 'unauthenticated' && !data && (
          <li>
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn('github');
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}

        {status === 'authenticated' && data && (
          <li>
            <Link href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
