<template>
    <div>
        <router-view/>
        <!--底部导航-->
        <t-tab-bar></t-tab-bar>
    </div>
</template>

<script>
    import TTabBar from '@/components/t-tabbar';
    export default {
        components:{
            TTabBar
        },
    }
</script>

<style scoped>

</style>