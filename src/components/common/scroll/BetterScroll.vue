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
            this.scroll = new BScroll(this.$refs.wrapper, {  // eslint-disable-line no-unused-vars
                click: true,
                tap: true,
                probeType: 3
            })
        },
        methods: {
            scrollTo(x, y, time) {
                return this.scroll.scrollTo(x, y, time)
            }
        }
    }
</script>
<style scope>
  
</style>
  