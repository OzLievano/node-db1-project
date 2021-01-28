const db = require("../../data/dbConfig");

module.exports = {
    get,
    getById,
    create,
    update,
    remove,
}

function get(){
    return db('accounts')
}

function getById(){
    return Promise.resolve('get wired');
}

function create(){
    return Promise.resolve('get wired');
}

function update(){
    return Promise.resolve('get wired');
}

function remove(){
    return Promise.resolve('get wired');
}

