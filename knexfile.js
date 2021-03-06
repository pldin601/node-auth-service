module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: 'db',
      user: 'so',
      password: 'so',
      database: 'so',
    },
    pool: {
      min: 1,
      max: 10,
    },
  },
  production: {
    client: process.env.DATABASE_CLIENT,
    connection: process.env.DATABASE_URL,
    pool: {
      min: 1,
      max: 10,
    },
  },
}
