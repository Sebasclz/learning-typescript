// Type Alias for defining abilities.
type Abilities = {
  superpowers: string[],
  weaknesses: string[]
}

type HeroId = {
  readonly id?: `${string}-${string}-${string}-${string}-${string}`
}
// Union types 
type HeroPowerScale = 'local' | 'universal' | 'planetary' | 'galactic' | 'multiversal'

// Type Alias for defining hero properties.
type HeroProperties = {
  name: string,
  abilities: Abilities,
  powerScale: HeroPowerScale,
  age: number, 
  isActive?: boolean // Optional active status of the hero.
}

// Type Alias for defining a hero.
type Hero = HeroProperties & HeroId

// Creating a hero object based on the Hero type.
let hero: Hero = {
  name: 'Spiderman',
  abilities: {
    superpowers: ['Super strength', 'Flight', 'Electrical manipulation'],
    weaknesses: ['Spider sense']
  },
  powerScale: 'local',
  age: 16,
  isActive: true // Optional property.
}

// Destructure abilities from hero.
const { abilities } = hero

// Destructure superpowers from abilities.
const { superpowers } = abilities

// Log each superpower to the console.
superpowers.forEach(superpower => {
  console.log(superpower)
})

// Function to create a hero with default isActive value.
function createHero(hero: Hero): Hero {
  const { name, abilities, powerScale, age, isActive = true } = hero
  return {
    id: crypto.randomUUID(), // Create a random id for the hero.
    name,
    abilities,
    powerScale,
    age,
    isActive
  }
}

// Create a hero instance with the createHero function.
const spiderman = createHero({
  name: 'Spiderman',
  abilities: {
    superpowers: ['Super strength', 'Flight', 'Electrical manipulation'],
    weaknesses: ['Spider sense']
  },
  powerScale: 'local',
  age: 16,
  isActive: true // Optional property.
})
console.log(spiderman)

const thor = createHero({
  name: 'Thor',
  abilities: {
    superpowers: ['Strength', 'Durability', 'Speed'],
    weaknesses: ['Weakness', 'Darkness', 'Loss of hair']
  },
  powerScale: 'planetary',
  age: 42,
  isActive: false
})

