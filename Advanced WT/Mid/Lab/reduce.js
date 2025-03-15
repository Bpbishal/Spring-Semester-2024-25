const a=[1,2,3]
const b= a.reduce((accumulator,cuurentValue)=>{
    console.log(`accumulator:${accumulator} and cuurentvalue:${cuurentValue}`);
    return accumulator + cuurentValue
    
},3)
console.log(b);

let shoppingcart=[
    {
        name:'apple',
        price:500
    },
    {
        name:'banan',
        price:250
    },
    {
        name:'melon',
        price:300
    },
]
let cart=shoppingcart.reduce((acc,item)=>(acc+item.price),0)
console.log(cart);
