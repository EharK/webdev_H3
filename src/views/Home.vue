<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>POSTS</h1>
    <posts></posts>
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
};
</script>

