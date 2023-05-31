import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GithubProvider({
        //@ts-ignore
      clientId: process.env.GITHUB_ID,
      //@ts-ignore
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
        //@ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
        //@ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ]
}

export default NextAuth(authOptions);

