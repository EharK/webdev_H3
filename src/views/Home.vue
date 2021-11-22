<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>POSTS</h1>
    <posts></posts>
    <button v-on:click="resetLikes">RESET</button>


  </div>
</template>


<script>
import posts from "@/components/posts_component.vue";
export default {
  name: "Posts",
  components: { posts },
  props: ["posts"],
  data() {
    return {
    };
  },
  methods:{
    resetLikes: function() {
      this.$store.dispatch("resetLikesAct")
      }
    }
  }
;
</script>

