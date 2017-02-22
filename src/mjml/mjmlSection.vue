<template>
	<div v-on:mouseover="mouseOver" v-on:mouseleave="mouseOut" v-on:click="click" v-bind:class="{ active: isActive, hovered: isHovered }" v-bind:style="{backgroundColor: section.attributes['background-color']}">
    <sectionActions v-if="isHovered" v-on:duplicate="copySection" v-on:remove="deleteSection"></sectionActions>
		<div style="margin:0px auto;max-width:600px;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0">
				<tbody>
					<tr>
						<td v-bind:style="{ padding: padding }" style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;">
							<mjmlColumn v-for="(column, columnIndex) in section.children" :columnIndex="columnIndex" :sectionIndex="index"></mjmlColumn>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import mjmlColumn from './mjmlColumn.vue'
import sectionActions from './sectionActions.vue'

//  v-bind:style="{ backgroundColor: section.attributes['background-color'] }"

export default {

	name: 'mjmlSection',
	props: ['index'],
	
	data () {
  	return {
  		//section: this.$store.state.definition.sections[this.index],
      section: this.$store.state.mjml.children[0].children[this.index],
  		isActive: false,
      isHovered: false
  	}
  },

  computed: {

    padding () {
      if(this.section.attributes['padding-top'])
        return this.section.attributes['padding-top'] + 'px 0px'
      else
        return '20px 0px'
    },

  },
	
	components: {
  	mjmlColumn,
    sectionActions
	},

	created:function()
  {
  },

  updated:function()
  {
    //console.log('updated')
    //console.log('Section updated: ' + this.index)
  },

  methods: {
  	deselect: function(){
			this.isActive = false
		},
    mouseOver: function(){
      this.isHovered = true
    },
    mouseOut: function(){
      this.isHovered = false
    },
    click: function(){
    	this.isActive = true
      this.$store.dispatch('setSelectedSection', this)
    },
    copySection: function(){
      this.$store.dispatch('duplicateSection', {'sectionIndex': this.index});
    },
    deleteSection: function(){
      this.$store.dispatch('deleteSection', {'sectionIndex': this.index});
    }
  }
}
</script>
