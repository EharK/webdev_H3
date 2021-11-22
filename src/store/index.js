import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      { id: 1, author: "Charlotte Bronte", title: "Olen poes", body: "Karu", likes: 0 },
      { id: 2, author: "Karl", title: "Mina õues", body: "Tuvi", likes: 0 },
      { id: 3, author: "Saime", title: "Mina toas", body: "Ostsin uue taime", likes: 0 },
      { id: 4, author: "Joosep", title: "Käisin valimas", body: "Ekre maha!!!", likes: 0 },
      { id: 5, author: "Gusti", title: "Kesklinn suht tühi", body: "Keegi subwaysse?", likes: 0 },
      { id: 6, author: "Ropz", title: "Uus jope :)", body: "Raha on odav!", likes: 0 },
      { id: 7, author: "Riho", title: "Felt cute", body: "Mulle meeldivad lilled", likes: 0 },
      { id: 8, author: "Andrus", title: "Igav!!!!", body: "Soovitage häid laule", likes: 0 },
      { id: 9, author: "CPeeter", title: "Ained!!!", body: "Mulle meeldib keemia", likes: 0 },
      { id: 10, author: "Gustav", title: "Uus maja", body: "M-A-J-A", likes: 0 },
    ]
  },
  mutations: {
    likeIncrease: state => {
      state.posts.forEach(post => { post.likes += 1 })
    },
    resetlikes:state => {
      state.posts.forEach(post => { post.likes = 0 })
    }

  },
  actions: {
    likeIncreaseAct: act => {
      setTimeout(function () {
        act.commit("likeIncrease")
      }
        , 1000)
    },
    resetLikesAct: act =>{
      setTimeout(function () {
        act.commit("resetlikes")
      }
        , 1000)
    }

    }
    

    


  }
);
