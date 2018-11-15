<template>
  <div  class="divInfo" v-if="array.length!=0">
    <h3 class="titleH5 puntero" @click="mostrar('show')">{{title}}<i class="material-icons icon">{{(!show)?'keyboard_arrow_down':'keyboard_arrow_up'}}</i></h3>
    <transition name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div class="inDivInfo" :style="{'background':config.color_secundario}" v-if="show" >
        <div class="component">
          <div v-for="(item) in array" :key="item.id">
            <h3 class="nameItem">{{item.name}} :</h3>
            <p class="star"><i class="material-icons icon">{{getRating(item.rating)}}</i></p>
          </div>
        </div>
      </div>
    </transition>
  </div>  
</template>
<script>

import FileInfo from "../../files/informacion.js"
export default {
  props: {
    array: { type:Array , default: [] },
    title: { type:String, default:''}
  },
  data(){
    return{
      show:false,
    }
  },
  computed:{
    config(){
      return FileInfo.config;
    }
  },
  methods:{
    getRating(rating){
      var result = '';
      var valRating = this.round(rating);
      if(valRating-rating>0){
        valRating = valRating-1
        result+='star_half '

        for(var i=0;i<valRating;i++){
          result='star '+result
        }
        for(var i = (valRating+1);i<5;i++){
          result+='star_border '
        }
      }else{
        for(var i=0;i<valRating;i++){
          result='star '+result
        }
        for(var i = valRating;i<5;i++){
          result+='star_border '
        }
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
  },
  created(){
  }
}
</script>
<style scoped>
.titleH5{
  font-size: 18px;
  margin: 10px 0 10px 0;
  color:rgb(198, 40, 40);
}
.divInfo{
  display: table;
  width: 100%;
}
.puntero{
  cursor: pointer;
}
.nameItem{
  display: inline-block;
  vertical-align: middle;
  color:#000000;
  word-wrap: break-word;
  margin: 0;
}
.star{
  display: inline-block;
  vertical-align: middle;
}
.icon{
  font-size: inherit;
  vertical-align: middle;
}
.inDivInfo{
  width: 100%;
  overflow: hidden;
  padding: 0 20px;
  box-sizing: border-box;
}
.component{
  margin-top: 10px;
  margin-bottom: 15px;
  display: table;
  width:100%;
  text-align: right;
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
@media screen and (max-width: 699px) {
  
}
@media screen and (max-width: 699px) {
  .component{
    text-align: left;
  }
}
</style>
