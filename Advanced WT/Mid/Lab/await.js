async function a() {
    await new Promise((resolve=>{
        setTimeout(() => {
           let sum=0
           for(i=0;i<10;i++)
            {
                sum+=i
            } 
            console.log(sum);
            resolve()
            
        }, 1000);
    }))
    
}
a()