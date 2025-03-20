// pizzaria - utilizando um padrão builder - exercício

// definindo as propriedades da pizza:
class Tamanho {
  constructor(medida) {
    this.medida = medida;
  }
}

class Massa {
  constructor(tipo) {
    this.tipo = tipo;
  }
}
class Molho {
  constructor(condimento) {
    this.condimento = condimento;
  }
}
class Recheio {
  constructor(sabor) {
    this.sabor = sabor;
  }
}

// builder
class PizzaBuilder {
  constructor() {
    this.tamanho = null;
    this.massa = null;
    this.molho = null;
    this.recheio = null;
  }

  adicionarTamanho(medida) {
    const tamanhoEscolhido = prompt(
      'Escolha o tamanho (brotinho, tradicional, grande):'
    );
    switch (medida) {
      case 'brotinho':
        this.tamanho = new Tamanho('Brotinho (20cm)');
        break;
      case 'tradicional':
        this.tamanho = new Tamanho('Tradicional (35 cm)');
        break;
      case 'grande':
        this.tamanho = new Tamanho('Grande (45 cm)');
        break;
      default:
        this.tamanho = new Tamanho('Escolha uma opção!');
    }
    return this;
  }

  adicionarMassa(tipo) {
    const massaEscolhida = prompt(
      'Escolha a massa (tradicional, integral, vegana, light):'
    );
    switch (tipo) {
      case 'tradicional':
        this.massa = new Massa('Tradicional');
        break;
      case 'integral':
        this.massa = new Massa('Integral');
        break;
      case 'vegana':
        this.massa = new Massa('Vegana');
        break;
      case 'light':
        this.massa = new Massa('Light (zero lactose e glúten)');
        break;
      default:
        this.massa = new Massa('Escolha uma opção!');
    }
    return this;
  }

  adicionarMolho(condimento) {
    const condimentoEscolhido = prompt(
      'Escolha o molho (padrão, temperado1, temperado2):'
    );
    switch (condimento) {
      case 'padrão':
        this.molho = new Molho('Tomate Padrão');
        break;
      case 'temperado1':
        this.molho = new Molho('Temperado 1');
        break;
      case 'temperado2':
        this.molho = new Molho('Temperado 2');
        break;
      default:
        this.molho = new Molho('Escolha uma opção!');
    }
    return this;
  }

  adicionarSabor(sabor) {
    const saborEscolhido = prompt(
      'Escolha o recheio (mussarela, calabresa, frango, catupiry, atum):'
    );
    switch (sabor) {
      case 'mussarela':
        this.recheio = new Recheio('Queijo mussarela');
        break;
      case 'calabresa':
        this.recheio = new Recheio('Calabresa');
        break;
      case 'frango':
        this.recheio = new Recheio('Frango');
        break;
      case 'catupiry':
        this.recheio = new Recheio('Catupiry');
        break;
      case 'atum':
        this.recheio = new Recheio('Atum');
        break;
      default:
        this.recheio = new Recheio('Escolha uma opção!');
    }
    return this;
  }
  construir() {
    return new Pizza(this.tamanho, this.massa, this.molho, this.recheio);
  }
}

// Construindo pizza:
class Pizza {
  constructor(tamanho, massa, molho, recheio) {
    this.tamanho = tamanho;
    this.massa = massa;
    this.molho = molho;
    this.recheio = recheio;
  }

  mostrarDetalhes() {
    console.log(`Tamanho: ${this.tamanho.medida}
            Massa: ${this.massa.tipo}
            Molho: ${this.molho.condimento}
            Recheio: ${this.recheio.sabor}`);
  }
}

// Função para capturar as escolhas do usuário
function criarPizza() {
  const builder = new PizzaBuilder();

  const pizza = builder
    .adicionarTamanho()
    .adicionarMassa()
    .adicionarMolho()
    .adicionarSabor()
    .construir();

  return pizza;
}

// Utilização do builder para construir os pedidos:
const pizza1 = criarPizza();
const pizza2 = criarPizza();

pizza1.mostrarDetalhes();
pizza2.mostrarDetalhes();
