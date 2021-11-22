import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      { id: 1, author: "Charlotte Bronte", title: "Jane Eyre", body: "lbalbalbalabla", likes: 20 },
      { id: 2, author: "Charlotte Bronte", title: "Jane Eyre", body: "lbalbalbalabla", likes: 20 },
      { id: 3, author: "Charlotte Bronte", title: "Jane Eyre", body: "lbalbalbalabla", likes: 20 },
      { id: 4, author: "Charlotte Bronte", title: "Jane Eyre", body: "lbalbalbalabla", likes: 20 },
    ]
  },
});
