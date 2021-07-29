<template>
    <div class="tabbaritem" @click="itemClick">
        <div v-if="!isActive"><slot name="bar-icon"></slot></div>
        <div v-else><slot name="bar-icon-active"></slot></div>
        <div :style="curClass">
            <slot name="bar-text"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TabBarItem',
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        computed: {
            isActive(){
                return !this.$route.path.indexOf(this.path)
            },
            curClass(){
                return this.isActive ? { color: this.activeColor } : {}
            }
        },
        methods: {
            itemClick(){
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scope>
  .tabbaritem {
      display: block;
      flex: 1;
      text-align: center;
      padding: 4px 0;
  }
  .tabbar img {
      display: block;
      vertical-align: middle;
      margin: 0 auto;
      width: 24%;
  }
  .tabbar p {
      font-size: 14px
  }
</style>
  