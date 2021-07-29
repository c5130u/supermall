<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home" activeColor="pink">
                <template v-slot:bar-icon>
                <img src="~assets/img/tabbar/home.svg" alt="">
                </template>
                <template v-slot:bar-icon-active>
                <img src="~assets/img/tabbar/home_active.svg" alt="">
                </template>
                <template v-slot:bar-text>
                <p>首页</p>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/category" activeColor="pink">
                <template v-slot:bar-icon>
                <img src="~assets/img/tabbar/category.svg" alt="">
                </template>
                <template v-slot:bar-icon-active>
                <img src="~assets/img/tabbar/category_active.svg" alt="">
                </template>
                <template v-slot:bar-text>
                <p>分类</p>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/shopcart" activeColor="pink">
                <template v-slot:bar-icon>
                <img src="~assets/img/tabbar/shopcart.svg" alt="">
                </template>
                <template v-slot:bar-icon-active>
                <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
                </template>
                <template v-slot:bar-text>
                <p>购物车</p>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/profile" activeColor="pink">
                <template v-slot:bar-icon>
                <img src="~assets/img/tabbar/profile.svg" alt="">
                </template>
                <template v-slot:bar-icon-active>
                <img src="~assets/img/tabbar/profile_active.svg" alt="">
                </template>
                <template v-slot:bar-text>
                <p>我的</p>
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar.vue';
import TabBarItem from 'components/common/tabbar/TabBarItem.vue';

    export default {
        name: 'MainTabBar',
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>
<style lang="scss" scope>
  
</style>
  