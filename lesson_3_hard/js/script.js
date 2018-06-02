let str = "урок-3-был-слишком легким"

// let num = str.toString().split('');

str = str[0].toUpperCase() + str.substr(1);

// console.log(num[0].toUpperCase() + num);
console.log(str);



// console.log(str.replace("-"," "));

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


// console.log(str.replaceAt(2, "!!"));

for (let i = 0; i < str.length; i++) {
  
  if (str[i] == "-") {
    str = str.replaceAt(i, " ");
    console.log(str[i]);
  }
  
}

console.log("Замена -: " + str);


str = str.replace(" легким", "");


let a = str.length;
for (let i = 0; i < 2; i++) {  
  a = a - 1;
  str = str.replaceAt(a, "о");
  // console.log(a);
}

console.log("Удаление слова и замена букв: " + str);

let arr = [20, 33, 1, "Человек", 2, 3];
// console.log(arr);

let s = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "string") {
    // console.log(Math.pow(arr[i],3));
    s = Math.pow(arr[i],3) + s;
  }
}
// console.log("в кубе и сумма: " + s);
console.log("квадратный корень: " + Math.sqrt(s));


function testParam(par) {

  if (typeof par !== "string") {
    alert("тип данных не совпадает");
  } else {
      let q = 0;
      q = par.trim();
      // console.log(q);
      // console.log(q.length);
      if (q.length > 50) {
        a = 50 - q.length;
        // console.log(a);
        q = q.slice(0,a);
        // console.log(q);
        q = q + "..."
        // console.log(q);
        // console.log(q.length);
      }
      console.log(q);
      
    }
}

testParam("   rejireimrjndsfdfjndsfklknn1n2n2n2n22nnjdnjdsdakjfsfvfvfv   ");
