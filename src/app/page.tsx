import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import MainLayout from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <div className={styles['content-container']}>
        <h2 className={styles.description}>
          Welcome to Home Page
        </h2>
      </div>
    </MainLayout>
    
  )
}
