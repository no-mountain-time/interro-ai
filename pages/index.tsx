import { Inter } from 'next/font/google'
import CTA from '@/components/CallToAction'
import Features from '@/components/Features'
import Team from '@/components/Team'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <CTA />
      <Features />
      <Team />
    </>
  )
}
