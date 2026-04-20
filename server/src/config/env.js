require ('dotenv').config();

module.exports = {
    
    port: process.env.PORT || 3000,
    openWeatherApiKey: process.env.OPENWEATHER_API_KEY

};