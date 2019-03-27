<template id="template">
    <div class="container">
        
        <img id="prjThumb" :src=project.thumb />
        <hr/>
        <h2 id="title">{{project.title}}</h2>
        <h5 id="subTitle">{{project.subTitle}}</h5>
        <button @click="showDetails">Learn More</button>
    </div>
</template>
<script>
export default {
  name: 'project',
  props:["project"],
  data: function(){
      return{
          url: ""
      }
  },
  methods:{
      showDetails: function(){
          //console.dir(this.$props.project);
          // hit this named route and pass along the project details
            this.$router.push({ name: 'details', params: this.$props.project })
      }
  },
  mounted() {
      //console.dir(this.$props.project);
     
  }
}
</script>

<style scoped>
 hr{
    position: relative;
        width: 50px;
        border: 2px solid orangered; 
        margin-left: 0px;
 }

 #title{
     font-family: 'Open Sans', sans-serif;
     margin: 0px;
     color: #333;
 }

 #subTitle{
    font-family: 'Merriweather', serif; 
    color: #333;
    margin-top: 0px;
    font-style: italic;
 }

 button{
     margin: 0px;
     position: relative;
     font-family: 'Open Sans', sans-serif;
     background-color: #545454;
     color: #fff;
     transition: .25s ease-in-out;
     border: none;
     text-align: center;
     top: 0px;
     font-size: .8em;
 }

 button:hover{
     background-color: #333;
     color: orangered;
     
 }

 img{
     position: relative;
     filter: saturate(0);
     background-position: center center;
     width: 100%;
     height: 300px;
     object-fit: cover;
 }

 .imgFrame{
     width: 98%;
     background-color: blue;
     height: 300px;
     position: relative;
     
 }

 .container{
    width: 50%;
    padding-bottom: 40px;
    position: relative;
    float: left;
 }

 #template{
    display: grid;
  grid-template-columns: auto auto;
  background-color: #2196F3;
  padding: 10px;
 }

 @media only screen and (max-width: 600px) {
    .container{
       width: 100%;
    }
    img{
        width: 100%;
    }
}
</style>

