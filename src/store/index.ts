import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import SecureLS from 'secure-ls';
import createMutationsSharer from 'vuex-shared-mutations';

/**
 * @Modules
 */
import auth from '@/store/modules/Auth';
import config from '@/store/modules/Config';
import message from '@/store/modules/Message';

const ls = new SecureLS({ encodingType: 'aes' });

const vuexLocal = new VuexPersistence({
  restoreState: (key) => ls.get(key),
  saveState: (key, state) => ls.set(key, state),
  reducer: (state: any) => ({
    auth: {
      isAuthenticated: state.auth.isAuthenticated,
    },
    config: {
      sidebar: state.config.sidebar,
    },
  }),
});

export default createStore({
  modules: {
    auth,
    config,
    message,
  },
  plugins: [
    vuexLocal.plugin,
    createMutationsSharer({
      predicate: [],
    }),
  ],
});
