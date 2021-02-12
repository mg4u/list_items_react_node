import './cofig'
import { faker, URL, USER_ACCOUNT} from './cofig'
import { expect, request } from 'chai';

describe('Route Auth', () => {
    const API_URL= URL + 'users/auth/'

    it('Should POST to /login', async () => {
        const res = await request(API_URL).post('/login').send(USER_ACCOUNT)

        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('user');
        expect(res.body.user).to.be.a('object');
        expect(res.body.user.email).to.eql(USER_ACCOUNT.email);
    });

    it('Register Should POST to /', async () => {
        const data= {
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.random.alphaNumeric(5),
            phone: faker.phone.phoneNumber()
        }
        const res = await request(API_URL).post('/').send(data)
        
        expect(res).to.have.status(201);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('user');
        expect(res.body.user).to.be.a('object');
        expect(res.body.user.email).to.eql(data.email);
    });
});


describe('Route Users', () => {
    const API_URL= URL + 'users/'
    it('Should GET to / to get logged user info', async () => {

        const res = await request(API_URL).post('/auth/login').send(USER_ACCOUNT)
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');

        const userInfo = await request(API_URL).get('/').set('Authorization', `Bearer ${res.body.token}`);
        
        expect(userInfo).to.have.status(200);
        expect(userInfo.body).to.be.a('object');
        expect(userInfo.body.email).to.eql(USER_ACCOUNT.email);
    });

});
