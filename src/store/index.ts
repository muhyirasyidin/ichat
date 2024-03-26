import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import SecureLS from 'secure-ls';
import createMutationsSharer from 'vuex-shared-mutations';

/**
 * @Modules
 */
import auth from '@/store/modules/Auth';

const ls = new SecureLS({ encodingType: 'aes' });

const vuexLocal = new VuexPersistence({
  restoreState: (key) => ls.get(key),
  saveState: (key, state) => ls.set(key, state),
  reducer: (state: any) => ({
    auth: {
      isAuthenticated: state.auth.isAuthenticated,
    },
  }),
});

export default createStore({
  modules: {
    auth,
  },
  plugins: [
    vuexLocal.plugin,
    createMutationsSharer({
      predicate: [],
    }),
  ],
});
