const SearchWeatherService = require("./SearchWeatherService");

describe("Search Weather", () => {
  it("should be able to get actual temperature using name city", async () => {
    const temperature = await SearchWeatherService.SearchByCity(
      "Belo Horizonte"
    );

    expect(typeof temperature).toBe("number");
  });

  it("should not be able to get actual temperature using wrong name city", async () => {
    const temperature = await SearchWeatherService.SearchByCity(
      "Belu Hourizointes"
    );

    expect(temperature).toHaveProperty("error");
  });

  it("should be able to get actual temperature using latitude and longitude", async () => {
    const temperature = await SearchWeatherService.SearchByCoordinates(
      -19.92,
      -43.94
    );

    expect(typeof temperature).toBe("number");
  });

  it("should not be able to get actual temperature using nonexistent latitude and longitude", async () => {
    const temperature = await SearchWeatherService.SearchByCoordinates(
      50000,
      50000
    );

    expect(temperature).toHaveProperty("error");
  });
});
