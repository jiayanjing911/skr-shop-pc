import request from '@/utils/rquest.js'

/* 用户登录 */
export function getlogin(date){
    return request({
        url:'/user/login',
        method:'post',
        data:{
            ...date
        }
    })
}
export function Changepassword(data){
     return request({
         url:'/user/changePassword',
         method:'post',
         data:{
        ...data
         }
     })
}
 