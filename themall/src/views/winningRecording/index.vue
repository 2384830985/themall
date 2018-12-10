<template>
    <div>
        <CellGroup  class="mt-2">
            <Cell title="中奖时间" value="去看看" size="large"  />
            <Cell title="所中商品" value="去看看" size="large" />
        </CellGroup>
    </div>
</template>

<script>
    import {Cell, CellGroup} from 'vant'
    export default {
        name: "winningRecording",
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