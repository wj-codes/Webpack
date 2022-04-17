import {createStore} from 'vuex';
const SET_NUM = "SET_NUM"
const store = {
    state:{
        num:123
    },
    mutations:{
        [SET_NUM](state,data){
            state.num = data
        }
    },
    actions:{
        setNum({commit},data){
            commit(SET_NUM,data)
        }
    },
    getters:{
        getNum:state=>state.num
    },
    modules:{}
};
export default createStore(store);