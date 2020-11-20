
const get_categories = ()=>{
    return new Promise((resolve, reject)=>{
        const categories = require('../models/dummy_categories');
        setTimeout(()=>{
            resolve(categories);
        },2000)
    })
}

const categories_controller = {
    get_all_categories : async (req, res, next)=>{
        try {
            const brands = req.body.header_data.brands;
            const categories = req.body.header_data.categories;
            const pets = req.body.header_data.pets;
            const all_categories = await get_categories();
            res.render('categories', { title: 'My Pets Food Dot Com', brands, categories, pets, all_categories });
        } catch (error) {
            console.log(error);
        }
        
        
    }
}

module.exports = categories_controller;