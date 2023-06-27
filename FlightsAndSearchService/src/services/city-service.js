const {CityRepository}=require('../repository/index')

class CityService{
    constructor(){
        this.CityRepository=CityRepository
    }
    async createCity(cityId){
         try {
            const city=await this.CityRepository.createCity(cityId)
            return city
         } catch (error) {
            console.log(error)
            throw{error}
         }
    }
    async deleteCity(cityId){
         try{
            const response=await this.CityRepository.deleteCity(cityId)
            return response
         }catch(error){
            throw{error}
         }
    }
    async updateCity(cityId,data){
          try{
            const city=await this.CityRepository.updateCity(cityId,data)
            return city
          }catch(error){
            throw{error}
          }
    }
    async getCity(cityId){
        try{
            const city=await this.CityRepository.getCity(cityId)
            return city
        }catch(error){
            throw{error}
        }
    }
    
}
module.exports=CityService