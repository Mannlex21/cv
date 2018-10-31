<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import stylesMaterial         from "./css/icons_material.css";
import Store from "./store";
export default {
  name: "app",
  data() {
    return {
    }; 
  },
  methods:{
    
  },
  mounted(){    
    
  },
  computed:{
    
  },
  components: {
  }
};
</script>

<style>

/* .iconMenu{
  color: white;
  display: inline;
  font-size: 20px;
  vertical-align: middle;
  margin-left: 10px;
  margin-right: 5px;
} */

body{
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
}

</style>
