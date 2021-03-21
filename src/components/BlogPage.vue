<template>
<div>
      <h1>{{posts[index]["title"]}}</h1>
      <br>
      <br>
      <img :src="posts[index]['imageUrl']" alt="Image">
      <br>
      <br>
      <p> {{posts[index]["content"]}} </p>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
      props: ["post"],
      data(){
            return{
                  index: this.$route.query.index
            }
      },
      computed:{
            ...mapState(["posts"]),
      }
}
</script>

<style scoped>
      h1{
            text-transform: uppercase;
      }

      p{
            font-size: 24px;
      }

      img{
            width: 500px;
            height: auto;
      }
</style>