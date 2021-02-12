export const config = {
  "db": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_ENGING,
  },
  "salt": process.env.PASSWORD_SALT,
  "jwt": {
    "secret": process.env.JWT_TOKEN
  }

}
