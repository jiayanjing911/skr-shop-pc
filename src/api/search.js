import request from '@/utils/rquest.js'
/* 根据一级分类获取商品成功 */

/* 根据二级分类获取商品成功 */
export function getSearch(name){
    return request({
        url:'/wares/getSpu',
        method:'post',
        data:{
            name
        }
    })
}