const request = require('supertest');
const app = require('./server');

describe('API Endpoints', () => {
    test('GET /api/ping should respond to "Bạn còn đó chứ?"', async () => {
        const response = await request(app)
            .get('/api/ping')
            .expect(200);
        
        expect(response.body.message).toBe('Có, tôi vẫn ở đây!');
        expect(response.body.status).toBe('online');
        expect(response.body.timestamp).toBeDefined();
    });

    test('GET / should return system info', async () => {
        const response = await request(app)
            .get('/')
            .expect(200);
        
        expect(response.body.message).toBe('EcoPlastic ERP System Backend');
        expect(response.body.status).toBe('running');
    });
});