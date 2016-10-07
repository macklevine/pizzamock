import nock from 'nock';

const baseUri = '/pizzarecipes';

const mockChefData = [
  {
    name : "Antonio Banderas",
    id : "68c9db13-ea6b-4bbc-9b27-3f56a2d5c286"
  },
  {
    name : "Slavoj Zizek",
    id : "cc866238-b579-4550-9d46-f06a5844dec5"
  },
  {
    name : "Carlos Santana",
    id : "29e77cfe-db8c-4d66-a19a-4f63f752973b"
  },
  {
    name : "Gennady Golovkin",
    id : "a8ea68cc-e227-4cb2-b2cc-d4c8d5fcada6"
  }
];
/*
GET pizza recipes
chefs/:chefId/pizzas/:pizzaId

POST pizza:
chefs/:chefId/pizzas

PUT (modify) pizza:
chefs/:chefId/pizzas/:pizzaId

GET chefs:
chefs/

GET chef:
chefs/:chefId

POST chef:
chefs/

PUT (modify) chef:
chefs/:chefId
 */


class PizzaMock {
  constructor() {
    this.mock = null;
  }

  initMock() {
    this.mock = nock(baseUri); //this will mock our base URI.
    this.mock.persist()
      .filteringPath(path => {
        path = path.replace(/\/chefs\/[a-zA-Z0-9\-]{36}/g, '/chefs/xxx');
        path = path.replace(/\/pizzas\/[a-zA-Z0-9\-]{36}/g, '/pizzas/xxx');
      });
    this.mock.persist()
      .get('/chefs')
      .query({count : '1'})
      .reply(200, {
        chefs : [mockChefData[0]]
      });
    this.mock.persist()
      .get('/chefs')
      .reply(200, {
        chefs: mockChefData
      });
    this.mock.persist()
      .get('/chefs/xxx')
      .reply(200, {
        chefs: mockChefData[3]
      });
  }
}

export default PizzaMock;
/*

8537b8be-f0a7-406a-8459-02168b335849
2d9655b1-b921-4d78-8d65-2c4a1b4256ec
e76f23a6-bc0f-4530-b4c7-32c0963d86b1
fc70bb3c-2c0e-4abc-a75e-690c05c3d060
d595c079-4fbc-4b8a-898a-5dc34e689e94
110fec78-fede-456a-bbed-20baee62e287

*/

















