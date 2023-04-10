const dbConfig = require("../configs/db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require("./student.js")(sequelize, Sequelize);
db.course = require("./course.js")(sequelize, Sequelize);
db.coursePlan = require("./coursePlan.js")(sequelize, Sequelize);

module.exports = db;