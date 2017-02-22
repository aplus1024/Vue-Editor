|<template>
  <div class="colorpicker" v-on-clickaway="away" @click="hidePicker">
    <div @click="hidePicker" class="pickerHide">
      <el-input v-model="clr"></el-input>
      <div v-bind:style="{ backgroundColor: clr }" @click="togglePicker" class="colorIndicator"></div>
    </div>
    <sketch-picker v-if="pickerDisplayed" v-model="color" @change-color="onColorChange"></sketch-picker>
  </div>
</template>

<script>

import { Sketch } from 'vue-color'
import { directive as onClickaway } from 'vue-clickaway';

export default {
	name: 'colorPicker',

  directives: {
    onClickaway: onClickaway,
  },

  props: ['defaultColor'],

	data () {
    return {
      color: {'hex': this.defaultColor},
      pickerDisplayed: false,
      stopBlur: false
    }
  },

  computed: {
    clr () {
      return this.color.hex
    }
  },

  watch: {
    'clr': function(val, oldVal){
      this.$emit('colorChange', val)
    }
  },

  methods: {
  	showPicker () { //  @focus="showPicker"
      this.pickerDisplayed = true
    },
    hidePicker (evt) {
      if(evt.target.className=='colorpicker' || evt.target.className=='pickerHide'){
        this.pickerDisplayed = false
      }
    },
    togglePicker () {
      if(!this.pickerDisplayed){
        this.pickerDisplayed = true
      } else {
        this.pickerDisplayed = false
      }
    },
    onColorChange (val) {
      this.color = val
    },
    away: function() {
      this.pickerDisplayed = false
    },
  },

  components: {
    'sketch-picker': Sketch
  }
}
</script>
