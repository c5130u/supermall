<template>
    <div>
        <nav-bar>
            <template v-slot:navBarLeft>
                <div class="navBarLeft" @click="goodDetailBack">     
                    <img src="~assets/img/common/back.svg" alt="">        
                </div>
            </template>
            <template v-slot:navBarMid>
                <div class="navBarMid">
                    <ul>
                        <li
                            v-for="(item, index) in titles"
                            :key="index"
                            :class="{cur: curIndex === index}"
                            @click="goodDetailNav(index)"
                        >
                            {{item}}
                        </li>
                    </ul>
                </div>
            </template>
        </nav-bar>
        <better-scroll ref="goodDetailScroll">
            <detail-swiper
                name="GoodDetail"
                :detail-banners="detailBanners"
                heightVal="300px"
            ></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <a href="javascript:;" class="goShop">进店逛逛</a>
            <detail-info
                :goodDetailData="goodDetailData"
                @imgLoadC="imgLoadC"></detail-info>
            <good-params
                :goodsSize="goodsSize"
                :goodsInfo="goodsInfo"
            ></good-params>
            <detail-commend :goodsCommend="goodsCommend"></detail-commend>
            <good-new-list :goodsList="goodsList"></good-new-list>
        </better-scroll>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import DetailSwiper from './childProps/DetailSwiper.vue'
import DetailBaseInfo from './childProps/DetailBaseInfo.vue'
import DetailShopInfo from './childProps/DetailShopInfo.vue'
import DetailInfo from './childProps/DetailInfo.vue'
import GoodParams from './childProps/GoodParams.vue'
import DetailCommend from './childProps/DetailCommend.vue'
import GoodNewList from './childProps/GoodNewList.vue'

import {getGoodDetailData, Goods, Shop, getRecommend} from 'network/detail.js'
import BetterScroll from 'components/common/scroll/BetterScroll.vue'

    export default {
        name: 'goodDetail',
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                curIndex: 0,
                detailBanners: [],
                goods: {},
                shop: {},
                goodDetailData: {},
                goodsSize: {},
                goodsInfo: {},
                goodsCommend: {},
                goodsList: []
            }
        },
        components: {
            NavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            BetterScroll,
            DetailInfo,
            GoodParams,
            DetailCommend,
            GoodNewList
        },
        methods:{
            goodDetailNav(index){
                this.curIndex = index
            },
            goodDetailBack(){
                this.$router.go(-1)
            },
            imgLoadC() {
                this.$refs.goodDetailScroll.refresh();
            }
        },
        created(){
            this.iid = this.$route.params.iid;
            getGoodDetailData(this.iid).then( (res) => {
                let data = res.result
                //轮播数据
                this.detailBanners = data.itemInfo.topImages

                //商品图片价格等信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);

                //商店信息
                this.shop = new Shop(data.shopInfo)

                //商品详情数据
                this.goodDetailData = data.detailInfo

                //商品参数数据
                this.goodsSize = data.itemParams.rule
                this.goodsInfo = data.itemParams.info

                //商品评价信息
                if(data.rate.cRate !== 0) {
                    this.goodsCommend = data.rate.list[0]
                }
            })            
        
            //商品详情页商品列表
            getRecommend().then(res => {
                this.goodsList = res.data.list;
            })
        }
    }
</script>
<style scope>
    .navBarLeft {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .navBarLeft img {
        display: block;
        width: 90%;
    }
    .navBarMid ul {
        display: flex;
    }
    .navBarMid li {
        flex: 1;
        font-size: 14px;
    }
    .navBarMid li.cur {
        color: var(--color-high-text)
    }
    .tabbar {
        display: none;
    }
    .goShop {
        display: block;
        width: 200px;
        border-radius: 4px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        background-color: #efefef;
        color: #666;
        margin: 30px auto 0 auto;
        text-decoration: none;
    }
</style>
  