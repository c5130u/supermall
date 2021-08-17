<template>
 <div>
    <p>{{date1 | formatDate}}</p>
    <p>{{date1 | formatDate2}}</p>
    <p>{{date1 | formatDate3}}</p>
 </div>
</template>
<script>
 import { formatDate } from 'common/js/utils.js' // 在组件中引用date.js
    export default {
        name: 'Test',
        data() {
            return {
                date1: 1646461131351
            }
        },
        filters: {
            /*
            时间格式自定义 只需把字符串里面的改成自己所需的格式
            */ 
            formatDate(time) {
                var date = new Date(time);
                return formatDate(date, 'yyyy.MM.dd'); 
            },
            formatDate2(time) {
                var date = new Date(time);
                return formatDate(date, 'hh:mm:ss'); 
            },
            formatDate3(time) {
                var date = new Date(time);
                return formatDate(date, 'yyyy年MM月dd日 hh:mm:ss'); 
            }
        }
    }
</script>
<style scope>
  
</style>
  