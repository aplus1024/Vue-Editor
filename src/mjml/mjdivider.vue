<template>
	<tr v-on:mouseover="mouseOver" v-on:mouseleave="mouseOut" v-on:click.stop="click" v-bind:class="{ active: isActive, hovered: isHovered }" class="draggableBlock" data-block="Divider">
	  	<td v-bind:style="{ padding: padding }" style="word-break:break-word;font-size:0px;">
	  		<blockActions v-if="isHovered" v-on:duplicate="copyBlock" v-on:remove="deleteBlock"></blockActions>
			<p style="font-size:1px;margin:0px auto;border-top:1px solid #F45E43;width:100%;" v-bind:style="{borderColor: block.attributes['border-color']}"></p>
		</td>
	</tr>
</template>

<script>
import mjmlBase from './mjmlBase.vue'

export default {

  name: 'mjdivider',

  extends: mjmlBase,

  computed: {

    padding () {
		return this.block.attributes['padding-top'] + 'px ' + this.block.attributes['padding-left'] + 'px ' + this.block.attributes['padding-top'] + 'px ' + this.block.attributes['padding-right'] + 'px'
    },

  },

}
</script>
