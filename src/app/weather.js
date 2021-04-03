export class Weather{
    constructor(city, countryCode){
        this.city = city
        this.countryCode = countryCode
        this.APIkey = '52fe49d45dfb176fea3fbe1782b19a09'
        this.lang = 'es'
    }

    async getWeather(){
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&lang=${this.lang}&appid=${this.APIkey}&units=metric`
        const response = await fetch(URL)
        const data = await response.json()
        return data
    }

    changeLocation(city,countryCode){
        this.city = city
        this.countryCode = countryCode
    }
}