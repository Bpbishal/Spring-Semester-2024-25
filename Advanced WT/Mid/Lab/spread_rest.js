const a=[2,5,8,9]
const b=[...a,10]
console.log(b);

for (let n of b) {
    console.log(n);
  }
  const c = [1, 2, ...b, 8, 99];
  console.log(c);
  console.log(typeof c); // Type of array is a object in javascript
  
  const d = [...a, ...b];
  
  console.log(d);
//rest opereator

function add(...nums) {
    let total = 0;
    for (let elem of nums) {
      total += elem;
    }
    return total;
  }
  
  let total = add(1, 2, 3, 4, 5);
  console.log("Sum of the array elements is : ", total);
