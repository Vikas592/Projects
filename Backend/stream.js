const fs = require('fs');

const readStr = fs.createReadStream('./fibonacci.js', {encoding: 'utf-8'});

readStr.on('data', (data)=>{
    console.log(data);
})

readStr.on('close', ()=>{
    console.log('closeed')
})

readStr.on('end', ()=>{
    console.log('ended')
})

readStr.on('error', (error)=>{
    console.log(error)
})

readStr.on('finish', (data)=>{
    console.log(data)
})