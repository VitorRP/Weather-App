const axios = require('axios');
const {openWeatherApiKey} = require('../config/env');

async function getWeatherByCity(city) {
    
    const url = 'https://api.openweathermap.org/data/2.5/weather';

    const response = await axios.get(url, {
        params: {
            q: city,
            appid: openWeatherApiKey,
            units: 'metric',
            lang: 'pt_br'
        }
    });

    const data = response.data;

    return {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        feelsLike: data.main.feelsLike,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        weather: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };

}

module.exports = {getWeatherByCity};