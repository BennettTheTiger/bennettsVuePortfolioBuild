<template>
    <div class="container-fluid">
        <img :src=thumb>
        <h1 >{{title}}</h1>
        <h4>{{subTitle}}</h4>
        <hr/>
        <p>{{details}}</p>
    <div class="detailLinks"> 
        <a v-show="youTube != null" :href=youTube target="new"><i class="fab fa-youtube-square"></i></a>
        <a v-show="gitHub != null" :href=gitHub target="new"><i class="fab fa-github-square"></i></a>
        <a v-show="link != null" :href=link target="new"><i class="fas fa-external-link-square-alt"></i></a>
    </div>
        <a id="back" @click="goHome()">Back to Work</a>
        
    </div>
</template>

<script>
export default {
  name: 'Detail',
  props:['prj'],
  data: function(){
      return{
          title: 'Unknown',
          thumb: '',
          subTitle: '',
          gitHub: null,
          youTube: null,
          link: null,
          details: "No details right now. Select a project to learn more"
      }
      
  },
  methods:{
          goHome(){
              this.$router.push('/work');
          }
      },
    mounted() {
        //setup data
        //console.dir(this.$route.params);
        const project = this.$route.params;
        this.title = project.title;
        this.thumb = project.thumb
        this.subTitle = project.subTitle;
        this.details = project.about;
        this.youTube = project.youTube;
        this.link = project.link;
        this.gitHub = project.github;
    },
}
</script>

<style scoped>
h1{
    
    font-family: 'Open Sans', sans-serif;
    color: #333;
    font-size: 2em;
    margin-top: 20px;
}

hr{
    position: relative;
        width: 50px;
        border: 2px solid orangered; 
        margin-left: 0px;
 }

h4{
    font-family: 'Merriweather', serif;
    font-style: italic;
    font-size: 1em;
}

p{
    font-family: 'Merriweather', serif;
    font-size: .8em;
}

a{
    text-align: center;
    color: #333;
    transition: .25s ease-in-out;
    font-family: 'Open Sans', sans-serif;
}

.detailLinks{
    width: 100%;
    text-align: center;
}

i{
    font-size: 2em;
    margin: 20px;
}

a:hover{
    color: orangered;
}

img{
    width: 100%;
    filter: saturate(0);
    object-fit: cover;
}

#back{
    position: absolute;
    width: 100%;
    text-align: center;
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 768px){
  img{
    width: 50%;
    left:25%;
    position: relative;
}  
} 

</style>

