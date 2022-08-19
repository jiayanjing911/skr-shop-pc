import request from '@/utils/rquest.js'

export function getregister(data){
    return request({
        url:'/user/register',
        method:'post',
        data:{
            ...data
        }
    })
}