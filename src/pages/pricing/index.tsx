// import Image from 'next/image'
import MainLayout from '../../components/layouts/MainLayout'
import { Inter } from '@next/font/google'
import styles from './Pricing.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Pricing() {
  return (
    <MainLayout>
      <div className={styles.center}>
        <h2 className={styles.description}>
          Welcome to Pricing Page
        </h2>
      </div>
    </MainLayout>
  )
}