const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/Users/alessandrapaone/Downloads/chinook.db'
});

sequelize.authenticate()
.then(()=> console.log("DB connected, daje"))
.catch(error => console.log(error));