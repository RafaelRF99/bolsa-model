import styles from './page.module.css'
// COMPONENTS
import Bolsa from '@/components/Bolsa'

export default function Home() {
    return (
        <main className={styles.main}>
            <Bolsa />
        </main>
    )
}
