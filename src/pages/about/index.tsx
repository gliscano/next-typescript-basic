// import Image from 'next/image'
import MainLayout from '../../components/layouts/MainLayout'
import DarkLayout from '../../components/layouts/DarkLayout'
import { Inter } from '@next/font/google'
import styles from './About.module.css'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <div className={styles['content-container']}>
      <h2 className={styles.description}>
        Welcome to About Page
      </h2>
    </div>
  )
}

About.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}