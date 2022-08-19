<template>
    <div class="buttonvue clearfix">
        <div class="left but-left">
            <div class="clearfix">
                <span class="left" @click="ulshow = true">消息</span>
                <span class="left" @click="ulshow = false">活动公告</span>
            </div>
            <hr>
            <div>
                <div v-show="ulshow">
                    <ul>
                        <li>.[指南](3/5罢工) </li>
                        <li>.[指南]3月1日</li>
                        <li>.[信息]客服</li>
                        <li>.[concept]</li>
                        <li>.[concept]</li>

                    </ul>
                </div>
                <div v-show="!ulshow">
                    <p>content of tab pance 2</p>

                </div>
            </div>
        </div>
        <div class="right but-right">
            <div>
                <h2>服务中心<strong>1566-5027</strong></h2>
                <br />
                <p>营业时间</p>
                <br />

                <p>180180010@qq.com</p>
            </div>
            <div>
                <br />

                <button>常见问题</button><button>1:1查询</button>
                <SvgIcon icon-class="facebook-fill"></SvgIcon>
                <SvgIcon icon-class="相机"></SvgIcon>
                <SvgIcon icon-class="品牌标识-钉钉"></SvgIcon>
                <SvgIcon icon-class="QQ-circle-fill"></SvgIcon>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            ulshow: true,
        }
    },

}
</script>

<style lang="scss" scoped>
.buttonvue {
    width: 80%;
    margin: 30px auto;

    .left {
        float: left;

    }

    .right {
        float: right;
    }

    .but-left {
        width: 60%;
        text-align: left;

        span {
            padding: 20px;
            font-size: 24px;
        }
    }

    .but-right {
        text-align: left;

        button {
            padding: 10px;
            background-color: white;
            margin: 10px;
            border: 1px solid #000;
        }

        div:last-of-type {
            font-size: 40px;
        }

    }
}
</style>