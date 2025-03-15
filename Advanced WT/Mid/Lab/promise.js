console.log("Start");

const prom=new Promise((resolve,reject)=>{
    setTimeout(() => {
       let success=true;
       if(success)
        {
            resolve('Done')
        } else{
            reject("Not done")
        }
    }, 2000);
    

})
prom
.then((message)=>console.log(message))
.catch((error)=>console.log(error))
console.log('End');