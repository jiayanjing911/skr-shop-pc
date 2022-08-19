import request from "@/utils/rquest.js";

export function getUserOrder(data) {
    return request({
        url: "/order/getUserOrder",
        method: "post",
        data,
    })
}

export function getOrderDetail(data) {
    return request({
        url:"/order/getOrderDetail",
        method:"post",
        data,
    })
}

export function payOrder(data) {
    return request({
        url:"/order/payOrder",
        method:"post",
        data,
    })
}

export function deleteOrder(data) {
   return request({
    url:"/order/deleteOrder",
    method:"post",
    data,
   })
}