import { createStore } from 'vuex'

export default createStore({
  state: {
    isShow: false,
    cities: [
    {
      city_id: "moscow",
      name: "Москва",
      text: "Заказать в Москву"
    },
    {
      city_id: "st_peterburg",
      name: "Санкт-Петербург",
      text: "Заказать в Санкт-Петербург"
    }
  ]
  },
  getters: {
  },
  mutations: {
    changeShow(state, payload) {
      state.isShow = payload.payload;
    },
  },
  actions: {
    sendUser(state, payload) {
      console.log("in dispatch", payload.payload)
    }
  },
  modules: {
  }
})
