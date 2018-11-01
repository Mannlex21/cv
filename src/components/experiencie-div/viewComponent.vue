<template>
  <div class="div-experience-content">
    
    <div class="div-experience">
      <h2 class="titleH2">{{info.company}}</h2>
      <h3 class="titleH3" style="color:#424242;">{{info.position}}</h3>
      <h3 class="titleH3" style="font-size: 14px; color:#c62828;">{{info.date}}</h3>
      <p class="text-exp-resumen">{{info.resumen}}</p>
      <transition name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <p class="text-exp-detail" v-if="detail">{{info.detail}}</p>
      </transition>
      <btn  :style="'padding: 0px 5px;background:#757575;width:80px;'" 
        class="btn-show-exp" 
        :text="(!detail)?'Ver mas':'Ver menos'" 
        :font_size="'14px'" 
        :font_color="'white'"
        v-on:click.native="mostrarInfo()"
      ></btn>
    </div>
  </div>
</template>
<script>
import Btn from "../button/viewComponent"
export default {
  props: {
    info  : { type:Object , default: null } 
  },
  components:{
    Btn
  },
  data(){
    return{
      detail:false
    }
  },
  methods:{
    mostrarInfo(){
      this.detail = !this.detail
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
.expand-enter-active,
.expand-leave-active {
  transition: height .5s ease-in-out;
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>

<style scoped>
p,h1,h2,h3{
  color: black;
}
.div-experience-content{
  display: inline-block;
}
.div-experience{
  padding-left: 70px;
  padding-right: 40px;
}
.titleH2{
  font-weight: 700;
  font-size: 18px;
  text-align: left;
}
.titleH3{
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  margin: 0;
}
.text-exp-resumen{
  font-size: 14px;
  text-align: justify;
}
.text-exp-detail{
  font-size: 14px;
  text-align: justify;
  display: inline-block;
}
.btn-show-exp{
  width: 50px;
  height: 25px;
  background: #c62828;
  float: right;
}
</style>
