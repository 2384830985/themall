<template>
    <div class="goods">
        <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                <img :src="thumb" @click="swipeImagePreview">
            </van-swipe-item>
        </van-swipe>
        <van-cell-group>
            <van-cell>
                <div class="goods-title">{{ goods.title }}</div>
                <div class="goods-price">{{ formatPrice(goods.price) }}</div>
            </van-cell>
        </van-cell-group>
        <van-panel title="商品详情" class="mt-1" style="text-align: center"></van-panel>
        <!--<div v-lazy-container="{ selector: 'img' }">-->
            <!--<img data-src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg">-->
            <!--<img data-src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg">-->
            <!--<img data-src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg">-->
        <!--</div>-->
        <ul>
            <li v-for="img in componentImageList">
                <img class="w-100" v-lazy="img" >
            </li>
        </ul>
        <van-goods-action>
            <van-goods-action-big-btn @click="onPointClicked">
                返回首页
            </van-goods-action-big-btn>
            <van-goods-action-big-btn primary @click="sorry">
                立即购买
            </van-goods-action-big-btn>
        </van-goods-action>
            <van-sku
                    v-model="showBase"
                    :hide-quota-text="true"
                    :sku="skuData.sku"
                    :goods="skuData.goods_info"
                    :goods-id="skuData.goods_id"
                    :quota="1"
                    stepper-title="购买数量"
                    @buy-clicked="onBuyClicked"
                    @add-cart="onAddCartClicked"
            >
                <!--<template slot="sku-group" slot-scope="props">-->
                    <!--<van-cell class="van-cell-line-height1" title="规格" value="1">-->
                        <!--<div class="t-button-sku">xxx</div>-->
                        <!--<div class="t-button-sku">123</div>-->
                    <!--</van-cell>-->
                <!--</template>-->
                <template slot="sku-stepper" slot-scope="props">
                    <van-cell size="" class="van-cell-line-height" title="数量" value="1" />
                </template>
                <template slot="sku-actions" slot-scope="props">
                    <div class="van-sku-actions">
                        <van-button bottom-action @click="onPointClicked">返回首页</van-button>
                        <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
                        <van-button type="primary" bottom-action @click="props.skuEventBus.$emit('sku:buy')">立即购买</van-button>
                    </div>
                </template>
            </van-sku>
    </div>
</template>

<script>
    import skuData from './data';
    import {
        Tag,
        Col,
        Icon,
        Cell,
        CellGroup,
        Swipe,
        Toast,
        SwipeItem,
        GoodsAction,
        GoodsActionBigBtn,
        GoodsActionMiniBtn,
        Sku,
        Button,
        Panel,
        Lazyload,
        ImagePreview,
    } from 'vant';

    export default {

        components: {
            [Tag.name]: Tag,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [GoodsAction.name]: GoodsAction,
            [GoodsActionBigBtn.name]: GoodsActionBigBtn,
            [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
            [Sku.name]: Sku,
            [Button.name]: Button,
            [Panel.name]: Panel,
            Lazyload: Lazyload,
        },

        data() {
            this.skuData = skuData;
            return {
                showBase: false,
                goods: {
                    title: '美国伽力果（约680g/3个）',
                    price: 2680,
                    thumb: [
                        'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                        'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
                    ]
                },
                componentImageList: [
                    'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
                    'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
                    'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
                    'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
                ],
            };
        },

        methods: {
            formatPrice() {
                return '¥' + (this.goods.price / 100).toFixed(2);
            },
            sorry() {
                this.showBase = true;
            },
            onBuyClicked(data) {
                this.$toast(JSON.stringify(data));
            },
            onAddCartClicked(data) {
                this.$toast(JSON.stringify(data));
            },
            onPointClicked(){
                this.$router.push('/')
            },
            swipeImagePreview(){
                ImagePreview([
                    'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                    'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
                ]);
            }
        }
    };
</script>

<style lang="scss">
    .goods {
        padding-bottom: 50px;

        &-swipe {
            img {
                width: 100%;
                display: block;
            }
        }

        &-title {
            font-size: 16px;
        }

        &-price {
            color: #f44;
        }

        &-express {
            color: #999;
            font-size: 12px;
            padding: 5px 15px;
        }

        &-cell-group {
            margin: 15px 0;

            .van-cell__value {
                color: #999;
            }
        }

        &-tag {
            margin-left: 5px;
        }
    }
    .van-cell-line-height {
        line-height: 1rem;
    }
    .van-cell-line-height1 {
        line-height: 1rem;
        flex-wrap: wrap
    }
    .t-button-sku{
        padding: 5px;
        color: #323232;
        height: 0.4rem!important;
        background: #ffab9f;
    }
    .t-button-sku:active{
        color: white;
        background: #ffab9f;
    }
    .demo-lazyload {
        padding: 0 15px;
        img,
        div[lazy] {
            padding: 15px;
            width: 100%;
            height: 250px;
            margin: 10px 0 0;
            background-color: white;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            background-size: 315px 250px;
            background-position: 15px;
            background-repeat: no-repeat;
            box-sizing: border-box;
        }
        .van-doc-demo-block__title,
        .van-doc-demo-section__title {
            padding-left: 0;
        }
    }
</style>
