// const ul = document.querySelector('.people');
// const people = ['fatima','noor', 'arshad', 'artist'];
// let html = '';
// people.forEach(function(person){
//     html += `<li style="color : white ">${person}</li>`;

// });
// ul.innerHTML = html
// // this keyword is the context object represent the contex
// // which the current code is executed
// // global context in javascript we call the window object
// // if we use this object in the function and it's show the object whole
// // not the window object
// // not arrow function work in the object and get
// // the object value and also use the regular function

// let user = {
//     name:'fatima',
//     email:'fatimaarshad118@gmail.com',
//     password: '12345',
//     blogs: [ {
//         title:'leather bag ',
//         price: 4500,
//     },{
//         title:'geometry',
//         price: 1500
//     }],
//     login(){
//         console.log('The user is login');
//     },
//     logout(){
//         console.log('The user is logout');
//     },
//     getBlogs(){
//         console.log('Now you can check the user blogs')
//         this.blogs.forEach((index , blog )  => {
//             console.log(index , blog )
//         })
//     }
// }
// //with arrow function we get the this has a window object
// // we cannot get the object element value
// user.login()
// user.logout()
// user.getBlogs()
// console.log(this)
// console.log(Math)

// for ( i = 2.3; i <= 10.9; i++) {
// console.log(Math.round(i))

// }
// let name = 23.8
// console.log(Math.round(name))
// // we have a primitive type and reference type
// // primitive type store the value in the stack
// //  reference type store the value in the heap two different part of thing and different things
// // stack is much fast than the heap which store all the object and array
// // so one i declare one variable name and initialize the value
// // it store in the stack and when i create 2nd varaible it get the new memmory
// // you can say the copy of the varaivble and does not effect the other
// // as a reference we get the pointer copy which point the heap
// // two object refer to the same heap one update change the other and it effect teh other and that's why itsw work is slow than the stack

// // primitive type

// let priceOne = 100;
// let priceTwo = priceOne;
// console.log(`priceOne: ${priceOne}`, `priceTwo:${priceTwo}`);
// priceOne = 200
// console.log(`priceOne: ${priceOne}`, `priceTwo:${priceTwo}`);
// // reference type
// const userOne = {name:'fatima', age:19};
// const userTwo = userOne;
// console.log(userOne , userTwo )
// userOne.name = 'noor'
// console.log(userOne , userTwo )

// // question for the hackerRank
// // sum of the array
// let arr = [1,2,3,4,10,11]
// let sum_array = 0
// for (let i = 0; i < arr.length; i++) {
//     sum_array = sum_array +  arr[i]
// }
// console.log(sum_array)
// // compare array
// let array_one1 = [5,6,7];
// let array_two = [3,6,10];
// let kim = 0;
// let jeon = 0;
// for(let i = 0 ; i < array_one1.length ; i++){
//     if(array_one1[i] > array_two[i]){
//         kim++
//     }else if( array_one1[i] <  array_two[i]){
//         jeon++
//     }

// }
// console.log(kim , jeon)
// // left diagonal and right diagonal
// const left_diagonal_array = [[11,2,4], [4,5,6], [10,8,-12]]
// let left_diagonal_sum = 0
// let right_diagonal_sum = 0
// for (let i = 0; i < left_diagonal_array.length; i++) {
//    left_diagonal_sum =left_diagonal_sum +  left_diagonal_array[i][i]

// }
// for (let i = 0; i < left_diagonal_array.length; i++) {
//  right_diagonal_sum = right_diagonal_sum +  left_diagonal_array[i][left_diagonal_array.length - i - 1]

// }
// const different = right_diagonal_sum - left_diagonal_sum
// console.log(different)
// // return Math.abs(right_diagonal - left_diagonal);
// // multiply of the two diagonal matrics
// const diagonalArray1 = [[1,2,4], [5,7,3], [6,3,1]];
// const diagonalArray2 = [[1,6,9], [2,8,3], [3,10,5]];
//   const result = [];
//   for (let i = 0; i < diagonalArray1.length; i++) {
//     result.push(diagonalArray1[i][i] * diagonalArray2[i][i]);
//   }
//   console.log(result)
// //  28-3-2023
// // print the array value in the decimal format
// const number_array = [-4,3,-9,0,4,1]
// let new_negative_array = []
// let new_positive_array = []
// let new_zero_array = []
// for (let i = 0; i < number_array.length; i++) {
// if(number_array[i] < 0 ){
//     new_negative_array.push(number_array[i])
// }

// if(number_array[i] > 0 )
//     new_positive_array.push(number_array[i])
// }
// if(number_array[i]=== 0){
//     new_zero_array.push(number_array[i])

// }
// console.log((new_negative_array.length / number_array.length).toFixed(6))
// const new_postive_result = (new_positive_array.length / number_array.length)
// console.log(new_postive_result.toFixed(6))
// console.log((new_zero_array.length / number_array.length).toFixed(6))
// // print the right sided staircase # and whitespaces
// let array_one = [' ', ' ', ' ', ' ', ' ', ' ']
// let array_hash = ['#', '##', '###', '####', '#####', '######']
// for (let index = 0; index < array_hash.length; index++) {
//     console.log(array_one.join('') + array_hash[index])
//    array_one.shift()
// }
// let n = 6
// const array_of_spaces = new Array(n).fill(' ');
// for (let i = 1; i <= n; i++) {
//     const array_of_hash = new Array(i).fill('#');
//     array_of_spaces.shift()
//     console.log(array_of_spaces.join('') + array_of_hash.join(''));
// }
// // 29 march 2023
// // slice and splice 
// const array_first = [1,2,3,4,5,6,7,8,9]
// const array_slice = array_first.slice(2,6)
// console.log(array_slice)
// // console.log(array_first.slice(2,6))
// const array_secound = 'learn , about , the , array '
// const array_split = array_secound.split(',')
// console.log(array_split)


