
const get_products = ()=>{
    return new Promise((resolve, reject)=>{
        const products = require('../models/dummy_products');
        setTimeout(()=>{
            resolve(products);
        },2000)
    })
}

const products_controller = {
    get_all_product : async (req, res, next)=>{
        try {
            const products = await get_products();
            res.render('products', { title: 'My Pets Food Dot Com', products });
        } catch (error) {
            console.log(error);
        }
        
        
    }
}

module.exports = products_controller;