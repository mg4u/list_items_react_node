import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.db;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": c.password,
  "database": c.database,
  "host":     c.host,
  logging: false, // to disable store sql queries
  dialect: c.dialect,
  storage: ':memory:',
  
});
