import axios from 'axios';

export const state = () => ({
  currentToken:""
});

export const getters = {
}

export const mutations = {
  CURRENT_TOKEN(state, payload) {
    state.currentToken = payload.value;
  }
};

export const actions = {
  CURRENT_TOKEN(context) {
    context.commit('CURRENT_TOKEN',token)
  },
};

