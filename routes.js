const Product = require('./product');
const express = require('express');
const router = express.Router();



// create a product

router.post('/product', async (req, res)=>{
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product)

    } catch (error) {
        res.status(400).send(error);

    }
 

});

// get all product

router.get('/product', async (req, res)=>{
    try{
        const product = await Product.find();
        res.send(product);

    }catch (error){
        res.status(500).send(error)

    }
})

// get product by id
router.get('/product/:id', async (req, res)=> {
    try{
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send();
        res.send(task);

    }catch (error){
        res.status(500).send(error);

    }
});

// Get product by category
router.get('/product/category/:category', async (req, res)=> {
    try {
        const products = await Product.find({ category: req.params.category });
        if (!products || products.length === 0) return res.status(404).send();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

// get product by name
router.get('/product/name/:name', async (req, res) => {
    try {
        const products = await Product.find({ name: req.params.name });
        if (!products || products.length === 0) return res.status(404).send();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

// update a product
router.put('/product/:id', async (req, res)=> {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true, overwrite: true }
        );

        if (!product) return res.status(404).send();
        res.send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a task
router.delete('/product/:id', async (req, res) =>{
try{

    const product = await Product.findByIdAndDelete((req.params.id));
    if(!product) return res.status(404).send();
    res.send(product);

} catch (error){
    res.status(500).send(error);


}
})


module.exports = router;