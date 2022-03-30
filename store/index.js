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

    Cookie.set('jwt', value);
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
  INIT_AUTH(context, req) {
    let token, tokenExpireTime;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split('=')[1];
      tokenExpireTime = req.headers.cookie.split(';').find(c => c.trim().startsWith('tokenCookieExpiretion=')).split("=")[1];

    } else {
      token = localStorage.getItem('token');
      tokenExpireTime = localStorage.getItem('tokenExpireTime');
      const newDate = new Date().getTime()
      if (newDate > tokenExpireTime && !token) {
        context.dispatch('LOGOUT');
        return;
      }
    }
    context.commit('CURRENT_TOKEN', token);
    context.dispatch("SET_LOGOUT_TIMER", tokenExpireTime - new Date().getTime())
  },
  LOGOUT(context) {
    context.commit('CLEAR_TOKEN');
    Cookie.remove('jwt');
    Cookie.remove('tokenCookieExpiretion');
    if (process.client) {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpireTime');
    }

  }
};

