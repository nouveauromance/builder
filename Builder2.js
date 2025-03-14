// pizzaria - utilizando um padrão builder - exercício

// definindo as propriedades da pizza:
class Tamanho{
    constructor(medida) {
        this.medida = medida;
    }
}

class Massa{
    constructor(tipo) {
        this.tipo  = tipo;
    }
}
class Molho{
    constructor(condimento) {
        this.condimento = condimento;
    }
}
class Recheio{
    constructor(sabor) {
        this.sabor = sabor;
    }
}

// builder
class PizzaBuilder{
    constructor(){
        this.tamanho = null;
        this.massa = null;
        this.molho = null;
        this.recheio = null;
    }
    adicionarTamanho(medida){
        let dimensao;
        switch(Tamanho) {
            case "brotinho":
              tamanho = "Brotinho (20cm)"
              break;
            case "tradicional":
              tamanho = "Tradicional (35 cm)"
              break;
            case "grande":
              tamanho = "Grande (45 cm)"
              break;
            default:
              tamanho = "Escolha uma opção!"
          }
    }
    adicionarMassa(tipo){
        let opcao;
        switch(Massa) {
            case "tradicional":
              massa = "Tradicional"
              break;
            case "integral":
              massa = "Integral"
              break;
            case "vegana":
              massa = "Vegana"
              break;
            case "light":
              massa = "Light (zero lactose e glúten)"
              break;
            default:
              massa = "Escolha uma opção!"
          }
    }
    adicionarMolho(condimento){
        let ingrediente;
        switch(Molho) {
            case "padrão":
              molho = "Tomate Padrão"
              break;
            case "temperado1":
              molho = "Temperado 1"
              break;
            case "temperado2":
              molho = "Temperado 2"
              break;
            default:
              molho = "Escolha uma opção!"
          }
    }
    adicionarRecheio(sabor){
        let gosto;
        switch(Recheio) {
            case "mussarela":
              recheio = "Queijo mussarela"
              break;
            case "calabresa":
              recheio = "Calabresa"
              break;
            case "frango":
              recheio = "Frango"
              break;
            case "catupiry":
              recheio = "Catupiry"
              break;
            case "atum":
              recheio = "Atum"
              break;
            default:
              recheio = "Escolha uma opção!"
          }
    }
    construir(){
        return new Pizza(this.tamanho, this.massa, this.molho, this.recheio);
    }
}

// construindo pizza:
class Pizza{
    constructor(tamanho, massa, molho, recheio){
        this.tamanho = tamanho;
        this.massa = massa;
        this.molho = molho;
        this.recheio = recheio;
    }

    mostrarDetalhes(){
        console.log(`Tamanho: ${this.tamanho.medida}
            Massa: ${this.massa.tipo}
            Molho: ${this.molho.condimento}
            Recheio; ${this.recheio.sabor}`)
    }
}

// utilização do builder para construir os pedidos:
const builder = new PizzaBuilder();

const pizza1 = builder
    .adicionarTamanho("Tradiconal (35 cm)")
    .adicionarMassa("Tradiconal")
    .adicionarMolho("Tomate Padrão")
    .adicionarRecheio("Catupiry")
    .construir();

const pizza2 = builder
    .adicionarTamanho("Brotinho (20 cm)")
    .adicionarMassa("Light (zero lactose e glúten)")
    .adicionarMolho("Tomate Padrão")
    .adicionarRecheio("Frango")
    .construir();

pizza1.mostrarDetalhes();
pizza2.mostrarDetalhes();