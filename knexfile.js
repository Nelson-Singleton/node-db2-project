// Update with your config settings.

module.exports = {
  //configuring for the development devironment
  development: {
    client: 'sqlite3', //db driver
    connection: {
      filename: './database/food.db3' //which file am i using
    },
    useNullAsDefault: true //used for sql lite
  },
//configuring for the production environment db connection
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
