// const x = null;

// if(x == undefined) {
//     function x(y) {
//         console.log(y)
//     }

//     x(10)

// }



// const arr = ['alex', 'victor', 'artur']

// const vocale = ['a', 'i', 'o', 'u', 'e'];

// const strVocale = arr.filter((str) => {
//     return vocale.some((vocala) => str[0].toLowerCase() === vocala);
// })
// console.log(strVocale)


// const strVocale = arr.filter((str) => {
//     return vocale.includes(str[0].toLowerCase());
// })
// console.log(strVocale)


// const strConsoane = arr.filter((str) => {
//     return !vocale.includes(str[0].toLowerCase());
// })

// console.log(strConsoane)


// const strConsoane = arr.filter((str) => {
//     return !vocale.includes(str[str.length - 1].toLowerCase());
// })

// console.log(strConsoane)




// const arr = ['alex', 'victor', 'artur']

// const vocale = ['a', 'i', 'o', 'u', 'e'];

// const concatArr = (list1, list2, k) => {
// if(list2.length < k) return 'k is too high'

//     const copy1 = [...list1]
//     const copy2 = [...list2]

    // copy2.forEach((item, index) => {
    //     if(index < k) copy1.push(item)
    // })


    // for(let i = 0; i < k; i++)  {
    //     copy1.push(copy2[i])
    // }

//     return copy1;
// }

// console.log(concatArr(arr, vocale, 5))
// console.log(concatArr(arr, vocale, 4))
// console.log(concatArr(arr, vocale, 6))
// console.log(concatArr(arr, vocale, 1))



// const user = [
//     {
//         name: 'test',
//         age: 18
//     },
//     {
//         name: 'test',
//         age: 44
//     },
//     {
//         name: 'test',
//         age: 55
//     },
//     {
//         name: 'test',
//         age: 33
//     }
// ]

// console.log(user.filter(item => item.age < 41 && item.age > 19))




// const arr = ['alex', 'victor', 'artur'];

// const showItems = (list, order) => {

//     if(order === 'ASC') {
//         for(let i = 0; i < list.length; i++){
//             console.log(list[i] )
//         }
//     }else {
//         for(let i = list.length -1; i >= 0; i--){
//             console.log(list[i] )
//         }
//     }

// }


// showItems(arr, 'ASC')
// showItems(arr, 'DSC')


// const arr = ['1', '2', '3']


// const showItems = (list, order) => {
//     for (let i = 0; i < list.length; i++) {
//         const index = order === 'ASC' ? i : list.length - i - 1
//         console.log(list[index])
//     }
// }

// showItems(arr, 'ASC')
// showItems(arr, 'DSC')


// const list [1, 2, 3, 4]
// const obj = {name: 'alex', age: 18}

// const [test, , test1] = [...list]
// const {name, age} = obj