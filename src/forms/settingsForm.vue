<template>
  
  <div>
    
    <div class="section">

      <strong>Nastavení barev</strong>
      
      <div class="row">
        <div class="col col-2">
          <label for="">Barva pozadí</label>
          <colorPicker v-on:colorChange="onBgColorChange" :defaultColor="bgColor"></colorPicker>
        </div>
        <div class="col-2">
          <label for="">Barva bloků</label>
          <colorPicker v-on:colorChange="onBlockColorChange" :defaultColor="blockColor"></colorPicker>
        </div>
      </div>

      <div class="row">
        <div class="col-2">
          <label for="">Barva tlačítek</label>
          <colorPicker v-on:colorChange="onButtonColorChange" :defaultColor="btnColor"></colorPicker>
        </div>
        <div class="col-2">
          <label for="">Barva textů tlačítek</label>
          <colorPicker v-on:colorChange="onButtonTextColorChange" :defaultColor="btnTextColor"></colorPicker>
        </div>
      </div>

      <div class="row">
        <div class="col-1">
          <label for="">Barva odkazů</label>
          <colorPicker v-on:colorChange="onLinksColorChange" :defaultColor="linksColor"></colorPicker>
        </div>
      </div>

    </div>

    <div class="section">
      <strong>Nastavení fontů</strong>

      <div class="row">
        <div class="col-1">
          <label for="">Heading 1</label>
        </div>
      </div>

      <div class="row">
        <div class="col-1">
          <label for="">Heading 2</label>
        </div>
      </div>

      <div class="row">
        <div class="col-1">
          <label for="">Heading 3</label>
        </div>
      </div>

      <div class="row">
        <div class="col-1">
          <label for="">Normal text</label>
        </div>
      </div>

    </div>

    <div class="section">

      <strong>Nastavení řádkování</strong>
      
      <div class="row">
        <div class="col-1">
          <label for="">Spacing</label>
        </div>
      </div>

    </div>

  </div>

</template>

<script>

import colorPicker from './elements/colorPicker.vue'

export default {

  name: 'settingsForm',

  props: [],

  data () {
    return {
      bgColor: this.$store.getters.getBodyBg(),
      blockColor: '',
      btnColor: '',
      btnTextColor: '',
      linksColor: ''
    }
  },

  watch: {
      
  },

  methods: {
    onBgColorChange (color) {
      //this.$store.dispatch('updateBlockAttribute', {'prop': 'background-color', 'value': color})
    },
    onBlockColorChange (color) {
      //this.$store.dispatch('updateBlockAttribute', {'prop': 'background-color', 'value': color})
    },
    onButtonColorChange (color) {
      //this.$store.dispatch('updateBlockAttribute', {'prop': 'background-color', 'value': color})
    },
    onButtonTextColorChange (color) {
      //this.$store.dispatch('updateBlockAttribute', {'prop': 'background-color', 'value': color})
    },
    onLinksColorChange (color) {
      //this.$store.dispatch('updateBlockAttribute', {'prop': 'background-color', 'value': color})
    }
  },

  components: {
    colorPicker
  }
}
</script>
