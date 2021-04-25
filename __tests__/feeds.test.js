const request = require("supertest");
const app = require("../app");

describe("Test all public feeds", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/feeds?tags=")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('link', 'https://www.flickr.com/photos/');
      });
  });
});
