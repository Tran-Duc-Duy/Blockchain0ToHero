const PI = 3.14
let s = PI * 45
let cv = PI * 45 * 45
/*
  QUY TẮC ĐẶT TÊN BIẾN
  + Không được xuất phát từ chữ số (0-9)
  + sử dụng cú pháp kiểu lạc đà varA
  + không được chứa ký tự đặc biệt (~!@#$...)
  + không được khai báo trùng với namespace (let, var, switch, case, const, global ...)
*/
var varA = 5;
var varB = 10;

function sum() {
  let varInside = 44;
  console.log('s', s);
  console.log('var A', varA);
  varA = 10000;

};

sum()
console.log('var A', varA)
// console.log('varInside', varInside)
// boolean
const isMale = true;
const isFemale = false;

// number
let age = 15;
console.log("typeOf(age):", typeof (age));

// string 
let myName = "Duy"
console.log("typeOf(myName):", typeof (myName));

// array 
let arrN = [0, 1, 2, 3, 4];
let arrTongHop = [12,
  "Duy",
  ["VN", "2001"],
  { cardNumber: 123456, cardName: "cccd" }]
console.log("typeOf(arrN):", typeof (arrN));

let valueAtIndex0 = arrTongHop[0]
console.log("valueAtIndex 0:", valueAtIndex0)
console.log("valueAtIndex 3:", arrTongHop[3])

let cardName = arrTongHop[3].cardName
console.log("cardName :", cardName)

//ObJect 
// object chứa nhiều phần tử dưới dạng dữ liệu bất kỳ (string, number, boolean, array ..)
// mỗi phần tử trong object có kiểu dữ liệu key : value và cách nhau bằng dấu ,
// quy tắc đặt tên cho key là theo cú pháp lạc đà 
let objEmpty = {}
let objInfo = {
  key: "This is value",
  hoVaTen: "Duy",
  cmnd: 1234556,
  arrayNy: [
    "None1",
    "None2",
    {
      ten: "None3",
      nha: "bla",
      bo: "bla"
    }
  ]
}

let objNyInfo = objInfo.arrayNy[2].ten
console.log("objNyInfo :", objNyInfo)

// add to the front of arr
arrN.push(200, 300)
console.log("arrN", arrN)
arrN

// pop the end element from the array
let elementRemoved = arrN.pop()
console.log("elementRemoved", elementRemoved)

// sum of 2 arrays 
let arrayCong = arrN.concat(arrTongHop)
console.log("arrayCong", arrayCong)
//Advanced
let arrayAdvanced = [...arrN, arrTongHop] // :))


