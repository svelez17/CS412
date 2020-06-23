const app = require('../app');
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('OmDb API', () => {
    it('should return 200 success code', function (done) {
        chai.request(app)
            .get('/')
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });
    it('should return status code 404 not found', function (done) {
        chai.request(app)
            .post('/ps5b')
            .set('content-type', 'application/json')
            .send({movietitle: 'notamovie'})
            .end((err, response) => {
                expect(response).to.have.status(404);
                done();
            })
    });
    it('should have img src in html', function (done) {
        chai.request(app)
            .post('/ps5b')
            .set('content-type', 'application/json')
            .send({movietitle: 'Spirited Away'})
            .end((err, response) => {
                expect(response.text).to.include('<img src=');
                done();
            })
    });

})