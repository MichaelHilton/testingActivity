
describe("QueryProcessor", () => {
  test("should return a string", () => {
      const query = "test";
      const response: string = QueryProcessor(query);
      expect(typeof response).toBe("string");
  });

  test('should return shakespeare description', () => {
      const query = "shakespeare";
      const response: string = QueryProcessor(query);
      expect(response).toBe((
          "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
          "English poet, playwright, and actor, widely regarded as the greatest " +
          "writer in the English language and the world's pre-eminent dramatist."
        ));
  });
});


// import supertest from 'supertest';
// // import app from '../src/server';

// const request = supertest(app);

// describe('testing response from /api/images', (): void => {
//   it('should return a list of images and some instructions', async (): Promise<void> => {
//     // const response: supertest.Response = await request.get('/api/images');
//     // expect(response.status).toBe(200);
//   });

//   // it('should return the requsted image with original width and height', async (): Promise<void> => {
//   //   // const response: supertest.Response = await request.get(
//   //   //   '/api/images?f=encenadaport'
//   //   // );
//   //   // expect(response.status).toBe(200);
//   // });

// });


// // import request from "supertest";
// // import supertest from 'supertest';
// // // import {Express} from 'express-serve-static-core';
// // import { server } from "../src/server"
// // const request = supertest(app);

// // import app from "../src/server"
// // describe('Sanity test', () => { 
// //   test('1 should equal 1', () => { 
// //     expect(1).toBe(1) 
// //   })
// // })  
// // describe('Photos endpoint', () => { 
// //   describe('testing response from /api/images', (): void => {
// //     it('should return a list of images and some instructions', async (): Promise<void> => {
// //       const response: supertest.Response = await request.get('/api/images');
// //       expect(response.status).toBe(200);
// //     });
// // })


// // // let server: Express

// // describe('APP should say "Hello World!"', () => {
// //   beforeAll(() => {
// //     // server = app;
// //   });

// //   it('should return 200',  (done) => {
// //     request(server)
// //       .get('/')
// //       .expect(200)
// //       .end((err, res) => {
// //         if (err) return done(err)
// //         expect(res.body).toMatchObject({'message': `Hello World!`})
// //         done()
// //       })
// //   });
// // });


// // const server = require('../src/server');
// // const request = require("supertest")

// // describe("Upload Page Test", (done) => {
// //     describe("(GET /alive) returns webpage ", (done) => {
// //         it("Is service alive", done => {
// //             request(server)
// //                 .get("/alive")
// //                 .set('Accept', 'text/html; charset=utf-8')
// //                 .expect('Content-Type', 'text/html; charset=utf-8')
// //                 .expect('Content-Length', '2')
// //                 .end((err, res) => {
// //                     if (err) console.log("Error "+err);
// //                     console.log(JSON.stringify(res));
// //                     done();
// //                 });
// //         });
// //     });
// // // });


// // import request from "supertest";

// // // import { app } from "../src/server";
// // import * as app from "../src/server";

// // describe("Test app.ts", () => {

// //   test("test 1", async () => {
// //     // const res = await request(app).get("/");
// //     expect(1).toEqual(1);
// //   });


// //   test("Catch-all route", async () => {
// //     // const res = await request(app).get("/");
// //     // expect(res.body).toEqual({ message: "Allo! Catch-all route." });
// //   });
// // });