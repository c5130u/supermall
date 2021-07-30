<template>
    <div>
        <nav-bar class="homeBar">
            <template v-slot:navBarMid>
                <div>购物街</div>
            </template>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultiData} from 'network/home.js'
    export default {
        name: 'Home',
        components: {
            NavBar
        },
        data(){
            return {
                banner: [],
                recommend: []
            }
        },
        created(){
            getHomeMultiData().then(res => {
                this.banner = res.data.banner.list;
                this.recommend = res.data.recommend.list
            })
        }
    }
</script>
<style scope>
  .homeBar {
      background-color: var(--color-tint);
      color: #fff
  }
</style>
  