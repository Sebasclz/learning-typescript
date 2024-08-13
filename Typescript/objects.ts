// Type Alias for defining abilities.
type Abilities = {
  superpowers: string[],
  weaknesses: string[]
}

type Address = {
  planet: string,
  city: string,
}

type HeroId = {
  readonly id?: `${string}-${string}-${string}-${string}-${string}`
}
// Union types 
type HeroPowerScale = 'local' | 'universal' | 'planetary' | 'galactic' | 'multiversal'

// Type Alias for defining hero properties.
type HeroProperties = {
  name: string,
  address: Address,
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
  address: {
    planet: 'Earth',
    city: 'New York'
  },
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
  const { name, address, abilities, powerScale, age, isActive = true } = hero
  return {
    id: crypto.randomUUID(), // Create a random id for the hero.
    name,
    address,
    abilities,
    powerScale,
    age,
    isActive
  }
}

// Create a hero instance with the createHero function.
const spiderman = createHero({
  name: 'Spiderman',
  address: {
    planet: 'Earth',
    city: 'New York'
  },
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
  address: {
    planet: 'Asgard',
    city: 'Midgard'
  },
  abilities: {
    superpowers: ['Strength', 'Durability', 'Speed'],
    weaknesses: ['Weakness', 'Darkness', 'Loss of hair']
  },
  powerScale: 'planetary',
  age: 42,
  isActive: false
})

// Type indexing
const addressHero: HeroProperties['address'] = {
  planet: 'Earth', // Autocompletes with object properties. (address)
  city: 'New York'
}

addressHero.planet // 'Earth'

// Type from value
const address_ = {
  planet: 'Earth', 
  city: 'New York'
}

type Address_ = typeof address_

const Address__: Address_ = {
  planet: 'Earth', // Autocompletes with object properties. (with typeof)
  city: 'New York'
}

// Type from function return
function createAddress() {
  return {
    planet: 'Earth',
    city: 'New York'
  }
}

type Address___ = ReturnType<typeof createAddress> // Return type of createAddress function
