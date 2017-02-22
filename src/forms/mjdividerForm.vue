|<template>
  <div>
  
    <div class="row">
      <div class="col-1">
        <label for="">Barva</label>
        <colorPicker v-on:colorChange="onColorChange" :defaultColor="color"></colorPicker>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Výška mezery</label>
        <el-slider v-model="paddingTopBottom"></el-slider>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Odsazení ze stran</label>
        <el-slider v-model="paddingLeftRight"></el-slider>
      </div>
    </div>

  </div>
</template>

<script>

import colorPicker from './elements/colorPicker.vue'

export default {
	name: 'mjdividerForm',

  props: ['block'],

	data () {
    	return {
          paddingTopBottom: this.$store.getters.getActiveBlockAttrInt('padding-top'),
          paddingLeftRight: this.$store.getters.getActiveBlockAttrInt('padding-left'),
          color: this.$store.getters.getActiveBlockAttrString('border-color')
    	}
  	},

    watch: {
      'paddingTopBottom': function(val, oldVal){
          //console.log(val);
          this.$store.dispatch('updateBlockAttribute', {'prop': 'padding-top', 'value': val})
      },
      'paddingLeftRight': function(val, oldVal){
          //console.log(val);
          this.$store.dispatch('updateBlockAttribute', {'prop': 'padding-left', 'value': val})
          this.$store.dispatch('updateBlockAttribute', {'prop': 'padding-right', 'value': val})
      }
    },

  	methods: {
  		onColorChange (color) {
        this.$store.dispatch('updateBlockAttribute', {'prop': 'border-color', 'value': color})
      }
    },

    updated:function()
    {
      //console.log(this.$store.getters.getActiveBlockAttrString('border-color'))
      //console.log(this.$store.getters.getActiveBlockProp('paddingTop'))
    },

    components: {
      colorPicker
    }
}
</script>
