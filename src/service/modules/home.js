import HYRequest from '@/service/request'

export function getHotSuggests() {
  return HYRequest.get({
    url:'/home/hotSuggests'
  })
}

export function getCategoryData() {
  return HYRequest.get({
    url:"/home/categories"
  })
}

export function getHoustLists(currentPage) {
  return HYRequest.get({
    url:"/home/houselist",
    params:{
      page:currentPage
    }
  })
}