// import Image from 'next/image'
import MainLayout from '../../components/layouts/MainLayout'
import { Inter } from '@next/font/google'
import styles from './Projects.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <MainLayout>
      <div className={styles['content-container']}>
        <h2 className={styles.description}>
          Welcome to Projects Page
        </h2>
      </div>
    </MainLayout>
    
  )
}
