const http=require('http')
const server=http.createServer((req,res)=>{
    res.write("koni chi wa")
    res.end()
})
server.listen(2000,()=>{
    console.log("Port 2000 is running");

})