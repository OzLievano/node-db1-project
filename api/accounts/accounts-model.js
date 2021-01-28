const db = require("../../data/dbConfig");

module.exports = {
    get,
    getById,
    create,
    update,
    remove,
}

async function get(){
    const accounts = await db('accounts')
    return accounts;
}

async function getById(id){
    const [account] = await db('accounts').where({id});
    return account;
}

async function create(data){
    // returns an id

    const [accountId] = await db('accounts').insert(data);
    const account = await getById(accountId)
    return account;
}

async function update(id,changes){
    const count = await db('accounts').where({id}).update(changes)

    return count;
}

function remove(){
    return Promise.resolve('get wired');
}

