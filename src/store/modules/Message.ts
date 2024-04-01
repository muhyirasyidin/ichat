/**
 * @Interface
 */
import { Message } from '@/interfaces/Message';

export default {
  namespaced: true,
  state: {
    open: false,
    detail: false,
    pickedUp: false,
  },
  mutations: {
    setOpen(state: Message, value: boolean) {
      state.open = value;
    },
    setDetail(state: Message, value: boolean) {
      state.detail = value;
    },
    setPickedUp(state: Message, value: boolean) {
      state.pickedUp = value;
    },
  },
  actions: {},
  getters: {
    getOpen(state: Message) {
      return state.open;
    },
    getDetail(state: Message) {
      return state.detail;
    },
    getPickedUp(state: Message) {
      return state.pickedUp;
    },
  },
};
