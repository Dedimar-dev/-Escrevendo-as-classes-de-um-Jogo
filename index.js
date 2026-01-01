class herois {
  constructor(nome, idade, tipo){

    this.nome = nome
    this.idade = idade
    this.tipo = tipo

  }
}

let listaHerois = [
  ["Heroi_1", "30", "guerreiro"],
  ["Heroi_2", "25", "mago"],
  ["Heroi_3", "40", "monge"],
  ["Heroi_4", "28", "ninja"]
]


for(let i = 0; i < listaHerois.length; i++){

  let heroi = new herois(listaHerois[i][0], listaHerois[i][1], listaHerois[i][2])
  console.log(`o ${heroi["tipo"]} atacou usando ${tipoDeAtaque(heroi["tipo"])}`)
}

function tipoDeAtaque(tipoAtaque){
    
  switch(true){
    case tipoAtaque === "guerreiro":
      tipoAtaque = "espada"
      break

    case tipoAtaque === "mago":
      tipoAtaque = "magia"
      break

    case tipoAtaque === "monge":
      tipoAtaque = "artes marciais"
      break

    case tipoAtaque === "ninja":
      tipoAtaque = "shuriken"
      break
  }

  return tipoAtaque
}