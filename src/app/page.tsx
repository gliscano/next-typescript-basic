import Image from 'next/image'
import { Inter } from '@next/font/google'
import { NextPage } from 'next';
import { Layout } from '../components/layouts';

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div>
         <h1 className="text-3xl font-bold underline">
          Welcome to Home Page
        </h1>
      </div>
    </Layout>
  )
}

export default  Home;