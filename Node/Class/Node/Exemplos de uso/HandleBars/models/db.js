const Sequelize = require ('../node_modules/sequelize');

const sequelize = new Sequelize('postapp', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports= {
    sequelize: sequelize,
    Sequelize: Sequelize
}