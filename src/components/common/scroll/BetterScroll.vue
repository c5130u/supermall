<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

    export default {
        name: 'BetterScroll',
        data(){
            return {
                scroll: null
            }
        },
        mounted() {
            // this.$nextTick(() => {
            //     new BScroll(this.$refs.wrapper, {})
            // })
            new BScroll(this.$refs.wrapper, {})
        },
    }
</script>
<style scope>
  
</style>
  