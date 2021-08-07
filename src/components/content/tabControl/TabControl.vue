<template>
    <div class="tab-control">
        <ul>
            <li
                v-for="(item,index) in titles"
                :key="index"
                :class="{active:index === curIndex}"
                @click="tabControlClick(index)"
            >{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'TabControl',
        props: {
            titles: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                curIndex: 0
            }
        },
        methods: {
            tabControlClick(index){
                this.curIndex = index
                this.$emit('tabClick', index)
            }
        }
    }
</script>
<style scope>
    .tab-control {
        position: relative;
        top: 0;
        background-color: #fff;
        z-index: 1000
    }
    .tab-control ul {
        display: flex;
        font-size: 15px;
    }
    .tab-control li {
        width: 33.33333%;
        text-align: center;
        line-height: 40px;
    }
    .tab-control li.active {
        color: var(--color-tint);
        border-bottom: 1px solid var(--color-tint);
    }
</style>
  