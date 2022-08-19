import request from '@/utils/rquest.js'

/* 一级分类商品展示 */
export function getproduct(parent_name){
    return request({
        url:'/type/getproduct',
        method:'post',
        data:{
            parent_name
        }
    })
}