export class Storage{
    constructor(){
        this.city
        this.countryCode
        this.defaultCity = 'Montevideo'
        this.defaultContry = 'UY'
    }

    getLocationData(){
        if(localStorage.getItem('city')===null){
            this.city = this.defaultCity
        }else{
            this.city = localStorage.getItem('city')
        }

        if(localStorage.getItem('countryCode')===null){
            this.countryCode = this.defaultContry
        }else{
            this.countryCode = localStorage.getItem('countryCode')
        }

        return {
            city: this.city,
            countryCode: this.city
        }
    }

    setLocationData(city,countryCode){
        localStorage.setItem('city',city)
        localStorage.setItem('countryCode',countryCode)
    }
}