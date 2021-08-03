import {request} from "./request";

// 首页的网络请求都从这边发出
export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

//首页流行，精选，新款数据
export function getHomeGoodsData(type, page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
