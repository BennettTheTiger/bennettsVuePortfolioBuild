<template>
    <div>
        <h1>Work</h1>
        <hr/>
        <div v-for="(prj, index) in projects">
            <project :project=prj :key="index"/>
        </div>
    </div>
</template>
<script>
import project from './Project.vue'
import allProjects from '../projects.json'

//console.dir(allProjects);
export default {
  name: 'Work',
  data(){
      return{
          projects: allProjects
      }
  },
  components:{
      project
  }
}
</script>

<style scoped>
 h1{
     text-align: center;
     font-family: 'Open Sans', sans-serif;
     color: #333;
 }

  hr{
    position: relative;
        width: 80%;
        border: 2px solid orangered; 
        margin-left: 0px;
        left:10%;
        margin-bottom: 40px; 
 }
</style>
