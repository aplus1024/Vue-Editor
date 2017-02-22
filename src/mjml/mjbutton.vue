<template>
	<tr v-on:mouseover="mouseOver" v-on:mouseleave="mouseOut" v-on:click.stop="click" v-bind:class="{ active: isActive, hovered: isHovered}" class="draggableBlock" data-block="Button">
    <td style="word-break:break-word;font-size:0px;padding:10px 25px;" v-bind:align="block.attributes['align']">
      <blockActions v-if="isHovered" v-on:duplicate="copyBlock" v-on:remove="deleteBlock"></blockActions>
      <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;" v-bind:align="block.attributes['align']" border="0">
        <tbody>
          <tr>
            <td style="border:none;border-radius:3px;color:white;cursor:auto;padding:10px 25px;" align="center" valign="middle" v-bind:bgcolor="block.attributes['background-color']" v-bind:style="{backgroundColor: block.attributes['background-color'], borderRadius: block.attributes['border-radius']}">
              <a v-bind:style="{ background: block.backgroundColor, color: block.attributes['color'], fontSize: block.attributes['font-size'] + 'px' }" style="text-decoration:none;line-height:100%;font-family:Helvetica;font-weight:normal;text-transform:none;margin:0px;" v-bind:href="block.href">{{ buttonContent }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</template>

<script>
import mjmlBase from './mjmlBase.vue'

export default {
	name: 'mjbutton',

  extends: mjmlBase,

  computed: {

    buttonContent () {
      console.log(this.block)
      //return this.block.content.replace('<!--[CDATA[', '').replace(']]-->', '').replace('\/', '/')
      return this.block.content.replace('<!--[CDATA[', '').replace(']]-->', '')
    },

  },
}
</script>
