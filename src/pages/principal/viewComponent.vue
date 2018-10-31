<template>
  <div class="grid-container">
    <left-bar></left-bar>
    <center-bar></center-bar>
  </div>
</template>
<script>
import LeftBar from "../../components/left-bar/viewComponent.vue"
import CenterBar from "../../components/center-bar/viewComponent.vue"
export default {
  components:{
    LeftBar,
    CenterBar
  }
};
</script>
<style scoped>
@media screen and (min-width: 700px) {
  .grid-container {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'menu main main main main main'
      'menu footer footer footer footer footer';
    grid-gap: 10px;
    padding: 10px;
  }
  .grid-container > div {
    
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
}
@media screen and (max-width: 699px) {
  .grid-container {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'menu menu menu menu menu menu'
      'main main main main main main';
    grid-gap: 10px;
    padding: 10px;
  }
  .grid-container > div {
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
}
</style>
