<template>
  <div style="margin:0;padding:0;" v-if="Object.keys(object) !=0">
    <div class="divInfoPersonal">
      <h1 class="titleH1">{{object.name}} <br> {{object.lastname}}</h1>
      <h2 class="career">{{object.career}}</h2>
      <p class="aboutMe">{{object.aboutMe}}</p>
    </div>
    <div  class="divInfo" >
      <h3 class="titleH5 puntero" @click="mostrar('show')">{{title}}<i class="material-icons icon">{{(!show)?'keyboard_arrow_down':'keyboard_arrow_up'}}</i></h3>
      <transition name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div class="inDivInfo" :style="{'background':config.color_secundario}" v-if="show" >
          <div class="componentContact">
            <div class="divIcon"><i style="font-size:28px;" class="material-icons icon">phone</i></div>
            <div><h3 class="contactH3 link" @click="goToCall(object.email)">{{object.cellphone}}</h3></div>
          </div>
          <div class="componentContact">
            <div class="divIcon"><i style="font-size:28px;" class="material-icons icon">email</i></div>
            <div><h3 class="contactH3 link" @click="goToEmail(object.email)">{{object.email}}</h3></div>
          </div>
          <div class="componentContact">
            <div class="divIcon"><i style="font-size:28px;" class="material-icons icon">link</i></div>
            <div ><h3 class="contactH3 link" @click="goToUrl(object.linkedin_link)"><a _target="blank"  >{{object.linkedin}}</a></h3></div>
          </div>
          <div class="componentContact">
            <div class="divIcon"><i style="font-size:28px;" class="material-icons icon">location_on</i></div>
            <div><h3 class="contactH3 link" @click="goToMap(object.address)">{{object.address}}</h3></div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import FileInfo from "../../files/informacion.js"
export default {
  props: {
    object: { type:Object , default: {} },
    title: { type:String, default:''}
  },
  data(){
    return{
      show:true,
    }
  },
  computed:{
    config(){
      return FileInfo.config;
    }
  },
  methods:{
    
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
.contactH3{
  color:#000000;
  word-wrap: break-word;
  margin: 0;
}
.inDivInfo{
  width: 100%;
  overflow: hidden;
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
.divIcon{
  display: table;
  width: 100%;
  margin-bottom: 5px;
  
}
.icon{
  font-size: inherit;
  vertical-align: middle;
}
.componentContact{
  margin-top: 10px;
  margin-bottom: 15px;
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
.expand-enter-active,
.expand-leave-active {
  transition: height .5s ease-in-out;
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
@media screen and (min-width: 700px) {
  
}
@media screen and (max-width: 699px) {
  .componentContact{
    text-align: left;
  }
}
</style>
