import styles from './Bolsa.module.scss'

export default function Bolsa() {
    return (
        <div className={styles.container}>
            <div className={styles.bolsa}>
                <div className={styles.alca}></div>
                <div className={styles.informacao}>
                    <div>Nome AQUI</div>
                    <div className={styles.botao}></div>
                </div>
                <div className={styles.alca}></div>
            </div>
        </div>
    )
}
