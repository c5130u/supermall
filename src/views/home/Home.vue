<template>
    <div class="home">
        <nav-bar class="homeBar">
            <template v-slot:navBarMid>
                <div>购物街</div>
            </template>
        </nav-bar>
        <div class="HomeScroll">
            <tab-control
                :titles="['流行','新款','精选']"
                @tabClick="tabClick"
                ref="tabControl1"
                class="fixed"
                v-show="isFixedShow"
            ></tab-control>
            <better-scroll
                ref="scrollNew"
                :probe-type="3"
                @scroll="scrollPos"
                :pull-up-load="true"
                @scroll2="pullingUpData"
                @pullingUp="loadMore"
            >   
                <home-swiper :banners="banners" @swiperItemImgLoadFun="swiperItemFun"></home-swiper>
                <home-recommend :recommends="recommends"></home-recommend>
                <feature-view></feature-view>        
                <tab-control
                    :titles="['流行','新款','精选']"
                    @tabClick="tabClick"
                    ref="tabControl2"
                ></tab-control>                
                <good-list
                    :goods="goods[curType].list"
                ></good-list>
            </better-scroll>
            <p class="pullUp" v-if="isShowPullUpTxt">上拉加载更多...</p>
            <back-top @click.native="clickBackTopBtn" v-if="isShowTapBtn"></back-top>
        </div>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childProps/HomeSwiper.vue'
import HomeRecommend from './childProps/HomeRecommend.vue'
import FeatureView from './childProps/Feature.vue'

import {getHomeMultiData, getHomeGoodsData} from 'network/home.js'
import { debounce } from 'common/js/utils.js'

import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodList from 'components/content/goods/GoodList.vue'
import BetterScroll from 'components/common/scroll/BetterScroll.vue'
import BackTop from 'components/common/backTop/BackTop.vue'

    export default {
        name: 'Home',
        components: {
            NavBar,
            HomeSwiper,
            HomeRecommend,
            FeatureView,
            TabControl,
            GoodList,
            BetterScroll,
            BackTop
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
                curType: 'pop',
                scroll: null,
                isShowTapBtn: false,
                isShowPullUpTxt: false,
                tabControlOffsetTop: 0,
                isFixedShow: false,
                tabControlIndex: '',
                curPositionTop: 0,
                saveY: 0
            }
        },
        created(){

            this.getHomeMultidataM()

            //请求商品数据
            this.getHomeGoodsDataF('pop')
            this.getHomeGoodsDataF('new')
            this.getHomeGoodsDataF('sell')

        },
        mounted() {
            //图片防抖
            const refreshNew = debounce(this.$refs.scrollNew.refresh, 50)
            this.$bus.$on('itemImgLoad', () => {    
                refreshNew()
            })   
        },
        methods: {            
            getHomeMultidataM(){
                getHomeMultiData().then(res => {
                    this.banners = res.data.banner.list; 
                    this.recommends = res.data.recommend.list
                });
            },
            getHomeGoodsDataF(type){
                const page = this.goods[type].page + 1
                getHomeGoodsData(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1
                    this.$refs.scrollNew.finishPullUp()
                    this.isShowPullUpTxt = false
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
                this.$refs.tabControl2.curIndex = index;
                this.$refs.tabControl1.curIndex = index;
            },
            clickBackTopBtn() {
                this.$refs.scrollNew.scrollTo(0, 0, 300);
            },
            scrollPos(position){
                let positionY = -(position.y)
                this.curPositionTop = positionY
                this.isShowTapBtn = positionY > 1000
                this.isFixedShow = positionY > this.tabControlOffsetTop
            },
            pullingUpData(){
                this.getHomeGoodsDataF(this.curType)   
            },

            //下拉加载更多
            loadMore(){
                this.isShowPullUpTxt = true
            },
            swiperItemFun(){
                //tab切换部分吸顶功能实现
                this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
            }
        },
        destroyed(){
            console.log(12)
        },
        activated(){
            this.$refs.scrollNew.scrollTo(0, -this.saveY, 0)
            console.log(this.saveY)
        },
        deactivated(){
            this.saveY = this.curPositionTop
            console.log(this.saveY)
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
    .pullUp {
        position: fixed;
        left: 0;
        bottom: 54px;
        text-align: center;
        right: 0;
        z-index: 10000000;
        padding: 4px 0;
        background-color: rgba(255,255,255,.6);
    }
    .fixed {
        position: fixed;
        left: 0;
        top: 44px;
        right: 0;
        width: 100%;
        z-index: 99999999999;
        background-color: #fff;
    }
</style>
  