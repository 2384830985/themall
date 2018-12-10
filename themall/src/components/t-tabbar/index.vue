<template>
    <div>
        <Tabbar v-model="active"
                @change="handleTabBar(active)"
        >
            <TabbarItem
                    icon="shop"
                    to="/main/home"
            >
                首页</TabbarItem>
            <TabbarItem
                    icon="contact"
                    to="/main/mine"
            >
                我的
            </TabbarItem>
        </Tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vant';
    export default {
        components:{
            Tabbar,
            TabbarItem
        },
        name: "tTabBar",
        data() {
            return {
                active: 0,
            };
        },
        methods: {
            handleTabBar (active) {
                console.log(active)
            }
        },
        watch: {
            '$route' (to, from) {
                this.active = to.meta.abort
            }
        },
    }
</script>

<style scoped>

</style>
