<template>
  <tr v-on:mouseover="mouseOver" v-on:mouseleave="mouseOut" v-on:click.stop="click" v-bind:class="{ active: isActive, hovered: isHovered }" class="draggableBlock" data-block="Raw">
    <td style="word-break:break-word;font-size:0px;">
      <div style="font-size:1px;line-height:50px;white-space:nowrap;">&nbsp;</div>
    </td>
  </tr>
</template>

<script>
import mjmlBase from './mjmlBase.vue'

export default {
	name: 'mjraw',
 	extends: mjmlBase,
}
</script>
