<template>
    <div class="home">
        <nav-bar class="homeBar">
            <template v-slot:navBarMid>
                <div>购物街</div>
            </template>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend :recommends="recommends"></home-recommend>
        <feature-view></feature-view>        
        <tab-control
            :titles="['流行','新款','精选']"
            @tabClick="tabClick"
        ></tab-control>
        <good-detail
            :goods="goods[curType].list"
        ></good-detail>
        <div style="height: 900px"></div>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childProps/HomeSwiper.vue'
import HomeRecommend from './childProps/HomeRecommend.vue'
import FeatureView from './childProps/Feature.vue'

import {getHomeMultiData, getHomeGoodsData} from 'network/home.js'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodDetail from 'components/content/goods/GoodDetail.vue'

    export default {
        name: 'Home',
        components: {
            NavBar,
            HomeSwiper,
            HomeRecommend,
            FeatureView,
            TabControl,
            GoodDetail
        },
        data(){
            return {
                banners: [],
                recommends: [],
                goods: {
                    'pop': { page: 0, list: [60] },
                    'new': { page: 0, list: [60] },
                    'sell': { page: 0, list: [60] }
                },
                curType: 'pop'
            }
        },
        created(){
            this.getHomeMultidataM()

            //请求商品数据
            this.getHomeGoodsDataF('pop')
            this.getHomeGoodsDataF('new')
            this.getHomeGoodsDataF('sell')
        },
        methods: {
            getHomeMultidataM(){
                getHomeMultiData().then(res => {
                    this.banners = res.data.banner.list; 
                    this.recommends = res.data.recommend.list
                })
            },
            getHomeGoodsDataF(type){
                const page = this.goods[type].page + 1
                getHomeGoodsData(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1
                })

            },
            tabClick(index){
                switch (index) {
                    case 0:
                        this.curType = 'pop'
                        break;
                    case 1:
                        this.curType = 'new'
                        break;
                    case 2:
                        this.curType = 'sell'
                        break;
                    default:
                        break;
                }
                console.log(this.curType)
            }
        }
    }
</script>
<style scope>
    .home {
        padding-top: 44px;
        padding-bottom: 44px;
    }
    .homeBar {
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        left: 0;
        top:0;
        right: 0;
        width: 100%;
        z-index: 9999
    }
</style>
  