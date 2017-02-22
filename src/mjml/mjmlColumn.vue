<template>
  <div v-bind:style="{width: this.column.attributes.width }" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody v-bind:class="{empty: column.children.length==0}">
        <draggable @add="onAdd" @update="onUpdate" @start="onStart" :options="{group: {'name': 'blocks'}}">
          <mjmlBlock v-for="(block, blockIndex) in column.children" v-bind:block="block" :columnIndex="columnIndex" :sectionIndex="sectionIndex" :blockIndex="blockIndex" :key="block.uid"></mjmlBlock>
        </draggable>
      </tbody>
    </table>
  </div>
</template>

<script>

import mjmlBlock from './mjmlBlock.vue'
import emptyBlock from './emptyBlock.vue'

import draggable from 'vuedraggable'

export default {

  name: 'mjmlColumn',
  props: ['columnIndex', 'sectionIndex'],
  
  data () {
      return {
        columnClass: {
          'outlook-group-fix': true,
          //'mj-column-per-100': this.$store.state.mjml.children[0].children[this.sectionIndex].children.length==1,
          //'mj-column-per-50': this.$store.state.mjml.children[0].children[this.sectionIndex].children.length==2,
          //'mj-column-per-30': this.$store.state.mjml.children[0].children[this.sectionIndex].children.length==3,
          //'mj-column-per-25': this.$store.state.mjml.children[0].children[this.sectionIndex].children.length==4
        },
        //column: this.$store.state.definition.sections[this.sectionIndex].columns[this.columnIndex]
        column: this.$store.state.mjml.children[0].children[this.sectionIndex].children[this.columnIndex]
      }
  },

  created:function()
  {
      //console.log(this.$store.state.mjml.children[0].children[this.sectionIndex].children)
      //console.log(this.sectionIndex)
      //console.log(this.columnIndex)
      //console.log(this.column)
  },

  mounted:function()
  {
    //console.log(this.$parent.section)
    //console.log(this.$parent.$parent.$parent.$options.blocksDragula)
    //var drops = [].slice.call(document.querySelectorAll('#templateContent>div div>table>tbody'))
    //drops.push(document.getElementById('block'))
    //this.$root.$children[0].$options.blocksDragula.containers = drops
  },

  updated:function()
  {
    //console.log('Column updated: ' + this.sectionIndex + '|' + this.columnIndex)
    //console.log(this.column.children)
  },

  methods:{
    onStart: function(evt){
      // Save starting section and column for later reordering
      this.$store.dispatch('setStartDragOptions', {'sectionIndex': this.sectionIndex, 'columnIndex': this.columnIndex, 'blockIndex': evt.oldIndex})
      //console.log(evt.target.getElementsByClassName("cke_editable")[0])
      if(evt.item.getElementsByClassName("mjeditor").length){
        var editorId = evt.item.getElementsByClassName("mjeditor")[0].id
        setTimeout(function(){ CKEDITOR.instances[editorId].destroy() }, 100);
      }
      //console.log(evt.target.childNodes[0].childNodes[0].getElementsByClassName("cke_editable"))
    },
    onAdd: function(evt){
      
      if(evt.from.parentNode.id=='blocks'){
        var droppedItem = evt.item
        var blockType = droppedItem.dataset.block
        droppedItem.parentNode.removeChild(droppedItem)

        this.$store.dispatch('addBlock', {'sectionIndex': this.sectionIndex, 'columnIndex': this.columnIndex, 'blockIndex': evt.newIndex, 'block': {'type': blockType, 'uid': Math.random().toString(36).slice(18)}})
      } else {
        //console.log('reorder')
        var droppedItem = evt.item
        var dragStartOptions = this.$store.state.dragStart
        //console.log(this.$store.state.dragStart)
        this.$store.dispatch('reorderBlocksBetweenColumns', {'oldSectionIndex': dragStartOptions.sectionIndex, 'oldColumnIndex': dragStartOptions.columnIndex, 'oldIndex': evt.oldIndex, 'newIndex': evt.newIndex, 'sectionIndex': this.sectionIndex, 'columnIndex': this.columnIndex})
        droppedItem.parentNode.removeChild(droppedItem)
      }
    },
    onUpdate: function(evt){
      //console.log(this.sectionIndex)
      if(evt.item.getElementsByClassName("mjeditor").length){
        setTimeout(function(){
        var editorId = evt.item.getElementsByClassName("mjeditor")[0].id
        console.log(editorId)

        var introduction = document.getElementById(editorId)
        introduction.setAttribute( 'contenteditable', true )

        var editor = CKEDITOR.inline(editorId, {
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
        //CKEDITOR.instances[editorId].destroy()
        }, 200)
      }
      this.$store.dispatch('reorderBlocks', {'sectionIndex': this.sectionIndex, 'columnIndex': this.columnIndex, 'oldIndex': evt.oldIndex, 'newIndex': evt.newIndex})
    }
  },
  
  components: {
      mjmlBlock,
      emptyBlock,
      draggable
  }
}
</script>
