function processUser(name, cdallback) {
    console.log("Processing user: " + name);
    cdallback();
  }
  
  processUser("Alice", () => {
    console.log("User processed successfully!");
  });

  function add_num(a, b) {
    let sum = a + b;
    console.log("Sum is ", sum);
  }
  
  function cal_sum(a, b, callback) {
    setTimeout(() => callback(a, b), 2000);
  }
  
  cal_sum(10, 20, add_num);
//map
const c = [3, 4, 7];
const d = c.map((x) => x * x);
console.log(d);
console.log('---------Filter--------');
const ab=[1,2,3,4,5,8,6]
const bb=ab.filter(c=>c%2==0)
console.log(bb);

