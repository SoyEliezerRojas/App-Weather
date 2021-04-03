require('./index.css')

const {Weather} = require('./weather')
const {UI} = require('./UI')
const {Storage} = require('./storage')

const ui = new UI
const storage = new Storage
const {city,countryCode} = storage.getLocationData()

const weather = new Weather(city,countryCode)

const change_btn = document.getElementById('w-change-btn')


async function fetchAPI(){
    const data = await  weather.getWeather()

    ui.render(data)
}

document.addEventListener('DOMContentLoaded',fetchAPI)

change_btn.addEventListener('click',(e)=>{
    const city = document.getElementById('city').value
    const countryCode = document.getElementById('country-code').value
    weather.changeLocation(city,countryCode)
    storage.setLocationData(city,countryCode)
    fetchAPI()
    e.preventDefault()
})
