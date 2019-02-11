let greet = 'hello'
const cartoon = 'garfield'
greet = greet + cartoon
console.log(greet)

const n = 1
const add = (number) => {
    number += 7
    console.log(number)
}
add(n)

const numbers = [1,2,3]
numbers.push(4)
numbers.push(5)
numbers.pop()
numbers.shift()
numbers.unshift(0)
console.log(numbers)

const game = {
    name: 'This Legend of Zelda',
    firstRelease: '02/21/86'
}
const genre = 'Adventure'
game[genre] = genre
game.lastRelease = '03/03/17'
console.log(game)

const gameV2 = {
    name: 'This Legend of Zelda'
}

const mainCharacters = ['Link', 'Princess Zelda']
const firstRelease = '02/21/86'
Object.assign(gameV2, {characters: mainCharacters}, {firstRelease})
console.log(gameV2)

const gameV3 = {
    name : 'Apex Legends',
    type : 'Battle Royale'
}
const companies = {}
const developer = "Respawn"
const publisher = 'EA'

companies[developer] = developer
companies.publisher = publisher
Object.assign(gameV3, {companies});
console.log(gameV3);