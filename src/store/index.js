import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  mutations: {
    ADD_POST(state, data){
      let new_post = {
        'title' : data.title,
        'metaTitle' : data.metaTitle,
        'metaDescription' : data.metaDescription,
        'imageUrl' : data.imageUrl,
        'content' : data.content
      }
      state.posts.push(new_post);
    },
    EDIT_POST(state, newData){
      state.posts[newData.index]['metaTitle'] = newData.metaTitle;
      state.posts[newData.index]['metaDescription'] = newData.metaDescription;
      state.posts[newData.index]['imageUrl'] = newData.imageUrl;
      state.posts[newData.index]['content'] = newData.content;
      alert('Le post a été modifier !');
    },
    DELETE_POST(state, index){
      state.posts.splice(index, 1);
    }
  },
  actions: {
    addPost(context, data){
      context.commit('ADD_POST', data)
    },
    editPost(context, data){
      context.commit('EDIT_POST', data)
    },
    deletePost(context, data){
      context.commit('DELETE_POST', data)
    },
  },
  modules: {
  }
})
