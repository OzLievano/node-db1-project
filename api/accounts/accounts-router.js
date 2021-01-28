const express = require('express')
const Accounts = require('./accounts-model');

const router = express.Router();


router.get('/',function getAllAccounts(req,res){
    Accounts.get()
    .then((accounts)=>{
        res.status(200).json(accounts)
    })
    .catch((error)=>{
        res.status(500).json({error:error.message})
    })
})

module.exports = router;