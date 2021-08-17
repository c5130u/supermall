<template>
    <div class="goodsCommend" v-if="Object.keys(goodsCommend).length !== 0">
        <div class="title">
            <span>用户评价</span>
            <a href="javascript:;">更多</a>
        </div>
        <div class="content">
            <div class="contentTit">
                <img :src="goodsCommend.user.avatar" width="40" alt="">
                <h3>{{goodsCommend.user.uname}}</h3>
            </div>
            <div class="contentDetail">
                <p>{{goodsCommend.content}}</p>
                <div class="contentDetailMsg">
                    <span>{{goodsCommend.created | showDate}}</span>
                    <span>{{goodsCommend.style}}</span>
                </div>
                <div class="contentImg">
                    <img 
                        :src="item" 
                        v-for="(item, index) in goodsCommend.images"
                        :key="index"
                    width="20%">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {formatDate} from 'common/js/utils.js';

    export default {
        name: 'DetailCommend',
        data() {
            return {
                timeMsg: 0
            }
        },
        props: {
            goodsCommend: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        filters: {
            showDate(time) {
                var date = new Date(time*1000);
                return formatDate(date, 'yyyy-MM-dd');
            }
        }
    }
</script>
<style scope>
    .goodsCommend {
        padding: 0 10px
    }
    .title {
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #efefef;
    }
    .title span {
        width: 140px;
        font-size: .26rem;
        color: #555;
    }
    .title a {
        width: 40px;
        font-size: .24rem;
        color: #666;
        text-decoration: none;
        font-weight: bold;
    }
    .contentTit {
        margin: 10px 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .contentTit img {
        border-radius: 100%;
        margin-right: 10px;
    }
    .contentTit h3 {
        font-size: 14px;
    }
    .contentDetail p {
        color: #666;
        line-height: 1.5;
        margin-bottom: 10px;
    }
    .contentDetailMsg span {
        color: #999;
        margin-right: 8px;
    }
    .contentImg {
        margin-top: 10px;
    }
    .contentImg img {
        max-height: 60px;
        margin-right: 4px;
    }
</style>
  