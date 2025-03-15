const user={
    name:'Bishal',
    address: 'Dhaka',

  welcomeMessage:function(){
    console.log(`${this.name} welcome to vscode`);
    //console.log(this)
  }

}
// user.welcomeMessage()
// user.name='Pal'
// user.welcomeMessage()

const func= function(){
    let username="Bishal"
}
const func2=()=>{
    let name="Bp"
    return name
    
}
console.log(func2())

let sum=(num1,num2)=>num1+num2 //Or (num1 + num2)
console.log(sum(4,4));
let obj=(a,b)=>({gender:'male'}) // must use paranthesis to print object
console.log(obj(1,2));
