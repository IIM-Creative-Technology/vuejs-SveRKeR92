<template>
      <CreatePostForm @newPost ="addPost"/>
</template>

<script>
import CreatePostForm from '@/components/CreatePostForm.vue'
import { mapActions } from 'vuex'
export default {
      components:{
            CreatePostForm
      },
      methods: {
            ...mapActions(["addPost"])
      },
}
</script>