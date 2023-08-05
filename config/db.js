import  Sequelize from 'sequelize';

import dotenv from 'dotenv';

dotenv.config()

// console.log(process.env.DB_HOST);

const db = new Sequelize(process.env.MYSQLDATABASE,process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquiere: 30000,
        idle: 10000
    },
    operatorAliases: false

});

export default db;