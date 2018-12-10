<template>
    <div>
        <CellGroup class="mt-2">
            <Cell title="头像" size="large" class="t-cell-logo">
                <div class="cell-logo"></div>
            </Cell>
            <Cell title="昵称" value="张三毛" size="large" />
        </CellGroup>
        <CellGroup  class="mt-2">
            <Cell title="购买记录" value="去看看" to="/main/buyRecording" size="large"  />
            <Cell title="中奖记录" value="去看看" to="/main/winningRecording" size="large" />
        </CellGroup>
    </div>
</template>

<script>
    import {Cell, CellGroup,Panel} from 'vant'
    export default {
        name: "mine",
        components:{
            Cell,
            Panel,
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