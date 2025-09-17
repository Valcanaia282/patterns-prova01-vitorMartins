class Bicicleta {
    move() {
      return "Pedalando a bicicleta no pátio da UNISATC";
    }
  }
  
  class Patinete {
    move() {
      return "Andando de patinete pelo estacionamento da UNISATC";
    }
  }
  
  class Onibus {
    move() {
      return "Andando de ônibus e chegando na UNISATC";
    }
  }
  
  class TransporteFactory {
    static createTransporte(tipo) {
      switch (tipo.toLowerCase()) {
        case "bicicleta":
          return new Bicicleta();
        case "patinete":
          return new Patinete();
        case "onibus":
          return new Onibus();
        default:
          throw new Error("Tipo de transporte desconhecido.");
      }
    }
  }
  
  const tipo = "bicicleta";
  const transporte = TransporteFactory.createTransporte(tipo);
  
  console.log(transporte.move());  