const express = require('express');
var session = require('express-session');
const Users = require('../models/users_model');
const db = require('../config/atlas_db_config');

const users_controller ={
    login_view :(req,res, next)=>{
        res.render('users/login',{ layout:'login_register_layout',title: 'My Pets Food Dot Com' })
    },
    login :(req,res, next)=>{
        if(!req.session.user){
            Users.findOne({email:req.body.email},(err,user)=>{
                if(err){
                    throw err;
                }
                if(user){
                    user.comparePassword(req.body.password,function (err,isMatch){
                        if(err) throw err; 
                        if(isMatch){
                            req.session.user = user;
                            res.redirect('/');
                        }else {
                            req.session.user = null;
                            req.flash({msg:'Invalid username/password', msg_class:"alert-danger"});
                            res.redirect('/users/login');
                        }
                    })
                }else{
                    req.flash({msg:'Invalid username/password', msg_class:"alert-danger"});
                    res.redirect('/users/login');
                }
            });
        }else{
            res.redirect('/')
        }
    },
    register_view :(req,res, next)=>{
        res.render('users/register',{layout:'login_register_layout', title: 'My Pets Food Dot Com' })
    },
    register :(req,res, next)=>{
        let user = new Users(
            {
                email: req.body.email,
                password: req.body.password,
                firstName: req.body.firstName.toLowerCase(),
                lastName: req.body.lastName.toLowerCase(),
                isAdmin:false,
            }
        );
        user.save(function (err) {
            if (err) {
                console.log(err.code)
                if(err.code === 11000){
                    req.flash({err:'Email already registered'})
                    res.render('users/register',{layout:'login_register_layout', title: 'My Pets Food Dot Com', email_error_class:"is-invalid", email:req.body.email, firstName:req.body.firstName, lastName:req.body.lastName })
                }else{
                    return next(err);
                }
                return;  
            }
        req.flash({msg:'You are successfully registered', msg_class:"alert-success"})
        res.redirect('/users/login')
        }) 
    },
    logout :(req,res, next)=>{
        req.session.user = null;
        res.redirect('/')
    },
}

module.exports = users_controller;