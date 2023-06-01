import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <div className='flex flex-col h-screen justify-between'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  )
}
