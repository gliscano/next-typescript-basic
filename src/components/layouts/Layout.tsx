import Head from "next/head"
import { FC, ReactNode } from 'react';
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props>= ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Guillermo' }</title>
        <meta name="author" content="G Liscano - Guillermo Rojas" />
      </Head>
      <Navbar />
      <main>
        { children }
      </main>
    </>
  )
};