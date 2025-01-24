const getFahrenheit = require('./script');
describe("tests for getFahrenheit function", () => {
    it("should convert 10 Celsius to 50 Fahrenheit", () => {
        const result = getFahrenheit(10);
        expect(result).toBe("10 градусов по Цельсию равны 50 градусам по Фаренгейту");
    });
    it("should correctly convert 0 Celsius to 32 Fahrenheit", () => {
        expect(getFahrenheit(0)).toBe("0 градусов по Цельсию равны 32 градусам по Фаренгейту");
    });

    it("should correctly convert -40 Celsius to -40 Fahrenheit", () => {
        expect(getFahrenheit(-40)).toBe("-40 градусов по Цельсию равны -40 градусам по Фаренгейту");
    });
});
