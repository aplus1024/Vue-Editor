<template>
  <tr v-on:mouseover="mouseOver" v-on:mouseleave="mouseOut" v-on:click.stop="click" v-bind:class="{ active: isActive, hovered: isHovered }" class="draggableBlock" data-block="Spacer">
    <td style="word-break:break-word;font-size:0px;">
    	<blockActions v-if="isHovered" v-on:duplicate="copyBlock" v-on:remove="deleteBlock"></blockActions>
      	<div v-bind:style="{ lineHeight: block.attributes.height }" style="font-size:1px;white-space:nowrap;">&nbsp;</div>
    </td>
  </tr>
</template>

<script>
import mjmlBase from './mjmlBase.vue'

export default {
	name: 'mjspacer',

 	extends: mjmlBase,

 	mounted() {
 		//console.log(this.block)
 	}

}
</script>
