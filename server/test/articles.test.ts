import './cofig'
import { expect, request } from 'chai';
import { faker, URL, USER_ACCOUNT} from './cofig'

const API_URL= `${URL}/articles`

describe('Route GET Articles', () => {
    it('Get All Articles Should GET to /articles', async () => {
        const res = await request(API_URL).get('/');
        // console.log(typeof res.body);
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('Array');
    });

    it('Get User Articles Should GET to /articles', async () => {
        // First Login to get Token
        const res = await request(URL).post('/users/auth/login').send(USER_ACCOUNT)
        
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        
        // Get User Articles
        const userArticles = await request(API_URL).get('/').set('Authorization', `Bearer ${res.body.token}`);

        expect(userArticles).to.have.status(200);
        expect(userArticles.body).to.be.a('Array');
    });
})

describe('Control Articles', () => {

    it('Add Articles Should POST to /articles', async () => {
        // First Login to get Token
        const res = await request(URL).post('/users/auth/login').send(USER_ACCOUNT)
        
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        
        // Add Article
        const data= {
            title: faker.lorem.sentence(),
            description: faker.lorem.text()
        }
        const newArticle = await request(API_URL).post('/')
            .send(data)
            .set('Authorization', `Bearer ${res.body.token}`);
        
        expect(newArticle).to.have.status(200);
        expect(newArticle.body).to.be.a('object');
        expect(newArticle.body.title).to.eql( data.title );

    });
    
    // EDIT Article
    it('Edit Articles Should PUT to /articles/:id', async () => {
        // First Login to get Token
        const res = await request(URL).post('/users/auth/login').send(USER_ACCOUNT)
        
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');

        // Add Article
        const data= {
            title: faker.lorem.sentence(),
            description: faker.lorem.text()
        }
        const newArticle = await request(API_URL).post('/')
            .send(data)
            .set('Authorization', `Bearer ${res.body.token}`);

        // Edit Article
        const newData= {
            title: faker.lorem.sentence(),
            description: faker.lorem.text()
        }

        const editedArticle = await request(API_URL).put(`/${newArticle.body.id}`)
            .send(newData)
            .set('Authorization', `Bearer ${res.body.token}`);
                
        expect(editedArticle).to.have.status(200);
        expect(editedArticle.body).to.be.a('object');
        expect(editedArticle.body.title).to.eql( newData.title );
    })
    
    // DELETE Article
    it('Edit Articles Should DELETE to /articles/:id', async () => {
        // First Login to get Token
        const res = await request(URL).post('/users/auth/login').send(USER_ACCOUNT)
        
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');

        // Add Article
        const data= {
            title: faker.lorem.sentence(),
            description: faker.lorem.text()
        }
        const newArticle = await request(API_URL).post('/')
            .send(data)
            .set('Authorization', `Bearer ${res.body.token}`);

        // Delete Article
        const deleteArticle = await request(API_URL).delete(`/${newArticle.body.id}`)
            .set('Authorization', `Bearer ${res.body.token}`);
                        
        expect(deleteArticle).to.have.status(200);
        expect(deleteArticle.body).to.have.property('message');
    })

});

