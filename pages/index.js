import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mary Grigoris</title>
        <meta name="description" content="Mary Grigoris" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1 className="dot">:</h1>

        <div className="info-container">
          <a href="mailto:info@marygrigoris.com">info@marygrigoris.com</a>
        </div>

      </div>

    </>
  )
}
