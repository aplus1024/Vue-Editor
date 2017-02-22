|<template>
  <div>

    <div class="row">
      <div class="col-2">
        <label for="">Font</label>
        <el-select v-model="font" placeholder="Select">
          <el-option
            v-for="item in fontOptions"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="col-2">
        <label for="">Barva</label>
        <colorPicker v-on:colorChange="onColorChange" :defaultColor="color"></colorPicker>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Zarovnání</label>
        <el-button-group>
          <el-button type="primary" @click="alignLeft"><i class="icon-align-left"></i></el-button>
          <el-button type="primary" @click="alignCenter"><i class="icon-align-center"></i></el-button>
          <el-button type="primary" @click="alignRight"><i class="icon-align-right"></i></el-button>
          <el-button type="primary" @click="alignJustify"><i class="icon-align-justify"></i></el-button>
        </el-button-group>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Odsazení shora a zdola</label>
        <el-slider v-model="paddingTopBottom"></el-slider>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Odsazení ze stran</label>
        <el-slider v-model="paddingLeftRight"></el-slider>
      </div>
    </div>

<!--
    Text Form<br />

    <el-button-group>
  <el-button type="primary" icon="edit"></el-button>
  <el-button type="primary" icon="share"></el-button>
  <el-button type="primary" icon="delete"></el-button>
  <el-button type="primary" icon="delete"></el-button>
</el-button-group>

    <el-slider v-model="paddingTop"></el-slider>
    <el-slider v-model="paddingBottom"></el-slider>
    <el-slider v-model="paddingLeft"></el-slider>
    <el-slider v-model="paddingRight"></el-slider>

    <el-slider v-model="lineHeight"></el-slider>-->
  </div>
</template>

<script>

import colorPicker from './elements/colorPicker.vue'

export default {
	name: 'mjtextForm',

  props: ['block'],

	data () {
    	return {
        font: '',
        color: this.$store.getters.getActiveBlockAttrString('color'),
    		paddingTopBottom: this.$store.getters.getActiveBlockAttrInt('padding-top'),
        paddingLeftRight: this.$store.getters.getActiveBlockAttrInt('padding-left'),
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        lineHeight: 0,
        fontOptions: [
          {value: 'Arial', label: 'Arial'},
          {value: 'Verdana', label: 'Verdana'}
        ],
    	}
  	},

    watch: {
      'paddingTopBottom': function(val, oldVal){
        this.$store.dispatch('updateBlockProp', {'prop': 'padding-top', 'value': val});
      },
      'paddingBottom': function(val, oldVal){
        this.$store.dispatch('updateBlockProp', {'prop': 'paddingBottom', 'value': val});
      },
      'paddingLeftRight': function(val, oldVal){
        this.$store.dispatch('updateBlockProp', {'prop': 'padding-left', 'value': val});
      },
      'paddingRight': function(val, oldVal){
        this.$store.dispatch('updateBlockProp', {'prop': 'paddingRight', 'value': val});
      },
      'lineHeight': function(val, oldVal){
        this.$store.dispatch('updateBlockProp', {'prop': 'lineHeight', 'value': val});
      },
      'font': function(val, oldVal){
        this.$store.dispatch('updateBlockProp', {'prop': 'font-family', 'value': val});
      }
    },

  	methods: {
  		onColorChange (color) {
        this.$store.dispatch('updateBlockAttribute', {'prop': 'color', 'value': color})
      },
      alignLeft () {
        this.$store.dispatch('updateBlockAttribute', {'prop': 'align', 'value': 'left'})
      },
      alignRight (color) {
        this.$store.dispatch('updateBlockAttribute', {'prop': 'align', 'value': 'right'})
      },
      alignCenter (color) {
        this.$store.dispatch('updateBlockAttribute', {'prop': 'align', 'value': 'center'})
      },
      alignJustify (color) {
        this.$store.dispatch('updateBlockAttribute', {'prop': 'align', 'value': 'justify'})
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
