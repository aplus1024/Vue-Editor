<template>
  <tr v-on:mouseover="mouseOver" v-on:mouseleave="mouseOut" v-on:click.stop="click" v-bind:class="{ active: isActive, hovered: isHovered }" class="draggableBlock" data-block="Image">
	  <td v-bind:style="{ padding: padding }" style="word-break:break-word;font-size:0px;" align="center">
	  	<blockActions v-if="isHovered" v-on:duplicate="copyBlock" v-on:remove="deleteBlock"></blockActions>
	    <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0">
	      <tbody>
	        <tr>
	          <td v-bind:style="{width: block.attributes.width + 'px'}"><img alt="" title="" height="auto" :src="block.attributes.src" style="border:none;border-radius:;display:block;outline:none;text-decoration:none;width:100%;height:auto;" v-bind:width="block.attributes.width"></td>
	        </tr>
	      </tbody>
	    </table>
	  </td>
	</tr>
</template>

<script>
import mjmlBase from './mjmlBase.vue'

export default {
	
	name: 'mjimage',
	extends: mjmlBase,

	computed: {

	    padding () {
			return this.block.attributes['padding-top'] + 'px ' + this.block.attributes['padding-top'] + 'px'
	    },

	},

}
</script>
