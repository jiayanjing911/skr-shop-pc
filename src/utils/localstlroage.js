// 
/* export function get(key){
    return localStorage.getItem(key)
}
export function set(key,val){
    return localStorage.setItem(key,val)
}
export function remove(key){
    return localStorage.removeItem(key)
}
export function clear(){
    localStorage.clear()
} */

import Cookies from 'js-cookie'

export function getToken(key) {
  return Cookies.get(key)
}

export function setToken(key, val) {
  return Cookies.set(key, val)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}