import nock from 'nock';
import mockChefData from './mockdata/mockchefdata';
import mockPizzaData from './mockdata/mockpizzadata';

const baseUrl = 'http://www.mypizzaserver.com';

class PizzaMock {
  constructor() {
    this.mock = null;
  }

  initMock() {
    this.mock = nock(baseUrl);
    this.mock.persist()
      .filteringPath(path => {
        path = path.replace(/\/chefs\/[a-zA-Z0-9\-]{36}/g, '/chefs/xxx');
        path = path.replace(/\/pizzas\/[a-zA-Z0-9\-]{36}/g, '/pizzas/xxx');
        return path;
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
        chef: mockChefData[3]
      });
    this.mock.persist()
      .get('/chefs/xxx/pizzas')
      .reply(200, {
        pizzas: mockPizzaData
      });
    this.mock.persist()
      .get('./chefs/xxx/pizzas/xxx')
      .reply(200, {
        pizza: mockPizzaData[0]
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

















