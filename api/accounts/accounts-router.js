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

router.get('/:id',function getAccountById(req,res){
    const id = req.params.id;
    if(!id){
        res.status(404).json({error:"id does not exist"})
        return;
    }else{
        Accounts.getById(id)
        .then((account)=>{
            res.status(200).json(account);
        })
        .catch((error)=>{
            res.status(500).json({error:error.message})
        })
    }
})

router.post('/', function createAccount(req,res){
    const account = req.body;

    Accounts.create(account)
    .then((account)=>{
        res.status(201).json(account)
    })
    .catch((error)=>{
        res.status(500).json({error:error.message})
    })
})

router.put('/:id',function updateAccount(req,res){
    const {id} = req.params;
    const changes = req.body;

    Accounts.update(id,changes)
    .then((account)=>{
        res.status(200).json(changes)
    })
    .catch((error)=>{
        res.status(500).json({error:error.message})
    })
})
module.exports = router;