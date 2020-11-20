const home_helper = require('../controllers/helpers/home_helper')

const header_data = async (req, res, next)=>{
    const brands = await home_helper.get_brands();
    const categories = await home_helper.get_categories();
    const pets = await home_helper.get_pets();
    req.body.header_data = {
        brands,
        categories,
        pets
    }
    next();
}

module.exports = header_data;