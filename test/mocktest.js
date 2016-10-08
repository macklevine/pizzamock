import {expect} from 'chai';
import PizzaMock from './pizzamock';
import request from 'request';

const baseUrl = 'http://www.mypizzaserver.com';
const pizzaMock = new PizzaMock();

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
					console.log(response.body);
					expect(response.body).to.equal
				}
			});
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