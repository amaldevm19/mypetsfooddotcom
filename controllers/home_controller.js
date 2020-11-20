
const home_controller = {
    home_page : async (req, res, next)=>{
        try {
            const brands = req.body.header_data.brands;
            const categories = req.body.header_data.categories;
            const pets = req.body.header_data.pets;
            res.locals.session = req.session;
            res.render('home', { title: 'My Pets Food Dot Com', brands, categories, pets  });
        } catch (error) {
            console.log(error);
        }
        
        
    }
}

module.exports = home_controller;