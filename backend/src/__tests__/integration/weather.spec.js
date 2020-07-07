const request = require("supertest");

const app = require("../../app");

describe("Weather", () => {
  it("sould be able to get a temperature and correct playlist from city name", async () => {
    const response = await request(app).post("/weather").send({
      city: "Belo Horizonte",
    });

    expect(response.body).toHaveProperty("temperature");
  });

  it("sould be able to get a temperature and correct playlist from latitude and longitude", async () => {
    const response = await request(app).post("/weather").send({
      latitude: -19.92,
      longitude: -43.94,
    });

    expect(response.body).toHaveProperty("temperature");
  });

  it("sould not be able to get a temperature and playlist from wrong entry", async () => {
    const response = await request(app).post("/weather").send({
      latitude: -19.92,
    });

    expect(response.status).toBe(400);
  });
});
