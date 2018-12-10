<template>
    <div>
        <CellGroup  class="mt-2">
            <Cell title="购买时间" value="去看看" size="large"  />
            <Cell title="订单编号" value="去看看" size="large" />
            <Cell title="商家名称" value="去看看" size="large" />
            <Cell title="商品名称" value="去看看" size="large" />
        </CellGroup>
    </div>
</template>

<script>
    import {Cell, CellGroup} from 'vant'
    export default {
        name: "buyRecording",
        components:{
            Cell,
            CellGroup
        }
    }
</script>

<style scoped>
    @import "style.scss";
    .van-cell{
        line-height: 30px;
    }
</style>