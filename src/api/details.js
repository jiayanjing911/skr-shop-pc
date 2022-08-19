import request from '@/utils/rquest.js'
/* 获取商品详情 */
export function getdetailspu(spu_id){
    return request({
        url:'/store/getSku',
        method:'post',
        data:{
            spu_id
        }
    })
}
/* 商品添加到购物车 */
export function addShopCar(data){
    return request ({
        url:"/shopcar/addShopCar",
        method:'post',
        data:{
            ...data
        }
    })
}