// const myArray = [1, 2, 3, 4, 5, 6,7,8,9]
// const removedElements = myArray.splice(1, 6); 
// console.log(removedElements)

// // minimum and maximum sum of the array 
// const array_total = [1,2,3,4,5]
// let new_array_total = 0;
// let new_array_sum = 0;
// for (let i = 1; i < array_total.length; i++) {
//     new_array_total = new_array_total + array_total[i]
    
// }
// for (let i = 0; i <= array_total.length-2; i++) {
//     new_array_sum = new_array_sum + array_total[i]
    
// }
// console.log(`${new_array_sum} ${new_array_total}` )
// 03 April 2023

// var candles = [3,2,1,3 ,2 , 2 , 3 , 3];
// var new_candles = 0;
// let count = 0 
// for (i=0; i< candles.length; i++){
//     if (candles[i]> new_candles) {
//         new_candles = candles[i];
//         count = 1
//     }
//         else if(candles[i] === new_candles ){
//            count ++ 

//         }
    
// }
// console.log(count )

// function convert12to24(time12) {
//     const [time, indicator] = time12.split(" ");
//     console.log(time)
//     const [hour, minute, second] = time.split(":");
//     let hour24 = parseInt(hour);
//     if (indicator === "AM" && hour === "12") {
//         hour24 = 0;
//     } else if (indicator === "PM" && hour !== "12") {
//         hour24 = parseInt(hour) + 12;
//     }
//     console.log( `${hour24.toString().padStart(2, "0")}:${minute}:${second}`)
// }

// convert12to24('08:05:45 PM'); // Output: "19:05:45"


// function timeConversion(s) {
//     const [time, indicator] = s.split(" ");
//     const [hour, minute, second] = time.split(":");
//     let hour24 = parseInt(hour);
//     if (indicator === "AM" && hour === "12") {
//         hour24 = 0;
//     } else if (indicator === "PM" && hour !== "12") {
//         hour24 = parseInt(hour) + 12;
//     }
//     return `${hour24.toString().padStart(2, "0")}:${minute}:${second}`;
// }


// console.log(timeConversion('07:05:45 PM'))

// 4 April 2023

// const plus_minus_array = [-4,3,-9,0,4,1]
// const positive_array = [];
// const negative_array = [];
// const zero_array = [];
// for (let i = 0; i < plus_minus_array.length; i++) {
//    if(plus_minus_array[i] === 0 ){
//     zero_array.push(plus_minus_array[i])
//    }
//    else if(plus_minus_array[i] < 0 ){
//     negative_array.push(plus_minus_array[i])
//    }
//    else if(plus_minus_array[i] > 0 ){
//     positive_array.push(plus_minus_array[i])
//    }
    
// }
// const positive_proportion = (positive_array.length / plus_minus_array.length)
// console.log(positive_proportion.toFixed(6))
// const negative_proportion = (negative_array.length / plus_minus_array.length)
// console.log(negative_proportion.toFixed(6))
// const zero_proportion = (zero_array.length / plus_minus_array.length)
// console.log(zero_proportion.toFixed(6))

// const min_max_array = [1,2,3,4,5]
// const new_array = []
// for (let i = 0; i < min_max_array.length; i++) {
   
//    const array = min_max_array.splice(1,4)
//    (array[i] + (array[i] + 1))
//    new_array.push(array)

   
// }
// console.log(new_array)

// const new_function =(s)=>{


// let hours = parseInt(s.slice(0, 2));
// let minutes = s.slice(3, 5);
// let seconds = s.slice(6, 8);
// let meridian = s.slice(8, 10);
// if (meridian === 'PM' && hours !== 12) {
//   hours += 12;
// } else if (meridian === 'AM' && hours === 12) {
//   hours = 0;
// }
// return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`
// }
// console.log(new_function('7:15:00 PM '))

// 6 April 2023 
// const median_array = [0,3,4,1,2]
// const new_array_median = median_array.sort()
// console.warn('Sorted array')
// console.log(new_array_median)
// const median = Math.floor(new_array_median.length / 2)
// const middle_median_value = new_array_median[median]
// console.warn('middle value of the array ')
// console.log(middle_median_value)

// const lonely_array = [1,2,3,4,3,2,1]

// const new_lonely = lonely_array.filter((item , index )=>
//    lonely_array.indexOf(item) !== index 

// )
// console.log(new_lonely)

// const unique_value = lonely_array.find(
//     (item) => lonely_array.indexOf(item) === lonely_array.lastIndexOf(item)
//   );
// // console.log(unique_value)
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, current) => {
//   return accumulator + current;
// }, );

// console.log(sum);
// 13 April 2023 


// const index_array = [0,0,0,0,0]
// let data = []
// for (let i = 0; i < index_array.length; i++) {
//     data.push(index_array.indexOf(index_array))
// }
// console.log(data)

// const arr = [1,1,3,2,1]


//   let count = new Array(arr.length).fill(0);
//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i]] = count[arr[i]] + 1
//   }
// console.log(count)
// 14 april 2023 
// const matric_array = [[112,42,83,119], [56,125,56,49], [15,78,101,43], [62,98,114,108]];
// var col3 = matric_array.map(function(value,index) { return value[2]; });
// col3.reverse();
// for (let i = 0; i < matric_array.length; i++) {
//   matric_array[i][2] = col3[i];
// }
// matric_array[0].reverse()
// const n = matric_array.length / 2;
// let sum = 0;

// for (let i = 0; i < n; i++) {
//   for (let j = n; j < matric_array.length; j++) {
//     sum += matric_array[i][j];
//   }
// }
// console.log(sum);

