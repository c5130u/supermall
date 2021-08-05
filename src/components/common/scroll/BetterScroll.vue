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
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                scroll: null,
                scrollY: 0
            }
        },
        mounted() {

            //初始化better-scroll
            this.scroll = new BScroll(this.$refs.wrapper, {  // eslint-disable-line no-unused-vars
                click: true,
                tap: true,
                probeType: this.probeType,
                pullUpLoad: {
                    threshold: -70
                }
            })

            //监听滚动条位置
            this.scroll.on('scroll', (position) => {
                this.$emit('scroll', position)
            })

            //监听上拉加载
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp')
            })
        },
        methods: {
            scrollTo(x, y, time) {
                return this.scroll.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.scroll.finishPullUp()
            },
            refresh() {
                console.log(12)
                this.scroll && this.scroll.refresh();
            }
        }
    }
</script>
<style scope>
  
</style>
  