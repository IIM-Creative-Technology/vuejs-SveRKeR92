<template>
    <div class="home">
        <h2>Nombre de posts : {{ posts.length }}</h2>
        <post-list :posts="posts"/>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import PostList from '../components/PostList.vue';

export default {
  components: { PostList },
    name: "Home",
    methods:{
        ...mapActions(['addpost', 'editPost', 'deletePost'])
    },
    computed: {
        ...mapState(["posts"]),
    },
    
};
</script>
