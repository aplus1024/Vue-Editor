<script>
import blockActions from './blockActions.vue'

export default {
	name: 'mjmlBase',

  props: ['block', 'columnIndex', 'sectionIndex', 'blockIndex'],

	data () {
  	return {
    		isHovered: false,
        isActive: false
  	}
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
      if(!this.isActive){
        this.isActive = true
        this.$store.dispatch('setSelectedBlock', this)
      }
        
        //this.$store.dispatch('reorderBlocks', {'sectionIndex': 0, 'columnIndex': 0, 'oldIndex': 0, 'newIndex': 1})
    },
    copyBlock: function(){
      this.$store.dispatch('duplicateBlock', {'sectionIndex': this.sectionIndex, 'columnIndex': this.columnIndex, 'blockIndex': this.blockIndex});
    },
    deleteBlock: function(){
      this.$store.dispatch('deleteBlock', {'sectionIndex': this.sectionIndex, 'columnIndex': this.columnIndex, 'blockIndex': this.blockIndex});
    }
  },

  updated:function()
  {
  },

  components: {
    blockActions
  }
}
</script>
