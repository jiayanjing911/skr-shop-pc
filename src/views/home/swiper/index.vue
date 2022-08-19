<template>
    <div class="block">
        <el-carousel trigger="click" :height="height" :type="type" :loop="loop" :autoplay="autoplay"
            :interval="interval">
            <el-carousel-item v-for="(item, index) in shop.slice(start, end)" :key="index" :style="{ width: width }">
                <!-- {{index}} -->
                <div>
                    <!-- <img v-if="index>start" :src="shop[index-1].img" alt=""> -->
                    <img :src="item.swiperImg || item.img" alt="" v-show="showhaden"
                        :style="{ width: imgwidth,}">
                    <!-- <img v-if="index<index" :src="shop[index+1].img" alt=""> -->

                    <div v-show="showhaden && Obscuration" class="Obscuration" :style="{ height: height }">
                        <p>{{ item.title }}</p>
                    </div>

                </div>

                <shop-item v-show="!showhaden" :key="index" :shop='item' :pshow="true" width="250px" class="shopitem">
                </shop-item>

            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'SwiperVue',
    props: {
        //宽度
        width: String,
        imgwidth: String,

        //渲染列表
        shop: Array,
        //高度
        height: String,
        //轮播 样式 card卡片
        type: String,
        //轮播停顿时间
        interval: Number,
        // 是图片轮播还是shoplist
        showhaden: {
            type: Boolean,
            default: true,
        },
        // 是否循环轮播
        loop: {
            type: Boolean,
            default: true,
        },
        //是否自动切换
        autoplay: {
            type: Boolean,
            default: true,
        },
        // 是否显示蒙层
        Obscuration: {
            type: Boolean,
            default: false,
        },
        //显示(轮播)数量
        start: {
            type: Number,
            default: 0,
        },
        end: {
            type: Number,

        },
    }
}
</script>

<style lang="scss">
.el-carousel {
    width: 100%;

    .el-carousel-item {
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .Obscuration {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 5;
        top: 0;
        left: 0;

        // display: none;
        color: transparent;

        p {
            line-height: 600px;
        }
    }

    .Obscuration:hover {
        color: white;
        font-size: 40px;
        background-color: rgba(0, 255, 255, 0.337);
        display: block;
    }

    .shopitem {
        height: 380px;
        margin: 20px auto;
        margin-left: 240px;

        z-index: 10;
    }
}
</style>