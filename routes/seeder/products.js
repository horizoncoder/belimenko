const express = require('express');
const router = express.Router();
const faker = require('faker');
const Product = require('../../models/Product');
const Category = require('../../models/Category');

router.get('/', function (req, res, next) {
    const categories = ["NoteBook", "Computer", "Phone", "The Tablet"];
        let product = new Product({
            name : "Ipad",
            price : 100,
            category: categories[3],
            description : "super ipad",
            image: "https://i.citrus.ua/imgcache/size_500/uploads/shop/d/6/d664a64d6ce9ccfec6e2f8add5b89be6.jpg",

            name : "Iphone",
            price : 200,
            category: categories[2],
            description : "super iphone",
            image: "https://i.citrus.ua/imgcache/size_500/uploads/shop/f/c/fcc0273df1c8e4590338f41294839a9c.jpg",

            name : "HP",
            price : 400,
            category: categories[1],
            description : "super pc",
            image: "https://images-na.ssl-images-amazon.com/images/I/71aceGtIm%2BL._AC_SX466_.jpg",
        });
        
        product.save();
    
    for (let i = 0; i < categories.length; i++) {
        let cat = new Category({
            title: categories[i]
        });
        cat.save();
    }
    res.redirect('/')
});


module.exports = router;