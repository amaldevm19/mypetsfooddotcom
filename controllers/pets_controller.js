
const get_pets = ()=>{
    return new Promise((resolve, reject)=>{
        const pets = require('../models/dummy_pets');
        setTimeout(()=>{
            resolve(pets);
        },2000)
    })
}

const pets_controller = {
    get_all_pets : async (req, res, next)=>{
        try {
            const brands = req.body.header_data.brands;
            const categories = req.body.header_data.categories;
            const pets = req.body.header_data.pets;
            const all_pets = await get_pets();
            res.render('pets', { title: 'My Pets Food Dot Com',brands, categories, pets, all_pets });
        } catch (error) {
            console.log(error);
        }
        
        
    }
}

module.exports = pets_controller;