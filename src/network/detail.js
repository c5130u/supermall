import { request } from './request.js'

export function getGoodDetailData(iid){
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

//商品信息
export class Goods {
    constructor(itemInfo, columns, shopInfo) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.newPrice
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = shopInfo.services
        this.realPrice = itemInfo.lowNowPrice
    }
}

//商店信息
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}