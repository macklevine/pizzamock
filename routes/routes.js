import request from 'request';

const baseUrl = 'http://www.mypizzaserver.com';

function _getRequestHandler(){
	return (req, res) => {
		request({
			uri : baseUrl + req.url,
			method : 'GET',
			qs : req.query
		}, (err, response) => {
			if(err){
				res.status(500).json(err);
			} else {
				res.status(200).json(response);
			}
		});
	}
};

export default function addRoutes(app){
	app.get('/chefs', _getRequestHandler());
	app.get('/chefs/:chefId', _getRequestHandler());
	app.get('/chefs/:chefId/pizzas', _getRequestHandler());
	app.get('/chefs/:chefId/pizzas/:pizzaId', _getRequestHandler());
};

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