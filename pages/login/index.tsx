import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
type Props = {};

const Login = (props: Props) => {
  const { data: session } = useSession();
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      Sign in With Google
    </button>
  );
};

export default Login;
