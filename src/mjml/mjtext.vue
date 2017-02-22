<template>
  <tr v-on:mouseover="mouseOver" v-on:mouseleave="mouseOut" v-on:click.stop="click" v-bind:class="{ active: isActive, hovered: isHovered }" class="draggableBlock" data-block="Text">
    <td v-bind:style="{ padding: padding }" style="word-break:break-word;font-size:0px;" align="left">
      <blockActions v-if="isHovered" v-on:duplicate="copyBlock" v-on:remove="deleteBlock"></blockActions>
      <div v-html="blockContent" v-bind:id="block.uid" class="mjeditor" v-bind:style="{ lineHeight: block.lineHeight, color: block.attributes['color'], fontSize: block.attributes['font-size'] + 'px', textAlign: block.attributes['align'] }" style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;text-align:left;">
        
      </div>
    </td>
  </tr>
</template>

<script>

import mjmlBase from './mjmlBase.vue'

export default {

	name: 'mjtext',

  extends: mjmlBase,

  data () {
    return {
      ckEditorReady: false
    }
  },

  computed: {

    blockContent () {
      return this.block.content.replace('<!--[CDATA[', '').replace(']]-->', '').replace('\/', '/')
    },

    padding () {
      if(!this.block.attributes['padding-left']){
        this.block.attributes['padding-left'] = 20;
      }
      //console.log(this.block.attributes['padding-top'] + 'px ' + this.block.attributes['padding-left'] + 'px')
      return this.block.attributes['padding-top'] + 'px ' + this.block.attributes['padding-left'] + 'px'
    },

  },

  methods: {

    initEditor(){
      console.log('initEditor')
      if(!this.ckEditorReady){

        var introduction = document.getElementById(this.block.uid)
        introduction.setAttribute( 'contenteditable', true )

        var editor = CKEDITOR.inline(this.block.uid, {
          // Allow some non-standard markup that we used in the introduction.
          //extraAllowedContent: 'a(documentation);abbr[title];code',
          //removePlugins: 'stylescombo',
          //extraPlugins: 'sourcedialog',
          // Show toolbar on startup (optional).
          //startupFocus: true
          allowedContent: true,
          fillEmptyBlocks: false,
          enterMode : CKEDITOR.ENTER_BR,
          shiftEnterMode: CKEDITOR.ENTER_P,
          customConfig: 'ckeditor_config.js'
        })

        editor.on('blur', () => {
          let ckeditorData = CKEDITOR.instances[this.block.uid].getData()
          if (ckeditorData !== this.value) {
            this.$store.dispatch('updateSpecificBlockProp', {'prop': 'content', 'value': ckeditorData, 'sectionIndex': this.sectionIndex, 'columnIndex': this.columnIndex, 'blockIndex': this.blockIndex})
          }
          //var editor=ck.name;
          setTimeout(function(){ editor.destroy(); }, 0);
          //editor.destroy()
          this.ckEditorReady = false
        })

        editor.on('instanceReady', () => {
          editor.focus()
        })

        this.ckEditorReady = true
      }
    }

  },

  mounted() {
    
    var introduction = document.getElementById(this.block.uid)
    introduction.setAttribute( 'contenteditable', true )

    CKEDITOR.inline(this.block.uid, {
      // Allow some non-standard markup that we used in the introduction.
      //extraAllowedContent: 'a(documentation);abbr[title];code',
      //removePlugins: 'stylescombo',
      //extraPlugins: 'sourcedialog',
      // Show toolbar on startup (optional).
      //startupFocus: true
      allowedContent: true,
      fillEmptyBlocks: false,
      enterMode : CKEDITOR.ENTER_BR,
      shiftEnterMode: CKEDITOR.ENTER_P,
      customConfig: 'ckeditor_config.js'
    })

    
    CKEDITOR.instances[this.block.uid].on('blur', () => {
      let ckeditorData = CKEDITOR.instances[this.block.uid].getData()
      if (ckeditorData !== this.value) {
        this.$store.dispatch('updateSpecificBlockProp', {'prop': 'content', 'value': ckeditorData, 'sectionIndex': this.sectionIndex, 'columnIndex': this.columnIndex, 'blockIndex': this.blockIndex})
      }
    })

    /*
    CKEDITOR.instances[this.block.uid].on('blur', () => {
      let ckeditorData = CKEDITOR.instances[this.block.uid].getData()
      if (ckeditorData !== this.value) {
        //console.log(ckeditorData)
        // Sync data
        this.$store.dispatch('updateBlockProp', {'prop': 'content', 'value': ckeditorData})
      }
    })*/
  },

  components: { 
     
  }

}

</script>
