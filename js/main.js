//1-vazifa
const empty = {};

let isEmpty = function () {
    let a = Object.keys(empty);
    if (a.length === 0) {
        return true;
    } else if (a.length === 1) {
        return false;
    }
};

let y = isEmpty();
console.log(y);

//2-vazifa

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let result = 0;

// let user = function () {
//     for (let y in salaries) {
//         result += salaries[y];
//     }
// };

// let y = user();
// console.log(result);


//3-vazifa
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// let multiplyNumeric = function(menu) {
//     for(let key in menu){
        
//       return key+":"+menu[key] *2;
          
//   }
// };

// let x = multiplyNumeric(menu);
// console.log(x);

//4-vazifa

// let arr = [5, 2, 1, -10, 8];
// console.log(arr.sort());
