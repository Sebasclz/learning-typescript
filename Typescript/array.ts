const avengers = ['Spidey', 'Hulk', 'Thor', 'Iron Man']


// Typescript will infer the type of the array.
avengers.forEach(avengers => {
  console.log(avengers.toUpperCase())
})