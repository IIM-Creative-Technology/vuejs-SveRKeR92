<template>
  <div class="admin">
    <h1>This is an admin page</h1>
    <router-link to="/create">Créer un Post</router-link>
    <post-manage :posts="posts"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import PostManage from '../components/PostManage.vue';

export default {
  name: "admin",
    components: { PostManage },
    methods:{
      ...mapActions(['addpost', 'editPost', 'deletePost'])
    },
    computed: {
      ...mapState(["posts"]),
    },
}
</script>
