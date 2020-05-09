import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/navBar'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
    <Footer />
    </div>
  )
}
