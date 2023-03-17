const state = {
    token: null,
};

const getters = {
    isSignedIn: state => !!state.token
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};