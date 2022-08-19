const getters={
    token:state=>state.user.token,
    username:state=>state.user.username,
    password:state=>state.user.password,
    total:state=>state.search.total,
    id:state=>state.user.id,
}
export default getters
