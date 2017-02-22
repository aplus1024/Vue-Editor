|<template>
  <div>

    <div class="row">
      <div class="col-1">
        <label for="">Text tlačítka</label>
        <el-input placeholder="Content" v-model="content"></el-input>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Odkaz na tlačítku</label>
        <el-input placeholder="Href" v-model="href"></el-input>
      </div>
    </div>

    <div class="row">
      <div class="col-2">
        <label for="">Barva tlačítka</label>
        <colorPicker v-on:colorChange="onBgColorChange" :defaultColor="bgColor"></colorPicker>
      </div>
      <div class="col-2">
        <label for="">Barva textu</label>
        <colorPicker v-on:colorChange="onColorChange" :defaultColor="color"></colorPicker>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Velikost písma</label>
        <el-slider v-model="fontSize"></el-slider>
      </div>
    </div>

  </div>
</template>

<script>

import colorPicker from './elements/colorPicker.vue'

export default {
	name: 'mjbuttonForm',

  props: ['block'],

	data () {
    	return {
      		content: this.$store.getters.getActiveBlockPropString('content').replace('<!--[CDATA[', '').replace(']]-->', ''),
          color: this.$store.getters.getActiveBlockAttrString('color'),
          bgColor: this.$store.getters.getActiveBlockAttrString('background-color'),
          href: this.$store.getters.getActiveBlockAttrString('href'),
          fontSize: this.$store.getters.getActiveBlockAttrInt('font-size')
    	}
  	},

    watch: {
      'content': function(val, oldVal){
          //console.log(val);
          this.$store.dispatch('updateBlockProp', {'prop': 'content', 'value': val});
      },
      'href': function(val, oldVal){
          //console.log(val);
          this.$store.dispatch('updateBlockAttribute', {'prop': 'href', 'value': val});
      },
      'fontSize': function(val, oldVal){
          //console.log(val);
          this.$store.dispatch('updateBlockAttribute', {'prop': 'font-size', 'value': val});
      }
    },

  	methods: {
      onBgColorChange (color) {
        this.$store.dispatch('updateBlockAttribute', {'prop': 'background-color', 'value': color})
      },
      onColorChange (color) {
        this.$store.dispatch('updateBlockAttribute', {'prop': 'color', 'value': color})
      }
    },

    updated:function()
    {
      //console.log(this.block.url)
    },

    components: {
      colorPicker
    }
}
</script>
