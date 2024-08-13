const persona = {
  name: "Sebas",
  age: 20
}

const number = 1
let n: number = 1

let texto = 'hola'

// Con any no saldra el autocompletado ya que TypeScript no sabe que tipo es el valor
let anyValue: any = 'hola'

// Inferencia de tipo
const a = 1 // number
const b = 2 // number
const c = a + b // number
