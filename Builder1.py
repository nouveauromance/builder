# fabrica de automóveis - utilizando um padrão builder - exemplo 01

# definindo as partes do carro:
class Motor:
    def __init__(self, tipo):
        self.tipo = tipo

class Carroceria:
    def __init__(self, estilo):
        self.estilo = estilo

class Rodas:
    def __init__(self, tamanho):
        self.tamanho = tamanho

class Interior:
    def __init__(self, cor):
        self.cor = cor

# builder
class CarroBuilder:
    def __init__(self):
        self.motor = None
        self.carroceria = None
        self.rodas = None
        self.interior = None

    def adicionarMotor(self, tipo):
        self.motor = Motor(tipo)
        return self

    def adicionarCarroceria(self, estilo):
        self.carroceria = Carroceria(estilo)
        return self

    def adicionarRodas(self, tamanho):
        self.rodas = Rodas(tamanho)
        return self

    def adicionarInterior(self, cor):
        self.interior = Interior(cor)
        return self

    def construir(self):
        return Carro(self.motor, self.carroceria, self.rodas, self.interior)

# construindo carro:
class Carro:
    def __init__(self, motor, carroceria, rodas, interior):
        self.motor = motor
        self.carroceria = carroceria
        self.rodas = rodas
        self.interior = interior

    def mostrarDetalhes(self):
        print((f"Carro Construido:\n"
            f"Motor: {self.motor.tipo}\n"
            f"Carroceria: {self.carroceria.estilo}\n"
            f"Rodas: {self.rodas.tamanho}\n"
            f"Interior: {self.interior.cor}"))

# utilização do builder para construir o carro:
builder = CarroBuilder()

carroReferencia = builder\
    .adicionarMotor("")\
    .adicionarCarroceria("")\
    .adicionarRodas("")\
    .adicionarInterior("")\
    .construir()

carroModelo1 = builder\
    .adicionarMotor("1.4")\
    .adicionarCarroceria("Sedan")\
    .adicionarRodas(16)\
    .adicionarInterior("Preto")\
    .construir()

carroModelo2 = builder\
    .adicionarMotor("1.0")\
    .adicionarCarroceria("PickUp")\
    .adicionarRodas(18)\
    .adicionarInterior("Branco")\
    .construir()

carroModelo1.mostrarDetalhes()
carroModelo2.mostrarDetalhes()