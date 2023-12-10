class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }

  attack(target) {
    if (target instanceof Unit) {
      target.res -= this.power;
      console.log(
        `${this.name} attacked ${target.name} dealing ${this.power} damage!`
      );
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play(target) {
    if (target instanceof Unit) {
      target[this.stat] += this.magnitude;
      console.log(`${this.name} was played on ${target.name}!`);
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

//Turno 1
const ninjaCinturonRojo = new Unit("Ninja Cinturon Rojo", 3, 3, 4);
const algoritmoDificil = new Effect(
  "Algoritmo Dificil",
  2,
  "aumentar la resistencia del objetivo en 3",
  "res",
  +3
);
algoritmoDificil.play(ninjaCinturonRojo);

//Turno 2
const ninjaCinturonNegro = new Unit("Ninja Cinturon Negro", 4, 5, 4);
const rechazoPromesa = new Effect(
  "Rechazo de promesa no manejado",
  1,
  "reducir la resistencia del objetivo en 2",
  "res",
  -2
);
rechazoPromesa.play(ninjaCinturonRojo);

//Turno 3
const programacionPares = new Effect(
  "Programacion en pareja",
  3,
  "aumentar el poder del objetivo en 2",
  "power",
  +2
);
programacionPares.play(ninjaCinturonNegro);
ninjaCinturonRojo.attack(ninjaCinturonNegro);
