<template>
    <div class="recommend">
        <ul>
            <li v-for="item in recommends" :key="item.sort">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                    <p>{{item.title}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'HomeRecommend',
        props: {
            recommends: {
                type: Array,
                default(){
                    return []
                }
            }
        }
    }
</script>
<style scope>
  .recommend ul {
      display: flex;
      justify-content: space-between;
      padding: 20px 0 30px 0;
      border-bottom: 10px solid #efefef
  }
  .recommend li {
      widows: 25%;
      text-align: center;
  }
  .recommend img {
      width: 80%;
      display: block;
      vertical-align: middle;
      margin: 0 auto;
  }
  .recommend p {
      line-height: 1.5;
  }
  .recommend a {
      color: #333;
      text-decoration: none;
  }
</style>
  