<script>
export default {

  name: 'mjmlStyle',

  data () {
  	return {
  		style: this.$store.state.mjml.style
  	}
  },

  render: function (createElement) {

  	var styles = [];

  	for (var element in this.style) {
  		var elementStyles = '';
  		for (var elementStyleProp in this.style[element]) {
  			elementStyles += elementStyleProp + ':' + this.style[element][elementStyleProp] + ';'
  		}
  		styles.push('#templateContent ' + element + '{' + elementStyles + '}')
  	}

    return createElement('style', {}, styles)

  }
  
}
</script>
