import { defineStore } from "pinia";

const startDate = new Date()
const endDate = new Date().setDate(new Date().getDate() + 1)

const useMainStore = defineStore('main', {
  state:() => ({
    startDate,
    endDate,
    isLoading:false,
  })
})

export default useMainStore 