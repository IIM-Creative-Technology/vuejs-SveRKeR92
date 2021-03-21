<template>
      <table>
            <div v-for="post in posts" v-bind:key="post">
                  <thead>
                        <tr>
                              <th colspan="2"></th>
                        </tr>
                  </thead>
                  <tbody>
                        <router-link :to="post.title">
                              <tr>
                                    
                                    <!-- <td>{{ post.metaTitle }}</td>
                                    <td>{{ post.metaDescription }}</td> -->
                                    <td><img :src="post.imageUrl" alt="Image"></td>
                                    <td> Title: <strong> {{ post.title }} </strong> <br> <br> {{ post.content }}</td>
                              </tr>
                        </router-link>
                  </tbody>
            </div>

      </table>
</template>

<script>
import { mapState } from "vuex";
export default {
      name: "List",
      computed:{
            ...mapState(["posts"]),
      },
      props:[
            "posts",
      ]

}
</script>

<style scoped>
img{
      width: 150px;
      height: 150px;
      object-fit: cover;
}

tr{
      display: flex;
      align-items: center;
}
</style>