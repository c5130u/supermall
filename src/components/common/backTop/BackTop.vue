<template>
    <div
        class="backTop"
    ></div>
</template>
<script>
    export default {
        name: 'BackTop'
    }
</script>
<style scope>
  .backTop {
      z-index: 10000000;
      position: fixed;
      right: 10px;
      bottom: 50px;
      background: url("~assets/img/common/top.png") no-repeat center;
      background-size: 50px auto;
      width: 50px;
      height: 50px;
  }
</style>
  