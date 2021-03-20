<template>
    <div class="home">
        <h2>Nombre de posts : {{ posts.length }}</h2>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
    name: "Home",
    methods:{
        ...mapActions(['addpost', 'editPost', 'deletePost'])
    },
    computed: {
        ...mapState(["posts"]),
    },
};
</script>
