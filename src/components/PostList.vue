<style scoped>
.post {
    margin: auto;
    border: 2px solid black;
    margin-top: 15px;
    width: 950px;
}
.container {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 900px;
}
.container img {
    width: 350px;
    height: 231px;
    object-fit: cover;
}
.container p {
    margin: 0px 10px;
    width: 580px;
}
</style>

<template>
    <div>
        <div class="post" v-for="(post, index) in posts" v-bind:key="post">
            <router-link :to="{path: '/blog/' + post.title, query: {index: index}}" >
                <h2>{{ post.title }}</h2>
                <div class="container">
                    <img :src="post.imageUrl" alt="lorem picsum" />
                    <p>{{ post.content }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "List",
    computed: {
        ...mapState(["posts"]),
    },
    props: ["posts"],
};
</script>
