const express = require('express');
// import * as express from 'express';
const app = express();


// const schema = mongoose.Schema({
//     name: String,
//     age: Number,
// })

// const Cat = mongoose.model('Kitten',  schema);

// const newCat = new Cat({
//     name: 'billu',
//     age: 78,
// });

// newCat.save();

// Cat.find();



app.get('/', (req, res)=>{
    res.status(200).send('Hello World!');
})

app.post('/name', (req,res)=>{
    // const {name} = req.body;
    // console.log(req.body)
    res.json(req.body);
});



app.listen(9000, ()=>{
    console.log('server listening');
})