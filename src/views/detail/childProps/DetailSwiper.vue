<template>
    <swiper :style="{height: heightVal}">
        <swiper-item v-for="item in detailBanners" :key="item.index">
            <a href="javascript:;">
                <img :src="item" alt="" >
            </a>
        </swiper-item>
    </swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
    export default {
        name: '',
        data(){
            return {
                isLoad: false
            }
        },
        props: {
            detailBanners: {
                type: Array,
                default(){
                    return []
                }
            },
            heightVal: {
                type: String,
                default(){
                    return '300px'
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>
<style scope>
</style>
  