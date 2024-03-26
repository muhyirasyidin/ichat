/**
 * @Interface
 */
import { Auth } from '@/interfaces/Auth';

export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
  },
  mutations: {
    setAuthentication(state: Auth, value: boolean) {
      state.isAuthenticated = value;
    },
  },
  actions: {},
  getters: {
    getAuthenticated(state: Auth) {
      return state.isAuthenticated;
    },
  },
};
