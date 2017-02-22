<template>
  
  <div>

    <div class="row">
      <div class="col col-1">
        <label for="">Počet sloupců</label>
        <el-input v-model="cols"></el-input>
      </div>
    </div>

    <div class="row">
      <div class="col col-1">
        <label for="">Rozvržení</label>
        <el-input placeholder="Layout" v-model="layout"></el-input>
      </div>
    </div>

    <div class="row">
      <div class="col col-1">
        <label for="">Odsazení shora a zdola</label>
        <el-slider v-model="paddingTopBottom"></el-slider>
      </div>
    </div>

    <div class="row">
      <div class="col col-1">
        <label for="">Obrázek na pozadí</label>
        <el-input placeholder="Bg-image" v-model="backgroundImage"></el-input>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Barva pozadí</label>
        <colorPicker v-on:colorChange="onBgColorChange" :defaultColor="bgColor"></colorPicker>
      </div>
    </div>

  </div>

</template>

<script>

import colorPicker from './elements/colorPicker.vue'

export default {

  name: 'sectionForm',

  props: ['section'],

  data () {
    return {
      cols: 1,
      layout: 1,
      bgColor: '',
      backgroundImage: '',
      paddingTopBottom: this.$store.getters.getActiveSectionAttrInt('padding-top'),
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  },

  watch: {
    'paddingTopBottom': function(val, oldVal){
        //console.log(val);
        this.$store.dispatch('updateSectionAttribute', {'prop': 'padding-top', 'value': val})
    },
  },

  methods: {
    onBgColorChange (color) {
      //this.$store.dispatch('updateBlockAttribute', {'prop': 'background-color', 'value': color})
    }
  },

  components: {
    colorPicker
  }

}
</script>
