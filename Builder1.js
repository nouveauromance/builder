// fabrica de automóveis - utilizando um padrão builder - exemplo 01

// definindo as partes do carro:
class Motor{
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class Carroceria{
    constructor(estilo) {
        this.estilo  = estilo;
    }
}
class Rodas{
    constructor(tamanho) {
        this.tamanho = tamanho;
    }
}
class Interior{
    constructor(cor) {
        this.cor = cor;
    }
}

// builder
class CarroBuilder{
    constructor(){
        this.motor = null;
        this.carroceria = null;
        this.rodas = null;
        this.interior = null;
    }
    adicionarMotor(tipo){
        this.motor = new Motor(tipo);
        return this;
    }
    adicionarCarroceria(estilo){
        this.carroceria = new Carroceria(estilo);
        return this;
    }
    adicionarRodas(tamanho){
        this.rodas = new Rodas(tamanho);
        return this;
    }
    adicionarInterior(cor){
        this.interior = new Interior(cor);
        return this;
    }
    construir(){
        return new Carro(this.motor, this.carroceria, this.rodas, this.interior);
    }
}

// construindo carro:
class Carro{
    constructor(motor, carroceria, rodas, interior){
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.interior = interior;
    }

    mostrarDetalhes(){
        console.log(`Carro: ${this.motor.tipo}
            Carroceria: ${this.carroceria.estilo}
            Rodas: ${this.rodas.tamanho}
            Interior; ${this.interior.cor}`)
    }
}

// utilização do builder para construir o carro:
const builder = new CarroBuilder();

const carroModelo1 = builder
    .adicionarMotor("1.4")
    .adicionarCarroceria("Sedan")
    .adicionarRodas(16)
    .adicionarInterior("Preto")
    .construir();

const carroModelo2 = builder
    .adicionarMotor("1.0")
    .adicionarCarroceria("PickUp")
    .adicionarRodas(18)
    .adicionarInterior("Branco")
    .construir();

carroModelo1.mostrarDetalhes();
carroModelo2.mostrarDetalhes();