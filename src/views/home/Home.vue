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
    export default {
        name: 'Home',
        components: {
            NavBar
        }
    }
</script>
<style scope>
  .homeBar {
      background-color: var(--color-tint);
      color: #fff
  }
</style>
  