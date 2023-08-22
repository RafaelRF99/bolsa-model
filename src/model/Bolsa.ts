export class Bolsa {
    #nome
    #cor
    #material
    #cheia
    #qtdBolso

    constructor(
        nome: string,
        cor: string,
        material: string,
        cheia = false,
        qtdBolso: number,
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
        return new Bolsa(
            this.nome,
            this.cor,
            this.material,
            espaco,
            this.qtdBolso,
        )
    }
}
