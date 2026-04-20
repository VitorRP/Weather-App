const { error } = require('node:console');
const { getWeatherByCity } = require('../services/openWeatherService');

async function getWeather(req, res) {
    try {
        const { city } = req.query;

        if(!city){
            return res.status(400).json({
                error: 'É necessário informar uma cidade.'
            });
        }

        const weather = await getWeatherByCity(city);

        return res.status(200).json(weather);
    } catch(err) {

        console.error('Erro ao buscar clima: ', err.message);

        if(err.response) {
            
            return res.status(err.response.status).json({
                err: 'Não foi possível encontrar informações do clima da cidade informada! Por favor, tente novamente.',
                
            });

        }

        return res.status(500).json({
            err: 'Erro ao buscar dados.'
        });
    }
}

module.exports = { getWeather };