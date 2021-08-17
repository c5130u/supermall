<template>
    <div @click="goodDetail">
        <img :src="showImg" alt="" width="100%" @load="imgLoad">
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
            },
            goodDetail() {
                this.$router.push('/gooddetail/' + this.goodItem.iid)
            }
        },
        computed: {
            showImg(){
                return this.goodItem.show && this.goodItem.show.img || this.goodItem.image
            }
        }
    }
</script>
<style scope>
  
</style>
  