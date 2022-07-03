import supertest from 'supertest';
import main from './main';

describe('Main Test', () => {
  it('should GET / with 200 OK', () => supertest(main(0))
    .get('/')
    .expect((response) => {
      expect(response.status).toEqual(200);
      expect(response.text).toMatch('OK');
    }));
});
