<template>
  <div>

    <div class="row">
      <div class="col-1">
        <label for="">Zdroj obrázku</label>
        <el-input placeholder="Src" v-model="src"></el-input>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Odkaz na obrázku</label>
        <el-input placeholder="http://" v-model="href"></el-input>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Alternativní text</label>
        <el-input placeholder="" v-model="alt"></el-input>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Velikost obrázku</label>
        <el-slider v-model="width"></el-slider>
      </div>
    </div>

    <div class="row">
      <div class="col-1">
        <label for="">Odsazení</label>
        <el-slider v-model="paddingTop"></el-slider>
      </div>
    </div>

  </div>
</template>

<script>
export default {
	name: 'mjimageForm',

  props: ['block'],

	data () {
    	return {
      		src: this.$store.getters.getActiveBlockAttrString('src'),
          href: this.$store.getters.getActiveBlockAttrString('href'),
          alt: this.$store.getters.getActiveBlockAttrString('alt'),
          width: this.$store.getters.getActiveBlockAttrInt('width'),
          paddingTop: this.$store.getters.getActiveBlockAttrInt('padding-top'),
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
    	}
  	},

    watch: {
      'src': function(val, oldVal){
        this.$store.dispatch('updateBlockAttribute', {'prop': 'src', 'value': val})
      },
      'href': function(val, oldVal){
        this.$store.dispatch('updateBlockAttribute', {'prop': 'href', 'value': val})
      },
      'alt': function(val, oldVal){
        this.$store.dispatch('updateBlockAttribute', {'prop': 'alt', 'value': val})
      },
      'width': function(val, oldVal){
        this.$store.dispatch('updateBlockAttribute', {'prop': 'width', 'value': val})
      },
      'paddingTop': function(val, oldVal){
        this.$store.dispatch('updateBlockAttribute', {'prop': 'padding-top', 'value': val})
      },
      /*
      'paddingBottom': function(val, oldVal){
          this.$store.dispatch('updateBlockProp', {'prop': 'padding-bottom', 'value': val});
      },
      'paddingLeft': function(val, oldVal){
          this.$store.dispatch('updateBlockProp', {'prop': 'padding-left', 'value': val});
      },
      'paddingRight': function(val, oldVal){
          this.$store.dispatch('updateBlockProp', {'prop': 'padding-right', 'value': val});
      }*/
    },

  	methods: {
  		
    },

    created:function()
    {
      console.log('mjimageForm created') 
    },

    mounted:function()
    {
      console.log('mjimageForm mounted') 
    },

    updated:function()
    {
      console.log('mjimageForm updated')
      console.log(this.block.columnIndex)
      console.log(this.block.blockIndex)
    }
}
</script>
