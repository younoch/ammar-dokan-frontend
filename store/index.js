import axios from 'axios';
import Cookie from 'js-cookie'

export const state = () => ({
  currentToken: null
});

export const getters = {
  isAuthenticated(state) {
    if (process.client) {
      return state.currentToken != null;
    }
  }
}

export const mutations = {
  CURRENT_TOKEN(state, payload) {
    const value = payload;
    state.currentToken = value;
    localStorage.setItem('token', value);
    localStorage.setItem('tokenExpireTime', new Date().getTime() + 5 * 60 * 1000);

    Cookie.set('tokenCookie', value);
    Cookie.set('tokenCookieExpiretion', new Date().getTime() + 5 * 60 * 1000);
  },
  CLEAR_TOKEN(state) {
    state.currentToken = null;
    this.$router.push("/")
  },
};

export const actions = {
  CURRENT_TOKEN(context) {
    context.commit('CURRENT_TOKEN')
  },

  SET_LOGOUT_TIMER(context, duration) {
    setTimeout(() => {
      context.commit('CLEAR_TOKEN');
    }, duration)
  },
  INIT_AUTH(context, isServer) {
    if (isServer) {
      
    } else {
      const token = localStorage.getItem('token');
      const tokenExpireTime = localStorage.getItem('tokenExpireTime');
      const newDate = new Date().getTime()
      console.log("diifrence = ", tokenExpireTime - newDate)
      if (newDate > tokenExpireTime && !token) {
        return;
      }
    }
    context.commit('CURRENT_TOKEN', token);
    context.dispatch("SET_LOGOUT_TIMER", tokenExpireTime - new Date().getTime())
    console.log('my token', token)
  }
};

