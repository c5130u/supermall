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
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
    export default {
        name: 'GoodDetail',
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                curIndex: 0
            }
        },
        components: {
            NavBar
        },
        methods: {
            goodDetailNav(index){
                this.curIndex = index
            },
            goodDetailBack(){
                this.$router.go(-1)
            }
        },
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
  