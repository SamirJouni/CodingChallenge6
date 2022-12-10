// Just a small suggestion, hope not interrupt you.



// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// const a = [1, 1, 1, 1,2,4,591,392,391,2,5,10,2,1,1,1,20,200, 10, 101, 1000, 99, 23,23,40, 1000];

// const fun = (arr) => {
//   let answer = []
//   // let letter = []
//   let b = arr.sort(function(a, b){return a - b})
//   console.log(b)

//   for (i=0; i<b.length; i++) {
//     let subset = []
//     while (arr[i] === arr[i+1]) {
//       subset.push(arr[i])
//       i++
//     } if (subset.length === 0) {
//     answer.push(arr[i])
//   } else {
//     subset.push(arr[i])
//     answer.push(subset)
//   }
//   } console.log(answer);
// }

// fun(a)



/////////////////////////////



// const targett = (arr, target) => {
//   let answer = []
//   arr.forEach(element1 => {
//     arr.forEach(element2 => {
//       if (element1 + element2 === target) {
//         let sub = []
//         sub.push(element1)
//         sub.push(element2)
//         answer.push(sub)
//       }
//     })
//   });
//   console.log(answer)
// }

// const a = [1,2,4]
// targett([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14)



////////////////////////////////////



// const a = prompt("Type Rgb")

// const hexrgb = (input => {
//   input = input.replace(')', "")
//   input = input.replace('(', "")
//   input = input.replace(" ", "")
//   input = input.split(',')
//   text = "#"
//   input.forEach(element => {
//     console.log(Number(element).toString(16))
//     text += Number(element).toString(16)
//   });
//   console.log(text)
// }) 

// hexrgb("(137, 170, 3)")

// const b = "#89aa03"

// const hexrgb2 = (input => {
//   const list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
//   input = input.replace("#", "")
//   text = []
//   for (i=0; i<input.length; i=i+2) {
//     const a1 = list.indexOf(input[i])
//     const a2 = list.indexOf(input[i+1])
//     text.push(Number(a1)*16+Number(a2))
//   }
//   console.log(text)
// })
 
// hexrgb2(b)