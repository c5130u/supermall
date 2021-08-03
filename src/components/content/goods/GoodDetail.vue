<template>
    <div class="goodDetail">
        <good-item
            v-for="(item, index) in goods.slice(1)"
            :key="index"
            :goodItem="item"
        >
        </good-item>
    </div>
</template>
<script>
import GoodItem from 'components/content/goods/GoodItem.vue';
    export default {
        name: 'GoodDetail',
        components: {
            GoodItem
        },
        props: {
            goods: {
                type: Array,
                default(){
                    return []
                }
            }            
        }
    }
</script>
<style scope>
  .goodDetail {
      padding: 0 10px;
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }
  .goodDetail div {
      width: 48%;
      margin-bottom: 20px;
  }
  .goodDetail img {
      border-radius: 6px;
  }
  .goodDetail p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 4px 0
  }
  .goodDetail .price {
      color: red;
      margin-right: 10px;
  }
  .goodDetail .cfav {
      color: #333
  }
</style>
  