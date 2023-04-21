// 16 April 2023
const weekDay = ['mon', 'tue','wed', 'thur', 'fri', 'Sat', 'Sun']

let getData = ''
for (let i = 0; i < weekDay.length; i++) {
    if(weekDay[i] === 'Sat'){
        getData = weekDay[i] ;

    }else{
        
    }
    
}
console.log(`${getData}`)

// 19 April 
// let find_Value = []
// let data = 0
// let first_array = []
// for (let i = 0; i < zig_zag.length; i++) {
//    data = (zig_zag.length + 1) / 2
//    if(zig_zag[i] < 4){
//     first_array.push(zig_zag[i])

//    }
//    if(zig_zag[i] >= 4){
//     find_Value.push(zig_zag[i])
//    }
    
// }
// const new_array = [...first_array , ...find_Value.reverse()]
// console.log(new_array)
// Array.prototype.push.apply(first_array , find_Value.reverse())
// console.log(first_array)

const input = [1 ,2 ,3 ,4 ,5 ,6, 7]

    let inc_arr = [];
    let dec_arr = [];
    let constant = 0;
    for (let i = 0; i < input.length; i++) {
      constant = (input.length + 1) / 2;
      if (parseInt(input[i]) < 4) {
        inc_arr.push(parseInt(input[i]));
      }
      if (parseInt(input[i]) >= 4) {
        dec_arr.push(parseInt(input[i]));
      }
    }
    const new_array = [...inc_arr, ...dec_arr.reverse()];
    console.log(new_array.join(' '))
