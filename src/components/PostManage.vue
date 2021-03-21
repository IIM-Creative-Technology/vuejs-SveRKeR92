<style>
    .post{
        margin: 0px 100px;
        border: 2px solid black;
        margin-top: 15px;
        width: 500px;
    }
    .container{
        margin: auto;
        display: flex;
        justify-content: left;
        align-items: center;
        height: 120px;
        width: 450px;
    }
    .container img{
        width: 150px;
        height: auto;
    }
    .container p{
        margin: 0px 10px;
        width: 580px;
    }
    .admin-container{
        display: flex;
        justify-content: space-evenly;
        height: 60px;
        margin: 0px 30px;
    }
    .admin-container div{
        margin: 0px 30px;
    }
    .btn {
        color: #000000;
        cursor: pointer;
        font-size:16px;
        font-weight: 400;
        line-height: 45px;
        margin: 0 0 2em;
        max-width: 160px; 
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        width: 100%; 
        padding: 5px;
    }
    .btn:hover { text-decoration: none; }

    .btn-5{
        border: 0 solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
        outline: 1px solid;
        outline-color: rgba(0, 0, 0, 0.5);
        outline-offset: 0px;
        text-shadow: none;
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    .btn-5:hover{
        border: 1px solid;
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
    }

	.flex{
		width: 1500px;
		display: flex;
		align-items: center;
		margin: auto;
	}


    @media(min-width: 600px) {
        .btn{
        margin: 0 1em 2em;
        }
        
    }
</style>
<template>
	<div class="flex">
		<div>
			<div class="post" v-for="(post, index) in posts" v-bind:key="post" >
				<h2>{{post.title}}</h2>
				<div class="container">
					<img :src="post.imageUrl" alt="lorem picsum">
					<p>{{post.content}}</p>
				</div>
				<div class="admin-container">
					<div>
					<router-link :to="{path: '/admin/edit' , query: {index: index}}" class="btn btn-5">Editer</router-link>
					</div>
					<div>
					<button v-on:click="deletePost(index)" class="btn btn-5">Supprimer</button>
					</div>
				</div>
			</div>
		</div>
		<router-view @editPost="editPost" :v-if="{path: '/admin/edit' , query: {index: index}}"></router-view>

	</div>

</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
      name: "List",
      methods:{
        ...mapActions(["deletePost", "editPost"])
      },
      computed:{
        ...mapState(["posts"]),
      },
      props:[
            "posts",
      ],

}
</script>