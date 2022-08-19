import request from '@/utils/rquest.js'

/* 购物车列表 */
export function getShopCar(date){
    return request({
        url:'/user/getShopCar',
        method:'post',
        data:{
            ...date
        }
    })
}
