
const d= new Date()
const printDate=function(){
   console.log(d.getDate())
}


const printMonth=function(){
    console.log  (d.getMonth()+1)
}


const getBatchInfo=function(){
    console.log(`Radon,W3D3,the topic for today is Nodejs module system`)
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo

