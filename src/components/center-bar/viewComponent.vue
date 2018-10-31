<template>
  <div class="divPrincipal">
    <div class="div-experience-content">
      <h1 class="titleH1"><i class="material-icons icon">work</i> Experiencia </h1>
      <div class="div-experience">
        <h2 class="titleH2">MAVI</h2>
        <h3 class="titleH3" style="">Desarrollador especializado</h3>
        <h3 class="titleH3" style="font-size: 14px; color:red;">Marzo - Actualidad</h3>
        <p class="text-exp-resumen">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div class="btn-show-exp" @click="mostrarInfo()"></div>
        <transition name="expand"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave"
        >
          <p class="text-exp-detail" v-if="detail">Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
</style>

<style scoped>
p,h1,h2,h3{
  color: black;
}
.icon{
  font-size: inherit;
  position: relative;
  top: 4px;
  margin: 0 14px;
}
.divPrincipal{
  grid-area: main;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
  -moz-box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
  box-shadow: 0px 0px 5px 2px rgba(186,186,186,1);
}
.div-experience{
  padding-left: 70px;
  padding-right: 40px;
}
.titleH1{
  font-weight: 700;
  font-size: 32px;
  text-align: left;
  margin:0;
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
  background: red;
  float: right;
}
</style>
