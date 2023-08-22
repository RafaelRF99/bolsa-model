'use client'
import styles from './page.module.css'
// HOOKS
import { useEffect, useState } from 'react'
// JSON
import listaBolsa from '../json/listaBolsas.json'
// COMPONENTS
import Bolsa from '@/components/Bolsa'
import { BolsaModel } from '@/model/BolsaModel'

export default function Home() {
    const [bags, setBags] = useState<BolsaModel[]>([])

    useEffect(() => {
        renderBolsa()
    }, [])

    function renderBolsa() {
        const lista = listaBolsa.map((bolsa) => {
            return new BolsaModel(
                bolsa.nome,
                bolsa.material,
                bolsa.qtdBolso,
                bolsa.cor,
                bolsa.cheia,
            )
        })
        setBags([...lista])
    }

    return (
        <main className={styles.main}>
            {bags.map((bolsa, i) => {
                return (
                    <Bolsa
                        key={i}
                        bolsa={bolsa}
                        onChange={(estado) => {
                            const alteracao = bags.map((bag) =>
                                bag.nome === bolsa.nome ? estado : bag,
                            )
                            setBags(alteracao)
                        }}
                    />
                )
            })}
        </main>
    )
}
