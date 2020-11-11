<template>
    <div class="diary" :class = "{iswhite : flag}">
        注销豆瓣以后开了一个小号，偶尔看看他们几个
        <div class="target"></div>
    </div>
</template>

<script>
export default {
    props : ["even"],
    data () {
        return {
            flag : false
        }
    },
    created() {
        if(this.even) {
            this.flag = true;
        }
    }
}
</script>

<style>
    @import url("./css/diary.css");
</style>