<template>
  <div class="divPrincipal">
    <div class="divPerfil">
      <img class="imgPerfil" src="../../assets/perfil.jpg">
    </div>
    <div class="divInfo" >
      <h5 class="titleH5 puntero" @click="mostrarInfo()">Informacion<i class="material-icons icon">{{(!info)?'keyboard_arrow_down':'keyboard_arrow_up'}}</i></h5>
      <div >
        
      </div>
      <transition name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div class="inDivInfo" v-if="info" >
          <p>asergasrg</p>
          <p>asergasrg</p>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      info:true
    }
  },
  methods:{
    mostrarInfo(){
      this.info = !this.info
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
.titleH5{
  margin: 10px 0 10px 0;
}
.icon{
  font-size: inherit;
  position: relative;
  top: 6px;
  margin: 0;
}
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
.inDivInfo{
  overflow: hidden;
  background: #2E292C;
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
  min-width: 300px;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
-moz-box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
}
.divPerfil{
  height: auto;
  margin: 0 auto;
}

@media screen and (min-width: 700px) {
  .imgPerfil{
    height: 150px;
    width: 150px;
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
