<template>
  <div 
    :style="{
        'width':'inherit',
        'color':'#212121',
        'background':'#90caf9',
        'display': 'table',
        'cursor':'pointer',
        'border-radius': '5px'
      }"
      v-on:mouseover="dentro()"
      v-on:mouseleave="fuera()"
      ref='btn'
  >
    <i v-if="icon!=''" 
      class="material-icons" 
      :style="{
          'font-size':font_icon,
          'display': 'table-cell',
          'vertical-align': 'middle'
        }"
    >
      {{icon}}
    </i>
    <p v-if="text!=''" 
      :style="{
          'margin':'0 auto',
          'font-size':font_size,
          'color':font_color,
          'display': 'table-cell',
          'vertical-align': 'middle',
          'font-weight':font_weight
        }"
    >
      {{text}}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    text: { type:String , default: "" },
    font_size : { type:String , default: "18px" },
    font_color : { type:String , default: "black" },
    icon : { type:String , default: "" },
    font_icon:{ type:String , default: "18px" },
    font_weight: { type:String , default: "700" }
  },
  data(){
    return{

    }
  },
  methods:{
    dentro(){
      var elementId = this.$refs.btn;
      elementId.classList.add("button-sobre");
    },
    fuera(){
      var elementId = this.$refs.btn;
      elementId.classList.remove("button-sobre");
    }
  }
}
</script>

<style scoped>
.button-sobre{
  opacity: .9;
}
</style>
