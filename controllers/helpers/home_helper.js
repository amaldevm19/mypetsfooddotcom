
const home_helper ={
    get_brands : async ()=>{
        return new Promise((resolve, reject)=>{
            const all_brands = [];
            const brands = require('../../models/dummy_brands');
            brands.forEach(element => {
                all_brands.push(element.name);
            });
            resolve(all_brands);
        });  
    },
    get_categories : async ()=>{
        return new Promise((resolve, reject)=>{
            const all_categories = [];
            const categories = require('../../models/dummy_categories');
            categories.forEach(element => {
                all_categories.push(element.name);
            });
            resolve(all_categories);
        });
    },
    get_pets : async ()=>{
        return new Promise((resolve, reject)=>{
            const all_pets = [];
            const pets = require('../../models/dummy_pets');
            pets.forEach(element => {
                all_pets.push(element.name);
            });
            resolve(all_pets);
        });
    }
}

module.exports = home_helper;