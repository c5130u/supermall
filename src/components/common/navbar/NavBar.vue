<template>
    <div class="navBar">
        <div class="navBarLeft"><slot name="navBarLeft"></slot></div>
        <div class="navBarMiddle"><slot name="navBarMid"></slot></div>
        <div class="navBarRight"><slot name="navBarRight"></slot></div>
    </div>
</template>
<script>
    export default {
        name: 'NavBar'
    }
</script>
<style scope>
  @import "~assets/css/base.css";
  
    .navBar {
        display: flex;
        justify-content: space-between;
        text-align: center;
    }
    .navBar > div {
        height: 44px;
        line-height: 44px;
        width: 60px;
    }
    .navBarMiddle {
        flex: 1;
    }
</style>
  