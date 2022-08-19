<template>
    <div class="susopen">
        <div class="content">
            <div class="span">
                <span v-for="(iten, index) in shop" :key="index" @click="section(iten)">{{ iten }}</span>
            </div>
            <div>
                <shop-item v-for="(item, index) in typeList.slice(0, 3)" :key="index" :shop="item" :pshow="true"
                    height="270px" width="30%"></shop-item>
            </div>
        </div>

    </div>
</template>

<script>
import { getSecond } from '@/api/navraptop'


export default {
    props: {

        item: String,
        typeList: Array,
    },
    data() {
        return {
            shop: [],

        }
    },
    methods: {
        getSecond(item) {
            getSecond(item).then((data) => {
                this.shop = data.data
            })
        },
        section(iten) {
          this.$router.push({name:'Section',params:{iten:iten}})
        },
    },
    created() {
        this.getSecond(this.item)

    }
}
</script>

<style lang="scss" scoped>
.susopen {
    position: absolute;
    width: 100%;
    height: 300px;
    left: 0;
    top: 60px;
    background-color: white;
    z-index: 10;
    color: black;

    .content {
        width: 1200px;
        margin: 0 auto;
        font-size: 14px;
        border-right: 1px solid #000;

        .span {
            width: 50%;
            float: left;

            span {
                display: inline-block;
                padding: 0 10px;
                line-height: 30px;

            }
        }

        div:last-of-type {
            width: 50%;
            float: left;

        }
    }


}
</style>