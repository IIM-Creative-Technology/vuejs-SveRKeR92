<style>

form{
    display: flex;
    flex-direction: column;
    width: 500px;
}

</style>

<template>
    <form>
        <input type="text" v-model="metaTitle" placeholder="Meta Title" />
        <input type="text" v-model="metaDescription" placeholder="Meta Description"/>
        <input type="text" v-model="imageUrl" placeholder="Image url" />
        <input type="text" v-model="content" placeholder="Contenu" />
        <button @click="editPost">Enregistrer le Post</button>
        <h3>{{ this.$route.query.index }}</h3>
    </form>

</template>

<script>
import { mapState } from "vuex";

export default {
    data(){
        return{
            metaTitle: "",
            metaDescription: "",
            imageUrl: "",
            content: "",
            index: this.$route.query.index,
        }
    },
      name: "List",
      computed:{
        ...mapState(["posts"]),
        // title: this.posts[index]["title"],
        // metaTitle: this.posts[index]["metaTitle"],
        // metaDescription: this.posts[index]["metaDescription"],
        // imageUrl: this.posts[index]["imageUrl"],
        // content: this.posts[index]["content"],
      },
      methods:{
        editPost(){
            if (
                this.title != "" &&
                this.metaTitle != "" &&
                this.metaDescription != "" &&
                this.content != ""
            ) {
                if (this.imageUrl == ""){
                    this.imageUrl = 'https://cdn.pixabay.com/photo/2016/01/25/00/17/red-panda-1159873__340.jpg'
                }
                  let post = {
                        index: this.$route.query.index,
                        title: this.title,
                        metaTitle : this.metaTitle,
                        metaDescription : this.metaDescription,
                        imageUrl : this.imageUrl,
                        content: this.content,
                  }
                  this.$emit('editPost', post);
            }else{
                alert('Certains champs sont vides');
            }
        }
      },
      props:[
            "posts",
      ],

}
</script>
