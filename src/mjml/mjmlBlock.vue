<script>

import mjimage from './mjimage.vue'
import mjdivider from './mjdivider.vue'
import mjbutton from './mjbutton.vue'
import mjspacer from './mjspacer.vue'
import mjtext from './mjtext.vue'
import mjraw from './mjraw.vue'

export default {
  name: 'mjmlBlock',
  props: ['block', 'columnIndex', 'sectionIndex', 'blockIndex'],
  data () {
    return {
      
    }
  },
  render: function (createElement) {
    return createElement(this.block.tagName.replace('-', ''), {
      props: {
        block: this.block,
        columnIndex: this.columnIndex,
        sectionIndex: this.sectionIndex,
        blockIndex: this.blockIndex
      }
    })
  },
  components: {
    mjimage,
    mjbutton,
    mjspacer,
    mjtext,
    mjraw,
    mjdivider
  }
}
</script>
