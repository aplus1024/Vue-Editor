<script>

import mjimageForm from './mjimageForm.vue'
import mjdividerForm from './mjdividerForm.vue'
import mjbuttonForm from './mjbuttonForm.vue'
import mjspacerForm from './mjspacerForm.vue'
import mjtextForm from './mjtextForm.vue'
import mjrawForm from './mjrawForm.vue'

export default {
  name: 'blockForm',
  props: ['block'],
  data () {
    return {
      
    }
  },
  render: function (createElement) {
    console.log('render in blockForm.vue')
    return createElement(this.block.$options.name + 'Form', {
      props: {
        block: this.block,
        columnIndex: this.block.columnIndex,
        blockIndex: this.block.blockIndex
      }
    })
  },

  updated:function()
  {
    //console.log(this.block.blockIndex)
    //console.log('updated blockForm.vue')
    console.log(this.block.columnIndex)
    console.log(this.block.blockIndex)
  },

  components: {
    mjimageForm,
    mjdividerForm,
    mjbuttonForm,
    mjrawForm,
    mjtextForm,
    mjspacerForm
  }
}
</script>
