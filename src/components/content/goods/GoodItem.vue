<template>
    <div>
        <img :src="goodItem.show && goodItem.show.img" alt="" width="100%" @load="imgLoad">
        <p>{{goodItem.title}}</p>
        <span class="price">￥：{{goodItem.price}}</span>
        <span class="cfav">{{goodItem.cfav}}</span>
    </div>
</template>
<script>
    export default {
        name: 'GoodItem',
        props: {
            goodItem: {
                type: Object,
                default(){
                    return {}
                }
            }            
        },
        methods: {
            imgLoad() {
                this.$bus.$emit('itemImgLoad')
            }
        },
    }
</script>
<style scope>
  
</style>
  