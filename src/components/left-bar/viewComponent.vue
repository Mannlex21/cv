<template>
  <div class="divPrincipal">
    <div class="divPerfil">
      <img class="imgPerfil" src="../../assets/perfil.jpg">
    </div>
    <div class="divInfoPersonal">
      <h1 class="titleH1">{{personalInfo.name}} <br> {{personalInfo.lastname}}</h1>
      <h2 class="career">{{personalInfo.career}}</h2>
      <p class="aboutMe">{{personalInfo.aboutMe}}</p>
    </div>
    <div  class="divInfo">
      <h3 class="titleH5 puntero" @click="mostrar('contact')">Contacto<i class="material-icons icon">{{(!contact)?'keyboard_arrow_down':'keyboard_arrow_up'}}</i></h3>
      <transition name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div class="inDivInfo" v-if="contact" >
          <div class="componentContact">
            <div class="divIcon"><i style="font-size:28px;" class="material-icons icon">phone</i></div>
            <div><h3 class="contactH3 link" @click="goToCall(personalInfo.email)">{{personalInfo.cellphone}}</h3></div>
          </div>
          <div class="componentContact">
            <div class="divIcon"><i style="font-size:28px;" class="material-icons icon">email</i></div>
            <div><h3 class="contactH3 link" @click="goToEmail(personalInfo.email)">{{personalInfo.email}}</h3></div>
          </div>
          <div class="componentContact">
            <div class="divIcon"><i style="font-size:28px;" class="material-icons icon">link</i></div>
            <div ><h3 class="contactH3 link" @click="goToUrl(personalInfo.linkedin_link)"><a _target="blank"  >{{personalInfo.linkedin}}</a></h3></div>
          </div>
          <div class="componentContact">
            <div class="divIcon"><i style="font-size:28px;" class="material-icons icon">location_on</i></div>
            <div><h3 class="contactH3 link" @click="goToMap(personalInfo.address)">{{personalInfo.address}}</h3></div>
          </div>
        </div>
      </transition>
    </div>
    <div  class="divInfo">
      <h3 class="titleH5 puntero" @click="mostrar('lenguajes')">Lenguajes<i class="material-icons icon">{{(!lenguajes)?'keyboard_arrow_down':'keyboard_arrow_up'}}</i></h3>
      <transition name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div class="inDivInfo" v-if="lenguajes" >
          <div class="componentLanguage">
            <div v-for="(item) in languages" :key="item.id">
              <h3 class="contactH3 language">{{item.language}} :</h3>
              <p class="star"><i class="material-icons icon">{{getRating(item.rating)}}</i></p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import FileInfo from "../../files/informacion.js"
export default {
  data(){
    return{
      contact:true,
      lenguajes:true
    }
  },
  computed:{
    personalInfo(){
      return FileInfo.personalInfo;
    },
    languages(){
      return FileInfo.languages;
    }
  },
  methods:{
    getRating(rating){
      var result = '';
      
      var valRating = this.round(rating);
      console.log(valRating-rating)
      if(valRating-rating>0){
        valRating = valRating-1
        result+='star_half '
      }
      for(var i=0;i<valRating;i++){
        result='star '+result
      }

      for(var i = valRating;i<5;i++){
        result+='star_border '
      }

      if(valRating>5){
        result = 'star star star star star ';
      }
      return result;
    },
    round(val){
      var r = 0
      if(val % 1  != 0){
        r = parseInt(val.toFixed(0));
      }else{
        r = val.toFixed(0);
      }
      return r;
    },
    goToMap(address){
      var dir = address.replace(/ /g, '+').replace(/#/g, '')
      console.log(dir)
      var url = 'https://www.google.com/maps/place/'+dir;
      var win = window.open(url, '_blank');
    },
    goToCall(cellphone){
      var url = "tel:"+cellphone;
      window.location.href = url;
    },
    goToEmail(email){
      var url = "mailto:"+email;
      window.location.href = url;
    },
    goToUrl(url){
      var win = window.open(url, '_blank');
    },
    mostrar(val){
      this[val] = !this[val]
    },
    //TRANSICION
    enter(element) {
      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // Trigger the animation.
      // We use `setTimeout` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    leave(element) {
      const height = getComputedStyle(element).height;
      
      element.style.height = height;

      setTimeout(() => {
        element.style.height = 0;
      });
    },
    //--------------------
  }
}
</script>

<style scoped>
.titleH1{
  color:black;
  font-size: 18px;
  word-wrap: break-word;
  margin: 5px;
}
.titleH5{
  font-size: 18px;
  margin: 10px 0 10px 0;
  color:rgb(198, 40, 40);
}
.contactH3{
  color:#000000;
  word-wrap: break-word;
  margin: 0;
}
.link{
  cursor: pointer;
  word-break: break-word;
}
.link:hover{
  color:rgb(66, 66, 66);
}
.career{
  color: rgb(66, 66, 66);
  font-size: 15px;
  margin: 5px;
}
.aboutMe{
  text-align: justify;
  margin: 20px;
  color: black;
}
.componentContact{
  margin-top: 10px;
  margin-bottom: 15px;
}
.componentLanguage{
  margin-top: 10px;
  margin-bottom: 15px;
  display: table;
  width:100%;
  text-align: right;
}
.language{
  display: inline-block;
  vertical-align: middle;
}
.star{
  display: inline-block;
  vertical-align: middle;
}
.divIcon{
  display: table;
  width: 100%;
  margin-bottom: 5px;
  
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
.inDivInfo{
  width: 100%;
  overflow: hidden;
  background: #ff844c;
  padding: 0 20px;
  box-sizing: border-box;
}
.divInfo{
  display: table;
  width: 100%;
}

.puntero{
  cursor: pointer;
}
.expand-enter-active,
.expand-leave-active {
  transition: height .5s ease-in-out;
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  height: 0;
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
