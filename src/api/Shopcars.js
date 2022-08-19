import request from '@/utils/rquest.js'

export function getshopcar(data){
    return request({
        url:"/shopcar/getShopCar",
        method:'post',
        data,
    })
}