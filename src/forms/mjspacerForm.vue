|<template>
  <div>
    Spacer Form<br />
    <el-slider v-model="height"></el-slider>
  </div>
</template>

<script>
export default {
	name: 'mjspacerForm',

  props: ['block'],

	data () {
    	return {
      		height: ''
    	}
  	},

    watch: {
        'height': function(val, oldVal){
          //console.log(val);
          this.$store.dispatch('updateBlockProp', {'prop': 'height', 'value': val});
      }
    },

  	methods: {
  		
    },

    updated:function()
    {
      //console.log(this.block.url)
    }
}
</script>
