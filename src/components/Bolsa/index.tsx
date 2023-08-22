import styles from './Bolsa.module.scss'
// MODEL
import { BolsaModel } from '@/model/BolsaModel'

interface BolsaProps {
    bolsa: BolsaModel
    onChange: (estado: any) => void
}

export default function Bolsa({ bolsa, onChange }: BolsaProps) {
    const corSelecionada =
        bolsa.cor === 'Preta' ? styles.preta : styles.vermelha

    return (
        <div className={styles.container}>
            <div className={`${styles.bolsa} ${corSelecionada}`}>
                <div>{bolsa.cheia ? 'cheia' : 'vazia'}</div>
                <div className={styles.alca}></div>
                <div className={styles.informacao}>
                    <div>{bolsa.nome}</div>
                    <div>{bolsa.qtdBolso}</div>
                    <div>{bolsa.material}</div>
                    <div
                        className={styles.botao}
                        onClick={() => onChange(bolsa.alterarEspaco())}
                    ></div>
                </div>
                <div className={styles.alca}></div>
            </div>
        </div>
    )
}
