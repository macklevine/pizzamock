import {expect} from 'chai';
import request from 'request';
import PizzaMock from '../pizzamock';
import mockChefData from '../mockdata/mockchefdata';
import mockPizzaData from '../mockdata/mockpizzadata';

const baseUrl = 'http://www.mypizzaserver.com';
const pizzaMock = new PizzaMock();
pizzaMock.initMock();

describe('Mocked up routes', () => {
	describe('/chefs route', () => {
		it('should return a single chef', done => {
			request.get(
				baseUrl + '/chefs', 
				{
					qs : {
						count : 1
					}
				}, 
				(err, response) => {
					expect(JSON.parse(response.body).chefs[0].name).to.equal(mockChefData[0].name);
					expect(JSON.parse(response.body).chefs[0].id).to.equal(mockChefData[0].id);
					done();
				}
			);
		})
	});
});

/*
GET all chefs
chefs/
GET specific chef
chefs/:chefId
GET all pizzas made by a given chef
chefs/:chefId/pizzas
GET individual pizza
chefs/:chefId/pizzas/:pizzaId
 */