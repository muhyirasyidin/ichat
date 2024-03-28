/**
 * @Interface
 */
import { Message } from '@/interfaces/Message';

export default {
  namespaced: true,
  state: {
    open: false,
  },
  mutations: {
    setOpen(state: Message, value: boolean) {
      state.open = value;
    },
  },
  actions: {},
  getters: {
    getOpen(state: Message) {
      return state.open;
    },
  },
};
