export class BolsaModel {
    #nome
    #cor
    #material
    #cheia
    #qtdBolso

    constructor(
        nome: string,
        material: string,
        qtdBolso: number,
        cor = 'Preta',
        cheia = false,
    ) {
        this.#nome = nome
        this.#cor = cor
        this.#material = material
        this.#cheia = cheia
        this.#qtdBolso = qtdBolso
    }

    get nome() {
        return this.#nome
    }

    get cor() {
        return this.#cor
    }

    get material() {
        return this.#material
    }

    get cheia() {
        return this.#cheia
    }

    get qtdBolso() {
        return this.#qtdBolso
    }

    alterarEspaco() {
        const espaco = !this.cheia
        return new BolsaModel(
            this.nome,
            this.material,
            this.qtdBolso,
            this.cor,
            espaco,
        )
    }
}
