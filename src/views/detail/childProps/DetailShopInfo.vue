<template>
    <div class="shopInfo">
        <div class="shopInfoTitle">
            <img :src="shop.logo" alt="">
            <span>{{shop.name}}</span>
        </div>
        <div class="shopInfoCont">
            <div class="shopInfoContLeft">
                <div>
                    <span>{{shop.goodsCount}}万</span>
                    <p>总销量</p>
                </div>
                <div>
                    <span>{{shop.fans}}</span>
                    <p>全部宝贝</p>
                </div>
            </div>
            <div class="shopInfoContRight">
                <ul>
                    <li
                        v-for="(item,index) in shop.sells"
                        :key="index"
                        >
                        <h2>{{item.name}}</h2>
                        <p class="score" :class="{red:item.isBetter, green:!item.isBetter}">{{item.score}}</p>
                        <p class="attr" :class="{red:item.isBetter, green:!item.isBetter}">{{item.isBetter?'高':'低'}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DetailShopInfo',
        props: {
            shop: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return {
                isBetter: true
            }
        }
    }
</script>
<style scope>
  .shopInfoTitle,.shopInfoCont,.shopInfoContLeft,.shopInfoContRight li {
    padding: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .shopInfo {
    padding: 0 15px;
  }
  .shopInfoTitle img {
    margin-right: 10px;
    width: 60px;
    border: 1px solid #efefef;
    border-radius: 100%;
    overflow: hidden;
  }
  .shopInfoTitle span {
      font-size: 14px;
  }
  .shopInfoContLeft,.shopInfoContRight {
      width: 50%;
  }
  .shopInfoContLeft {
      text-align: center;
      padding: 20px 0%;
      box-sizing: border-box;
      border-right: 1px solid #efefef
  }
  .shopInfoContLeft span {
      display: block;
      font-weight: bold;
      margin-bottom: 4px;
      font-size: 14px;
  }
  .shopInfoContLeft p {
      font-size: 14px;
  }
  .shopInfoContLeft div {
      width: 50%;
  }
  .shopInfoContRight {
      padding-left: 3%;
  }
  .shopInfoContRight li {
      padding: 10px 0;
  }
  .shopInfoContRight h2 {
      width: 72px;
      font-weight: normal;
      font-size: 14px;
      margin-right: 16px;
  }
  .shopInfoContRight .attr {
      width: 20px;
      height: 20px;
      color: #fff;
      text-align: center;
      line-height: 20px;
  }
  .shopInfoContRight .attr.red {
      background-color: red;
  }
  .shopInfoContRight .attr.green {
      background-color: green;
  }
  .shopInfoContRight .score.red {
      color: red
  }
  .shopInfoContRight .score.green {
      color: green
  }
  .shopInfoContRight p {
      font-size: 14px;
      width: 60px;
  }
</style>
  