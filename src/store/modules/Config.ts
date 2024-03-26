/**
 * @Interface
 */
import { Config } from './../../interfaces/Config';

export default {
  namespaced: true,
  state: {
    sidebar: true,
  },
  mutations: {
    setSidebar(state: Config, value: boolean) {
      state.sidebar = value;
    },
  },
  actions: {},
  getters: {
    getSidebar(state: Config) {
      return state.sidebar;
    },
  },
};
