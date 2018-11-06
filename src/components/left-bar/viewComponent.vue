<template>
  <div class="divPrincipal" :style="{'background':(config.color_principal!='')?config.color_principal:'white'}">
    <div class="divPerfil">
      <img class="imgPerfil" src="../../assets/perfil.jpg">
    </div>
    <contact :object="personalInfo" :title="'Contacto'"></contact>
    <rating :array="languages" :title="'Lenguajes'"></rating>
    <rating :array="frameworks" :title="'Frameworks'"></rating>
    <rating :array="idiomas" :title="'Idiomas'"></rating>
    <rating :array="competencias" :title="'Competencias'"></rating>
  </div>
</template>
<script>
import FileInfo from "../../files/informacion.js"
import Rating from "../rating/viewComponent.vue"
import Contact from "../contact/viewComponent.vue"
export default {
  components:{
    Rating,
    Contact
  },
  data(){
    return{
    }
  },
  computed:{
    personalInfo(){
      return FileInfo.info.personalInfo;
    },
    languages(){
      return FileInfo.info.languages;
    },
    frameworks(){
      return FileInfo.info.frameworks;
    },
    idiomas(){
      return FileInfo.info.idiomas;
    },
    competencias(){
      return FileInfo.info.competencias;
    },
    config(){
      return FileInfo.config;
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>

.titleH5{
  font-size: 18px;
  margin: 10px 0 10px 0;
  color:rgb(198, 40, 40);
}

.icon{
  font-size: inherit;
  vertical-align: middle;
}
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
.divInfo{
  display: table;
  width: 100%;
}

.puntero{
  cursor: pointer;
}
.divPrincipal{
  grid-area: menu;
  min-width: 120px;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
  -moz-box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
  box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
}
.divPerfil{
  height: auto;
  margin: 0 auto;
  margin-top:10px
}
@media screen and (min-width: 700px) {
  .imgPerfil{
    height: 200px;
    width: 200px;
  }
}
@media screen and (max-width: 699px) {
  .imgPerfil{
   height: 100%;
   width: 100%;
   max-width: 250px;
   max-height: 250px;
  }
}
</style>
