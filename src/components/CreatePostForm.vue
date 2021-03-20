<template>
    <form>
        <input type="text" v-model="title" placeholder="Titre du Post" />
        <input type="text" v-model="metaTitle" placeholder="Meta Title" />
        <input
            type="text"
            v-model="metaDescription"
            placeholder="Meta Description"
        />
        <input type="text" v-model="imageUrl" placeholder="Image url" />
        <input type="text" v-model="content" placeholder="Contenu" />
        <button @click="submitPost">Enregistrer le Post</button>
    </form>
</template>

<script>
export default {
    name: "createPost",
    data() {
        return {
            title: "",
            metaTitle: "",
            metaDescription: "",
            imageUrl: "",
            content: "",
        };
    },
    methods: {
        submitPost() {
            if (
                this.title != "" &&
                this.metaTitle != "" &&
                this.metaDescription != "" &&
                this.imageUrl != "" &&
                this.content != ""
            ) {
                  let post = {
                        title: this.title,
                        metaTitle : this.metaTitle,
                        metaDescription : this.metaDescription,
                        imageUrl : this.imageUrl,
                        content: this.content
                  }
                  this.$emit('newPost', post);
            }
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

form * {
    font-size: 20px;
}

input {
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid grey;
    border-radius: 5px;
}

button {
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: rgb(18, 191, 235);
    color: white;
    padding: 20px 15px;
}
</style>