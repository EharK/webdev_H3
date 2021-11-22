<template>
  <div id="posts">
    <ul>
      <li class="item" v-for="post in posts" :key="post.id">
          <div class="post">
              <span class="post-header">
                <h3 class="title">{{ post.title }}</h3>
                <p class="author">{{ post.author }}</p>
              </span>
              <p class="body">{{ post.body }}</p>
              <span  class="post-header">
                <img  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-Eu8UrGUJk30%2FVtz12biVykI%2FAAAAAAAALpw%2FF6fLIVaKwe0%2Fs1600%2Flike.png&f=1&nofb=1" height="40px" v-on:click="likeIncrease">
                <p class="likes">likes: {{ post.likes }}</p>
              </span> 
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "posts_component",
  data: function () {
    return {};
  },
  computed: {
      posts() {
          return this.$store.state.posts
      }
  },
  methods:{
    likeIncrease: function() {
      this.$store.dispatch("likeIncreaseAct")
      }
    }
};
</script>

<style scoped>
#posts {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

ul {
    list-style: none;
    width: 30%;
    padding-right: 50px;
}

li {
    padding: 20px;
}

.post {
    background-color: rgb(230, 230, 230);
    border-radius: 30px;
}

.post-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(196, 196, 196);
    border-radius: 20px 20px 20px 20px;
}

p {
    padding: 10px;
}

.title {
    padding-left: 20px;
}

.likes {
    color: rgb(20, 94, 255);
    text-align: end;
}
</style>

