// Ex: 1 e 2
console.log('Exemplo 1 e 2:')
console.log('Retirar comentário para ver o erro de referência')
//const p = new Retangulo1(); // Erro de referência (ReferenceError)

class Retangulo1 {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  }

// Ex: 3
console.log('Exemplo 3:')
// sem nome
let Retangulo2 = class {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  };
  
  // nomeada
  let Retangulo3 = class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  };
  
  const z = new Retangulo3(10,2); // Erro de referência (ReferenceError)
  console.log(z.largura);
  console.log(z.altura);

  // Ex: 4
  console.log('Exemplo 4:')
  class Retangulo4 {
    constructor(altura, largura) {
      this.altura = altura; 
      this.largura = largura;
    }
  //Getter
    get area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}

const quadrado = new Retangulo4(10, 10);

console.log('A área do quadrado é ' + quadrado.area + ': get');
console.log('A área do quadrado é ' + quadrado.calculaArea() + ': método');

// Ex: 5 - Métodos Estáticos
console.log('Exemplo 5:')

class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distancia(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Ponto(5, 5);
const p2 = new Ponto(10, 10);
console.log('P1 é (' + p1.x + ',' + p1.y +')');
console.log('P2 é (' + p2.x + ',' + p2.y +')');

console.log('p1.distancia é: '+p1.distancia); //undefined
console.log('p2.distancia é: '+p2.distancia); //undefined

console.log('A distância entre os pontos é: ' + Ponto.distancia(p1, p2));

// Ex: 6
console.log('Exemplo 6:')

class Animal {
    falar() {
      return this;
    }
    static comer() {
      return this;
    }
}
  
let obj = new Animal();
console.log(obj.falar()); // Animal {}
let falar = obj.falar;
console.log(falar()); // undefined
  
console.log(Animal.comer()); // class Animal
console.log(Animal.falar); //undefined
let comer = Animal.comer;
console.log(comer()); // undefined

// Ex: 7
console.log('Exemplo 7: ')

function Animal2() {   

}
Animal2.prototype.falar2 = function() {
  console.log('Primeira função em execução');
  return this;
}

Animal2.comer2 = function() {
  console.log('Segunda função em execução');
  return this;
}

let obj2 = new Animal2();
console.log(obj2); // Animal 2{}

let falar2 = obj2.falar2;
console.log(falar2); //f(){...}

falar2(); // objeto global - Primeira função em execução
console.log(falar2()); // Primeira função em execução & Windows(...)

let comer2 = Animal2.comer2;  
console.log(comer2); // f(){...}
comer2(); // objeto global - Segunda função em execução
console.log(comer2());

// Exemplo 8: 
console.log('Exemplo 8: ')
class Animal3 {
    constructor(nome) {
      this.nome = nome;
    }
  
    falar() {
      console.log(this.nome + ' emitiu um barulho.');
    }
  }
  
class Cachorro extends Animal3 {
    falar() {
      console.log(this.nome + ' latiu!');
    }
}

class Gato extends Animal3 {
    miar() {
        console.log(this.nome + ' miou!');
    }
}
  
  let cachorro = new Cachorro('Berenice');
  cachorro.falar();
  let serHumano = new Animal3('João');
  serHumano.falar();
  let gato = new Gato('Tavão');
  // Utilizando a clase pai
  gato.falar();
  // Utilizando a classe filha
  gato.miar();

  // Exemplo 9:
  console.log('Exemplo 9: ')
  function Animal4 (nome) {
    this.nome = nome;
  }
  
  Animal4.prototype.falar = function() {
     console.log(this.nome + ' faça barulho.');
  }
  
  class Dog extends Animal4 {
    falar() {
      console.log(this.nome + ' latiuuuuuuuu.');
    }
  }
  
  let dog = new Dog('Zeca');
  dog.falar(); // Mitzie lati.
  let dog2 = new Animal4('Teste');
  dog2.falar();

  // Exemplo 10:
  console.log('Exemplo 10: ');
  let Animal5 = {
    falar() {
       console.log(this.nome + ' faça barulho!!!!!!!!!!!!.');
    }
 };
 
 class Cachorro2 {
    constructor(nome) {
       this.nome = nome;
    }
 }
 
 Object.setPrototypeOf(Cachorro2.prototype, Animal5);
 
 let cachorro2 = new Cachorro2('Mitzie');
 cachorro2.falar(); //Mitzie faça barulho.'

 // Exemplo 11: Species
console.log("Exemplo 11: ");

class MinhaArray extends Array {
  // Sobrescreve species para o construtor da classe pai Array
  static get [Symbol.species]() {
    return Array; 
  }
}

let a = new MinhaArray(1,2,3);
let mapped = a.map(x => x * x);

console.log(mapped instanceof MinhaArray); // false
console.log(mapped instanceof Array); // true

console.log("Exemplo 12: ");

class Gato2 {
  constructor(nome) {
     this.nome = nome;
  }

  falar() {
     console.log(this.nome + ' faça barulho.');
  }
}

class Leao extends Gato2 {
  falar() {
     super.falar();
     console.log(this.nome + ' roars.');
  }
}

let leao = new Leao('Fuzzy');
leao.falar();

// Fuzzy faça barulho.
// Fuzzy roars.

console.log("Exemplo 13:");

class Humano {
  constructor(nome) {
    this.nome = nome;
  }
  andar() {
    return this.nome+' andou um passo'
  }
}

const HumanoFalante = Base => class extends Base {
  falar() {
    return this.nome+' diz: olá mundo!'
  }
}

const HumanoFalanteMixado = Base => class extends Base {
  cantar(){
    return this.nome + ' cantou alto!!'
  }
}

const HumanoFinal = HumanoFalanteMixado(HumanoFalante(Humano))

const humano = new HumanoFinal('Bill Gates')

console.log(humano.andar())
console.log(humano.falar())
console.log(humano.cantar())




 