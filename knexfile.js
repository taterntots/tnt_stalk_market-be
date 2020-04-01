// Update with your config settings.
require('dotenv').config();

module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './data/catalogue.db3'
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './data/migrations'
  //   },
  //   seeds: {
  //     directory: './data/seeds'
  //   },
  //   // SQLite will not enforce foreign key constraints by default
  //   // ONLY NEEDED FOR SQLITE
  //   pool: {
  //     afterCreate: (conn, done) => {
  //       conn.run("PRAGMA foreign_keys = ON", done); // turn on foreign key enforcement
  //     }
  //   }
  // },

  development: {
    client: 'pg',
    connection: process.env.DB_DEV,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
