import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
type Props = {};

const Login = (props: Props) => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        <div>Welcome, {session.user.email}</div>
        <button onClick={() => signOut()}>sign out</button>
      </>
    );
  } else
    return (
      <>
        <div>not signed in</div>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
};

export default Login;
