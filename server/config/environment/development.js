'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connection opions
  sequelize: {
    database: "server_convert",
    username: "root",
    password: "mysql"
  },

  config: {
    host: "localhost",
    dialect: 'mysql'
  },

  // Seed database on startup
  seedDB: true

};
