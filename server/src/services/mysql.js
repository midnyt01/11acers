const mysql = require('mysql')


const db = mysql.createPool({
    host : '217.21.95.103',
    user:'u391245239_11acres_root',
    password:'Classvoid29',
    database: 'u391245239_11acers_db',
    connectionLimit: 200 
})


function mysqlConnect () {
    db.getConnection((err) => {
        if (err) throw err
        console.log('mySQL is now connected')
    })
}

module.exports = {
    db,
    mysqlConnect
};