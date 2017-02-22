|<template>
  <div>
    Raw Form<br />
    
  </div>
</template>

<script>
export default {
	name: 'mjrawForm',

  props: ['block'],

	data () {
    	return {
      		color: ''
    	}
  	},

    watch: {
        'color': function(val, oldVal){
          //console.log(val);
          this.$store.dispatch('updateBlockProp', {'prop': 'color', 'value': val});
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
