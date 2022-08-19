import { setToken, getToken } from '@/utils/localstlroage.js';
import { getlogin } from '@/api/login.js';

const getDefaultState = () => {
  return {
    token: getToken('token') || '',
    username: getToken('username') || '',
    password: getToken('password') || '',
    id: getToken('id') || 0,
  };
};
const state = getDefaultState();

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;

  },
  SET_USERNAME: (state, username) => {
    state.username = username;
  },
  SET_PASSWORDER: (state, password) => {
    state.password = password;
  },
  SET_ID: (state, id) => {
    state.id = id;
  }
};

const actions = {
  login({ commit }, userinfo) {
    let { username, password } = userinfo
    return new Promise((resolve, reject) => {
      getlogin({ username, password }).then(data => {
        console.log(data,'登录成狗');
        commit('SET_TOKEN', data.data.token);
        /*  commit('SET_TOKEN', data.data.userInfo); */
        commit('SET_ID', data.data.userInfo.id);

        setToken('token', data.data.token);
        setToken('id', data.data.userInfo.id);
        if (userinfo.iconshow) {
          commit('SET_PASSWORDER', userinfo.password);
          commit('SET_USERNAME', userinfo.username);

          setToken('username', userinfo.username);
          setToken('password', userinfo.password);

        } else {

          commit('SET_PASSWORDER', '');
          commit('SET_USERNAME', '');

          setToken('username', '');
          setToken('password', '');
        }
        resolve();
      });
    });
  },
  register({ commit }) {
    commit('SET_TOKEN', '');

  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
