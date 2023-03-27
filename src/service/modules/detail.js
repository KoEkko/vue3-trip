import HYRequest from '@/service/request'

export function getDetailInfos(houseId) {
  return HYRequest.get({
    url:'/detail/infos',
    params:{
      houseId
    }
  })
}