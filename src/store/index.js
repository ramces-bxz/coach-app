import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: 'c6',
      dbUrl: 'https://coach-app-597ab-default-rtdb.firebaseio.com',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    databaseUrl(state) {
      return state.dbUrl;
    },
  },
});
export default store;
