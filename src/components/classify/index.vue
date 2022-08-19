<template>
    <div class="right">
        <el-select v-model="value1" placeholder="请选择">
            <el-option v-for="item in options" :key="item.label" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value2" placeholder="请选择">
            <el-option v-for="item in Thesorting" :key="item.label" :label="item.label" :value="item.value">
            </el-option>
        </el-select>

    </div>
</template>

<script>


export default {
    name: 'Section',
    props: {
        page: Number,
        lists: Array,
    },
    data() {
        return {
            list: JSON.parse(JSON.stringify(this.lists)),
            shoplist: [],
            count: 0,
            options: [{
                value: 10,
                label: 10
            }, {
                value: 20,
                label: 20
            }, {
                value: 30,
                label: 30,
            },],
            value1: 10,
            Thesorting: [{
                value: '默认',
                label: '默认'
            }, {
                value: (name = 'price') => {
                    return function (a, b) {
                        var value1 = a[name];
                        var value2 = b[name];
                        // console.log(a, b);
                        return value2 - value1;
                    }
                },
                label: '价格最高'
            }, {
                value: (name = 'price') => {
                    return function (a, b) {
                        var value1 = a[name];
                        var value2 = b[name];
                        // console.log(a, b);
                        return value1 * 1 - value2 * 1;
                    }
                },
                label: '价格最底',
            }, {
                value: (name = 'sale') => {
                    return function (a, b) {
                        var value1 = a[name];
                        var value2 = b[name];
                        // console.log(a, b);
                        return value2 - value1;
                    }
                },
                label: '销量最高',
            },],
            value2: '默认',


        }
    },

    // methods: {
    //     getSpu(name) {
    //         console.log({ name });
    //         getSpu(name).then((data) => {
    //             console.log(data.data);
    //             this.list = data.data;
    //             this.shoplist = this.list.slice(0, this.value1)

    //             this.$emit('getshoplist', this.shoplist)
    //         });
    //     },


    // },
    watch: {
         '$route': {
      deep: true,
      handler() {
        
        }
    },
        page: {
            deep: true,
            handler(nval, oval) {

                this.shoplist = this.list.slice((nval - 1) * this.value1, nval * this.value1)
                console.log(nval, this.shoplist);
                this.$emit('getshoplist', this.shoplist, this.value1)

            }
        },

        value1: {
            deep: true,
            handler(nval, oval) {

                this.shoplist = this.list.slice((this.page - 1) * this.value1, this.page * this.value1)
                console.log(nval, this.shoplist, 'fenleiye');
                this.$emit('getshoplist', this.shoplist, this.value1)
            }
        },
        value2: {
            deep: true,
            handler(newval) {
                if (newval == '默认') {
                    this.list = JSON.parse(JSON.stringify(this.lists))
                    this.shoplist = this.list.slice((this.page - 1) * this.value1, this.page * this.value1)
                    this.$emit('getshoplist', this.shoplist, this.value1)

                } else {
                    console.log(1);
                    this.list = this.list.sort(newval())
                    console.log(this.list);
                    this.page = 1
                    this.shoplist = this.list.slice((this.page - 1) * this.value1, this.page * this.value1)
                    this.$emit('getshoplist', this.shoplist, this.value1)

                }
            }

        }
    },
    created() {
        console.log(111);
        this.list = JSON.parse(JSON.stringify(this.lists))

    }

}
</script>

<style>
</style>