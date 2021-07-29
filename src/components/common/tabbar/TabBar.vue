<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'TabBar'
    }
</script>

<style scope>
  .tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #efefef;
    border-top: 1px solid #ababab;
    display: flex;
  }    
</style>
  