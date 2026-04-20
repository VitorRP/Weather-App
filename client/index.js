const apiKey = '6c574c1bcdc548d08f9174941231909'

const searchBtn = document.querySelector('searchBtn')
const icon = document.querySelector(".weather-icon")

function getLocale() {
    const locale = document.getElementById('locale').value
    console.log(locale)
    const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + locale + '&aqi=no'
    console.log(apiUrl)

    return apiUrl
}


async function busca(apiUrl) {

    const Busca = await fetch(apiUrl).then((res) => res.json())
    const data = Busca.current
    const temp = (data.temp_c)
    const city = (Busca.location.name) + ", " + (Busca.location.region)
    const country = (Busca.location.country)
    const humidity = (data.humidity)
    const windSpeed = (data.wind_kph)
    var condition = (data.condition.icon)
    const weatherPicture = (condition.split('64x64/'))[1]
    const picturePath = "images/" + weatherPicture
    
    document.getElementById("showTemp").innerHTML = temp + "°C"
    document.getElementById("fullCity").innerHTML = city
    document.getElementById("showHumidity").innerHTML = humidity + "%" + `<p class="humidity">Humidity</p>`
    document.getElementById("showWind").innerHTML = windSpeed + " Km/h" + `<p class="wind">Wind Speed</p>`
    document.getElementById("country").innerHTML = country
    
    icon.src = picturePath
    
    document.querySelector(".weather").style.display = "block"
}
