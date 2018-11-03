<template>
  <div class="divPrincipal">
    <div class="content">
      <h1 class="titleH1"><i class="material-icons icon">work</i> Experiencia</h1>
      <div v-for="(item) in infoExperience" :key="item.id">
        <experiencie-div :info="item"></experiencie-div>
      </div>
    </div>
    <div class="content">
      <h1 class="titleH1"><i class="material-icons icon">school</i> Educación</h1>
      <div v-for="(item) in infoEducation" :key="item.id">
        <experiencie-div :info="item"></experiencie-div>
      </div>
    </div>
  </div>
</template>
<script>
import ExperiencieDiv from "../experiencie-div/viewComponent.vue"
import FileInfo from "../../files/informacion.js"

export default {
  
  components:{
    ExperiencieDiv
  },
  data(){
    return{
    }
  },
  computed:{
    infoExperience(){
      return FileInfo.experience;
    },
    infoEducation(){
      return FileInfo.education;
    }
  },
  methods:{
    
  },
  created(){
  }
}
</script>

<style scoped>
p,h1,h2,h3{
  color: black;
}
.divPrincipal{
  grid-area: main;
  margin: 0;
  padding: 0!important;
}
.content{
  margin: 0;
  padding: 20px 0;
  margin-bottom: 10px;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
  -moz-box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
  box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
}
.icon{
  font-size: inherit;
  position: relative;
  top: 4px;
  margin: 0 14px;
}
.titleH1{
  font-weight: 700;
  font-size: 32px;
  text-align: left;
  margin:0;
}
</style>
