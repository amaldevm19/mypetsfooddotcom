
const get_brands = ()=>{
    return new Promise((resolve, reject)=>{
        const brands = require('../models/dummy_brands');
        setTimeout(()=>{
            resolve(brands);
        },2000)
    })
}

const brands_controller = {
    get_all_brands : async (req, res, next)=>{
        try {
            if(req.session.views){
               req.session.views++;
            }else {
                req.session.views = 1;
            }
            const brands = req.body.header_data.brands;
            const categories = req.body.header_data.categories;
            const pets = req.body.header_data.pets;

            const all_brands = await get_brands();
            res.render('brands', { title: 'My Pets Food Dot Com',brands, categories, pets, all_brands, views:req.session.views });
        } catch (error) {
            console.log(error);
        }
        
        
    }
}

module.exports = brands_controller;