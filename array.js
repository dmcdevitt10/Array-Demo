// backpack(array) is empty

let backpack = []

// Adds some items

backpack.push('tent', 'sandals', 'hat')

// Adds beef jerky at the beggining of the array

backpack.unshift('beef jerky')

// removes last item(hat)

backpack.pop(backpack)

// removes tent

backpack.splice(1,1)

// Adds more items
let sunglasses = "sunglasses"
backpack.push(sunglasses)
backpack.push('knife', 'toothbrush', 'blanket', 'flashlight', 'food')

// Splits items and puts them into backpack2
let backpack2 = backpack.splice(4, 4)

console.log('backback:', backpack)
console.log('backpack2', backpack2)

// Print everthing in backpack

for(i = 0; i < backpack.length; i++){
    console.log(backpack[i])
}

console.log('------')
//print first two items in backpack2

for(i = 0; i < 2; i++)
console.log(backpack2[i])

console.log('------')
// Print the last three items in backpack

for(i = backpack.length - 3; i < backpack.length; i++){
    console.log(backpack[i])
}

console.log('------')
// create copy first two items in backpack2
let backpack22 = backpack2.slice(0, 2)

console.log('backpack22:', backpack22)