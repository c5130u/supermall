import { request } from './request.js'

export function getGoodDetailData(iid){
    return request({
        url: '/detail',
        params: {
            iid
        }
    })

}