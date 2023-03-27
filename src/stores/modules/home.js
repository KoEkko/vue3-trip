import { defineStore } from "pinia";
import { getHotSuggests, getCategoryData , getHoustLists } from '@/service'

const useHomeStore = defineStore('home', {
  state:() => ({
    hotSuggests:[],
    categories:[],
    currentPage:1,
    houseLists:[]
  }),
  actions:{
    async fetchHotSuggests() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoryData() {
      const res = await getCategoryData()
      this.categories = res.data
    },
    async fetchHouseLists() {
      const res = await getHoustLists(this.currentPage++)
      this.houseLists.push(...res.data)
    }
  }
})


export default useHomeStore