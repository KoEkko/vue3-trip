import HyRequest from '../request'

export function getCityAll () {
  return HyRequest.get({
    url:"/city/all"
  })
}