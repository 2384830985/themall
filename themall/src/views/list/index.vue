<template>
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item class="t-swipe-content" v-for="(image, index) in images"
                            :key="index"
            >
                <img class="w-100" v-lazy="image" @click="goDetails()" />
            </van-swipe-item>
        </van-swipe>
        <div class="t-content">
            <van-row gutter="15">
                <van-col span="12">
                    <div class="t-content-list" @click="goDetails()">
                        <div class="t-content-logo"></div>
                        <div class="t-content-title">
                            <div class="t-con-title ov-te-wh">11辅导费仿佛地方1</div>
                            <div class="t-con-price">
                                <span class="t-con-price-logo">¥&nbsp;</span>123.00
                            </div>
                        </div>
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import { Lazyload,Swipe,SwipeItem,Row, Col } from 'vant';
    export default {
        name: "list",
        data(){
            return{
                images: [
                    'https://img.yzcdn.cn/1.jpg',
                    'https://img.yzcdn.cn/2.jpg'
                ]
            }
        },
        components:{
            Lazyload,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            [Row.name]:Row,
            [Col.name]:Col,
        },
        methods:{
            goDetails(){
               this.$router.push('/details/1')
            }
        }
    }
</script>

<style scoped>
@import "style.scss";

</style>