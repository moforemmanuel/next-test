import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),
  // database: process.env.MONGODB_URL, //auto track
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },
  jwt: {
    secret: 'jujucatchme',
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      console.log('jwt ', { token, user, account, profile, isNewUser });
      // console.log(user);
      return token;
    },

    async session({ session, token, user }) {
      session.user.id = token.id;
      console.log('session', { session, token, user });
      return session;
    },
  },
});
