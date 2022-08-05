import { createStore } from 'vuex'
import axios from 'axios';
const URL = 'http://hh.autodrive-agency.ru/test-tasks/front/task-7/';

export default createStore({
  state: {
    isShow: false,
    cities: [
    {
      city_id: 1,
      name: "Москва",
      text: "Заказать в Москву"
    },
    {
      city_id: 2,
      name: "Санкт-Петербург",
      text: "Заказать в Санкт-Петербург"
    }
  ]
  },
  getters: {
  },
  mutations: {
    changeVisibilityDialog(state, payload) {
      state.isShow = payload.payload;
    },
  },
  actions: {
    async submitUser(state, payload) {
      console.log("in dispatch", payload.payload);
      const result = await axios({
        method: 'post',
        url: `${URL}`,
        data: payload.payload
      });
      console.log(await result.data);
    }
  },
  modules: {
  }
})
