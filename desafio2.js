class heroiDeJogo {
  //Inicializa o heroi com nome, idade e tipo

  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  //Exibe a mensagem do ataque de acordo com o tipo do heroi
  atacar() {
    const ataques = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuroken",
    };

    const ataque = ataques[this.tipo] || "ataque desconhecido";
    console.log(`O ${this.tipo} atacou usando ataque ${ataque}.`);
  }
}
// Demonstração
let herois = [
  new heroiDeJogo("Merlin", 120, "mago"),
  new heroiDeJogo("Marum", 35, "guerreiro"),
  new heroiDeJogo("Shaolin", 120, "monge"),
  new heroiDeJogo("Ranzo", 120, "ninja"),
];
herois.forEach((heroi) => heroi.atacar());
