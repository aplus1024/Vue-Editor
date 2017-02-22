<template>

  <div v-if="!preview" id="templateContent" v-bind:style="{backgroundColor: this.bgColor}">
    
    <mjmlStyle></mjmlStyle>
    
    <mjmlFonts></mjmlFonts>

  	<draggable @add="onAdd" :options="{group: {'name': 'sections'}, scroll: true}">
  		<mjmlSection v-for="(section, index) in this.mjml.children[0].children" :index="index" :key="section.uid"></mjmlSection>
  	</draggable>
    
  </div>
  
  <div v-else id="templateRender">
    
    Rendered template preview

  </div>

</template>

<script>

import mjmlStyle from '../mjml/mjmlStyle.vue'
import mjmlFonts from '../mjml/mjmlFonts.vue'
import mjmlSection from '../mjml/mjmlSection.vue'

import draggable from 'vuedraggable'

export default {

	name: 'email',
	props: ['preview'],

	data () {
		return {
			definition: this.$store.state.definition,
      mjml: this.$store.state.mjml,
      bgColor: this.$store.getters.getBodyBg()
		}
  },

  updated() {
    //console.log(this.$store.state.previewMode)
  },

	methods: {
  	onAdd: function(evt){
    		var droppedItem = evt.item
    		var colsCount = droppedItem.dataset.cols
        if(colsCount==1){
          var cols = JSON.parse('[{"tagName": "mj-column", "attributes":{"width": "100%"}, "children": []}]')
        } else if(colsCount==2) {
          var cols = JSON.parse('[{"tagName": "mj-column", "attributes":{"width": "50%"}, "children": []}, {"tagName": "mj-column", "attributes":{"width": "50%"}, "children": []}]')
        } else if(colsCount==3) {
          var cols = JSON.parse('[{"tagName": "mj-column", "attributes":{"width": "33.333333%"}, "children": []}, {"tagName": "mj-column", "attributes":{"width": "33.333333%"}, "children": []}, {"tagName": "mj-column", "attributes":{"width": "33.333333%"}, "children": []}]')
        } else if(colsCount==4) {
          var cols = JSON.parse('[{"tagName": "mj-column", "attributes":{"width": "25%"}, "children": []}, {"tagName": "mj-column", "attributes":{"width": "25%"}, "children": []}, {"tagName": "mj-column", "attributes":{"width": "25%"}, "children": []}, {"tagName": "mj-column", "attributes":{"width": "25%"}, "children": []}]')
        } else if(colsCount==12) {
          var cols = JSON.parse('[{"tagName": "mj-column", "attributes":{"width": "40%"}, "children": []}, {"tagName": "mj-column", "attributes":{"width": "60%"}, "children": []}]')
        } else if(colsCount==21) {
          var cols = JSON.parse('[{"tagName": "mj-column", "attributes":{"width": "60%"}, "children": []}, {"tagName": "mj-column", "attributes":{"width": "40%"}, "children": []}]')
        }
    		droppedItem.parentNode.removeChild(droppedItem)
    		this.$store.dispatch('addSection', {'sectionIndex': evt.newIndex, 'columns': cols})
  	}
	},
	
	components: {
  	mjmlSection,
    mjmlStyle,
    mjmlFonts,
  	draggable
	}
}
</script>
