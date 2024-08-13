
// funciones
function sumarFunction(a: number, b: number) {
  return a + b
}

sumarFunction(1, 2)

function saludar(persona: { name: string, age: number}) {
  const { name, age } = persona
  console.log(`Hola ${name}, tu edad es ${age}`)
}

saludar({ name: 'Sebas', age: 20 })

function saludar2({ name, age }: { name: string, age: number}) {
  console.log(`Hola ${name}, tu edad es ${age}`)
  return age
} // Devolvera un number

// Funciones de funciones
const sayHiFromFunction = ((fn: (name: string) => string): void => {
  fn('sebas')
})

const sayHi = ((name: string): string => {
  console.log(`Hola ${name}`)
  return name
})

sayHiFromFunction(sayHi)

// Tipar las arrow functions
const sumar = (a: number, b: number): number => {
  return a + b
}

const restar: (a: number, b: number) => number = (a, b) => {
  return a - b
}

// never. El never significa que nunca se devolvera nada
function throwError(message: string): never {
  if (message) throw new Error(message)
  throw new Error(message)
}

// void. El void significa que no devolvera nada
function sumar3(a: number, b: number): void {
  console.log(a + b)
}