const getseartotal=()=>{
    return{
        total:''
    }
}
const state=getseartotal()

console.log(state)

const mutations={
    SET_TOTAL:(state,total)=>{
        state.total=total
    }
}

const actions={
    total({commit},total){
        commit('SET_TOTAL',total)
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions,
}