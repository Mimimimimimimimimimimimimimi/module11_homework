function getCelsiusFromUser() {
    const celsius = prompt('Введите количество градусов по Цельсию');
    return getFahrenheit(celsius);
 }
 
 function getFahrenheit(celsius) {
    const fahrenheit = celsius * 9 / 5 + 32;
    return celsius + ' градусов по Цельсию равны ' + fahrenheit + ' градусам по Фаренгейту';
 }

  module.exports = getFahrenheit;