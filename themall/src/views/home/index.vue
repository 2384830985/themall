<template>
    <div>
        <div class="t-link-content">
            <div class="t-link-a"></div>
        </div>
        <div class="t-commodity-content">
            <div class="t-commodity-list" @click="goodsList()">
                <div class="t-commodity-logo"></div>
                <div class="t-commodity-title">123424</div>
                <div class="t-commodity-address">
                    <div class="t-commodity-city t-left">DSDSfdfsg</div>
                    <div class="t-commodity-distance t-right">距离&nbsp;1.0km</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "home",
        methods: {
            goodsList(){
                this.$router.push('/main/list/1')
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>