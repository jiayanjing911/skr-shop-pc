<template>
    <div>
        <div class="zs-adv clearfix">

            <a title="上一页" :href="'#'" class="adv-pre" v-show="leftButton" @click="leftScroll">上一个</a>
            <div id="adv-pad-scroll">
                <div class="adv-pad clearfix">
                    <img class="adv-pad-item" v-for="(item, index) in itemlist" :key="index" alt=""
                        :ref="`item${index}`" :src="item.swiperImg" />
                </div>
            </div>
            <a title="下一页" :href="'#'" class="adv-next" v-show="rightButton" @click="rightScroll">下一个</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "SwitchPage",
    components: {},
    props: {
        itemlist: [

        ],
    },
    data() {
        return {
            maxClickNum: 0, // 最大点击次数
            lastLeft: 0, // 上次滑动距离
            clickNum: 0, // 点击次数
            marginLeft: 0,
            with: 400,
            rightButton: true,
            leftButton: true,

            // imgx: 0,
            // form: this.$form.createForm(this, { name: "horizontal_login" }),
        };
    },
    //函数
    methods: {
        leftScroll() {
            setTimeout(() => {
                this.clickNum--
                    this.rightButton = true

                if (this.clickNum > 0) {
                    this.marginLeft = this.marginLeft + 420
                    document.getElementsByClassName("adv-pad")[0].style.marginLeft = `${this.marginLeft}px`;
                } else {
                    this.leftButton = false
                }
            })

        },
        rightScroll() {
            setTimeout(() => {
                this.clickNum++
                this.leftButton = true

                if (this.clickNum < this.itemlist.length - 1) {

                    this.marginLeft = this.marginLeft - 420
                    document.getElementsByClassName("adv-pad")[0].style.left.marginLeft = `${this.marginLeft}px`;
                    console.log(document.getElementsByClassName("adv-pad")[0].style.left);
                } else {
                    this.rightButton = false
                }
            })
   

        // // 如果点击次数小于数组长度-1时，执行左滑动效果。
        // if (this.clickNum < this.itemlist.length - 1) {
        //     // 获取当前元素宽度
        //     let width =
        //         document.querySelectorAll(".adv-pad-item")[this.clickNum].offsetWidth;
        //     // 获取最后一个元素距离左侧的距离
        //     let lastItemOffsetLeft =
        //         document.getElementsByClassName("adv-pad-item")[
        //             this.itemlist.length - 1
        //         ].offsetLeft;
        //     // 获取可视区域宽度
        //     const lookWidth = document.getElementById("adv-pad-scroll").clientWidth;
        //     // 如果最后一个元素距离左侧的距离大于可视区域的宽度，表示最后一个元素没有出现，执行滚动效果
        //     if (lastItemOffsetLeft > lookWidth) {
        //         // 公示：滚动距离（元素的magin-left值） = 负的它自己的长度 + 上一次滑动的距离
        //         document.getElementsByClassName("adv-pad")[0].style.marginLeft = `${-width + this.lastLeft
        //             }px`;
        //         this.lastLeft = -width + this.lastLeft;
        //         // 点击次数+3
        //         this.clickNum += 1;
        //         // 记录到最后一个元素出现在可视区域时，点击次数的最大值。用于后面点击左侧箭头时判断右侧箭头的显示
        //         this.maxClickNum = this.clickNum;
        //     }
        //     this.showRightIcon = lastItemOffsetLeft > lookWidth + width;
        // }
    },
},
};
</script>
<style lang="scss" scoped>
.zs-adv {

    width: 1272px;
    height: 600px;

    a {
        margin-top: 58px;
        width: 16px;
        height: 24px;
        opacity: 0.8;
    }


    .adv-pre {
        float: left;
        margin-right: 20px;
    }

    .adv-next {
        float: right;
    }

    #adv-pad-scroll {
        float: left;
        width: 1500px;
        overflow: hidden;
        margin:0 auto;
        .adv-pad {
            width: 2500px;
            height: 600px;

            .adv-pad-item {
                width:500px;
               float:left;
               margin-left:20px;
            }

            
        }
    }
}
</style>