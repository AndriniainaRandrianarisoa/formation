const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require('./models/productModel')
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//************* routes  ************// 

// get all products
app.get('/products', async(req, res) => {
  try {
    const products = await Product.find({}); 
    res.status(200).json(products) 
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

// get one product by id
app.get('/products/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id); 
    res.status(200).json(product) 
  } catch (error) {
    res.status(404).json({message: error.message})
  }
});

app.get('/api/stuff/:id', async(req, res, next) => {
  try {
    const {id} = req.params
    const thing = await Thing.findOne(id)
    res.status(200).json(thing)
  } catch (error) {;
    res.status(404).json({ message : error.message })
  }
});

// create product
app.post('/products', async(req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

// update product by id
app.put('/products/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    // we cannot find product in database
    if(!product) {
      return res.status(404).json({message: `cannot find any product with ID ${id}`})
    }
    const updatedProduct = await Product.findById(id)
    res.status(200).json(updatedProduct)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
}) 

// delete product by id
app.delete('/products/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);
    // we cannot find product in database
    if(!product) {
      return res.status(404).json({message: `cannot find any product with ID ${id}`})
    }
    res.status(200).json(product)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})



//************* connect database  ************// 

mongoose
  .connect(
    "mongodb+srv://user:root@crudtestapi.e7rftms.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB"); 
    app.listen(3000, () => console.log(`Node app is running on port 3000`));
  })
  .catch((error) => {
    console.log(error);
  });
 


