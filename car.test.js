const Car = require("./car");

let car;
beforeEach (() => {
car = new Car("BMW", 15000, "Diesel");
});

  test("Can access price property", () => {
    const expected = 15000;
    const actual = car.price;
    expect(actual).toBe(expected);
  });

  test("Can access manufacturer property", () => {
    const expected = "Diesel";
    const actual = car.engineType;
    expect(actual).toBe(expected);
  });