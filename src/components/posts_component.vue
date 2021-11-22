<template>
  <div id="posts">
    <ul>
      <li class="item" v-for="post in posts" :key="post.id">
        <span class="author"> {{ post.author }} </span>
        <span class="title"> {{ post.title }} </span>
        <span class="body"> {{ post.body }} </span>
        <span class="likes"> {{ post.likes }} </span>
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
  }
};
</script>

