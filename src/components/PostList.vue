<template>
      <table>
            <div v-for="post in posts" v-bind:key="post">
                  <thead>
                        <tr>
                              <th colspan="2">{{ post.title }}</th>
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              <!-- <td>{{ post.metaTitle }}</td>
                              <td>{{ post.metaDescription }}</td> -->
                              <td>{{ post.imageUrl }}</td>
                              <td>{{ post.content }}</td>
                        </tr>
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