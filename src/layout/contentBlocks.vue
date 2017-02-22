<template>
	<div id="blocks">
    <draggable :options="{group: {'name': 'blocks', 'pull': 'clone', 'put': false}, sort: false}">
      <textBlock></textBlock>
  		<imageBlock></imageBlock>
      <buttonBlock></buttonBlock>
  		<dividerBlock></dividerBlock>
      <spacerBlock></spacerBlock>
    </draggable>
	</div>
</template>

<script>

import imageBlock from '../blocks/imageBlock.vue'
import dividerBlock from '../blocks/dividerBlock.vue'
import spacerBlock from '../blocks/spacerBlock.vue'
import buttonBlock from '../blocks/buttonBlock.vue'
import rawBlock from '../blocks/rawBlock.vue'
import textBlock from '../blocks/textBlock.vue'

import draggable from 'vuedraggable'

export default {
  name: 'contentBlocks',
  data () {
    return {
      msg: ''
    }
  },

  components: {
    imageBlock,
    dividerBlock,
    spacerBlock,
    buttonBlock,
    rawBlock,
    textBlock,
    draggable
  }
}
</script>
