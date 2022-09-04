'use strict';

const supertest = require( 'supertest' );
const server = require( '../server' );
const request = supertest( server.app );

describe( 'API server', () => {

    it('Home Page Works', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World');
    });


    it( 'Person Route Works', async () => {
        const res = await request.post( '/person' ).query( {
            name: 'Saeed',
            age: 28,
            gender: 'male'
        });
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('33');
    });

});