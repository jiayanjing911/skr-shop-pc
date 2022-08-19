import request from '@/utils/rquest.js'

/* 获取一级分类标题 */
export function getParentName(){
    return request({
        url:'/type/getParentName',
        method:'post',
    })
}
/* 获取二级分类标题 */
export function getSecond(parent_name){
    return request({
        url:'/wares/getSecond',
        method:'post',
       data:{
        parent_name
       }
    })
}
