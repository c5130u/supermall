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
        <detail-swiper
            name="GoodDetail"
            :detail-banners="detailBanners"
            heightVal="300px"
        ></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import DetailSwiper from './childProps/DetailSwiper.vue'
import DetailBaseInfo from './childProps/DetailBaseInfo.vue'
import DetailShopInfo from './childProps/DetailShopInfo.vue'

import {getGoodDetailData, Goods, Shop} from 'network/detail.js'

    export default {
        name: 'GoodDetail',
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                curIndex: 0,
                detailBanners: [],
                goods: {},
                shop: {}
            }
        },
        components: {
            NavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo
        },
        methods:{
            goodDetailNav(index){
                this.curIndex = index
            },
            goodDetailBack(){
                this.$router.go(-1)
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
                console.log(this.shop)
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
</style>
  