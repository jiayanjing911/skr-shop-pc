import { getShopCar } from "@/api/shopcar";

export default (await import('vue')).defineComponent({
    name: "ShopCar",
    data() {
        return {
            shopcarlist: [
                {
                    id: 1,
                    title: "安踏女服星标系列国旗中袖半袖短T恤短t",
                    spu_id: 3,
                    param: ["纯净白", "s"],
                    num: 1,
                    img: "https://img.fishfay.com/shopgoods/4/162030502/162030502-2-1.jpg",
                    price: 299.0,
                    special_price: 449.0,
                },
                {
                    id: 1,
                    title: "安踏女服星标系列国旗中袖半袖短T恤短t",
                    spu_id: 3,
                    param: ["纯净白", "s"],
                    num: 5000000000000,
                    img: "https://img.fishfay.com/shopgoods/4/162030502/162030502-2-1.jpg",
                    price: 299.0,
                    special_price: 449.0,
                },
                {
                    id: 1,
                    title: "安踏女服星标系列国旗中袖半袖短T恤短t",
                    spu_id: 3,
                    param: ["纯净白", "s"],
                    num: 1,
                    img: "https://img.fishfay.com/shopgoods/4/162030502/162030502-2-1.jpg",
                    price: 299.0,
                    special_price: 449.0,
                },
            ],
        };
    },
    methods: {
        getShopCar() {
            let { token, username } = this.$store.state.user;
            getShopCar({ token, username }).then(data => {
                this.shopcarlist = data;
            });
        },

        // 减少商品数量
        reduce() {
        },
        // 增加商品数量 
        add() {
        }
    },
    created() {
        this.getShopCar();
    }
});
