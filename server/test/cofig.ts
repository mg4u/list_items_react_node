require('custom-env').env()
if (process.env.type) {
  require('custom-env').env(process.env.type)
}

import 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
const faker = require("faker");
// import  * as app from '../src/server'

chai.use(chaiHttp);
chai.should()

const URL= `http://localhost:${process.env.PORT || 8000}/api/v0/`

const USER_ACCOUNT= {
    "email": "test@test.com",
    "password": "123"
}

export {chai, faker, URL, USER_ACCOUNT}
