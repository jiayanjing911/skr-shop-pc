<template>
  <div>
     <shop-item v-for="(item, index) in shop.slice(0, 4)" :key="index" :shop="item" :pshow="true"
            height="300px" width="250px"></shop-item>
  </div>
</template>

<script>

export default {
    name: "ShopListtab",
    props: {
        shop: Array,
    },
    data() {
        return {};
    },
    methods:{
        
    }

}
</script>

<style>

</style>