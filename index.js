
// const str = 'string'

// console.log(str.split('i'))

// console.log(str.split(''))





// const arr = [1, 2, 3, 4, 5]

// console.log(arr.join('_,'))



// const arr = [1, 2, 3, 4, 5]

// console.log(arr.includes(3))
// console.log(arr.includes(6))



// const arr = [ 'alex', 'victor', 'artur'];

// const find = arr.find((item, index) => {
//     return item === 'victor'
// })

// console.log(find)

// if(find){
//     console.log(find)
// }else {
//     console.log('no such name')
// }



// const arr = [ 'alex', 'victor', 'artur'];

// console.log(arr.reverse())



// const arr = [ 'alex', 'victor', 'artur']

// console.log(arr.indexOf('alex'))
// console.log(arr.findIndex((item, index) => {
//     return item === 'alex' && index !==0;
// }))


// const arr = [ 'alex', 'victor', 'artur'];

// const arr2 = arr.map((item) => {
//     return item.toLowerCase()
// })
// console.log(arr2)

// const result = arr.reduce((acc, currElement, index, arr) => {
// console.log(acc)
// acc.push(currElement.toLowerCase())
// return acc ;
// }, [])

// console.log(result)




// const arr = [3, 4, 5]


// let sum = 0
// for(let i = 0; i < arr.length; i++){
//     sum = sum + arr[i]
// }
//  console.log(sum)


// const arr = [3, 4, 5]

// const sum = arr.reduce((acc, curr, index) => {
//     console.log('index', index)
//     console.log('acc', acc)
//     console.log('curr', curr)
//     return acc + curr
// })

// console.log(sum)




// const arr = [3, 4, 5]

// const arr2 = arr.map((item) =>{
//     return item + 1
// })

// console.log(arr2)


// const arr2 = arr.reduce((acc, curr) => {
//     acc.push(curr + 1);
//     return acc;
// }, [])

// console.log(arr2)



// const arr = ['alex', 'ion', 'victor']

// const result = arr.reduce ((acc, curr) => {
//     acc.push(curr[0])

//     return acc;
// },[])

// console.log(result)



// const arr = [4, 5, 3, 7, 2, 6, 10, 11]

// const sorted = arr.sort ((a, b) => {
//     return a - b
// })

// console.log(sorted)





// const arr = [4, 5, 3, 7, 2, 6, 10, 11]

// const sorted = arr.sort ((a, b) => {
//     return a - b
// }).reverse()

// console.log(sorted)





// const arr = [4, 5, 3, 7, 2, 6, 10, 11]

// const sorted = arr.sort ((a, b) => {
//     return b - a
// })

// console.log(sorted)

// const arr = ['alex', 'dan', 'ion'];

// const sorted = arr.sort((a, b) =>{
//     return a > b ? -1 : 1;
// })

// console.log(sorted)


const arr = ['alex', 'dan', 'ion'];

const sorted = arr.sort((a, b) =>{
    return a > b ? 1 : -1;
})

console.log(sorted)