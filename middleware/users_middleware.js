

var user_middleware = {
    session_data:(req,res,next)=>{
        res.locals.session = req.session;
        next();
    }
}

module.exports = user_middleware;

// user_is_logged_in : (req, res, next) => {
//     if (req.session.user && req.cookies.user_id) {
//         res.locals.session = req.session;
//         next(); 
//     }else {
//         res.redirect('/');     
//     }    
// },