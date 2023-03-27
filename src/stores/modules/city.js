import { getCityAll } from "@/service";
import { defineStore } from "pinia";

const useCityStore = defineStore('city', {
  state:() => ({
    cityData:{},
    currentCity:{
      cityName:"广州"
    }
  }),
  actions:{
    async fetchAllCityData() {
      const res = await getCityAll()
      this.cityData = res.data
    }
  }
}) 

export default useCityStore