const avengers = ['Spidey', 'Hulk', 'Thor', 'Iron Man']


// Typescript will infer the type of the array.
avengers.forEach(avengers => {
  console.log(avengers.toUpperCase())
})

const languages: Array<string | number> = []

languages.push('TypeScript') // Its not possible with `languages = []`
languages.push(2) // Its not possible with `languages: Array<string> = []`

type LanguagesObj = {
  [key: string]: string,
} 

const languagesObj: LanguagesObj = {
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  python: 'Python',
}

const languagesWithArrays: Array<LanguagesObj> = [] // Array of objects

languagesWithArrays.push(languagesObj)

console.log(languagesWithArrays) // [ { typescript: 'TypeScript', javascript: 'JavaScript', python: 'Python' } ]

// Tuples 
type cellValue = 'x' | 'o' | ''

type GameBoard = [
  [cellValue, cellValue, cellValue],
  [cellValue, cellValue, cellValue],
  [cellValue, cellValue, cellValue]
]

// Array of arrays of cellValues (3 <-- max number of rows and columns)
const gameBoard: GameBoard = [
  ['x', 'o', 'x'], // Array<string>
  ['o', 'x', 'o'], // Array<string>
  ['x', '', 'o'] // Array<string>
]

// RGB Tuple
type RGB = [number, number, number]
const rgb: RGB = [255, 0, 0] // 0 - 255