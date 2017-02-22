<template>
	<div id="structures">
    <draggable :options="{group: {'name': 'sections', 'pull': 'clone', 'put': false}, sort: false}">
      <div class="structure" data-cols="1"><img src="/src/assets/img/cols-1.png" alt="" /></div>
      <div class="structure odd" data-cols="2"><img src="/src/assets/img/cols-2.png" alt="" /></div>
      <div class="structure" data-cols="3"><img src="/src/assets/img/cols-3.png" alt="" /></div>
      <div class="structure odd" data-cols="4"><img src="/src/assets/img/cols-4.png" alt="" /></div>
      <div class="structure" data-cols="12"><img src="/src/assets/img/cols-12.png" alt="" /></div>
      <div class="structure odd" data-cols="21"><img src="/src/assets/img/cols-21.png" alt="" /></div>
    </draggable>
	</div>
</template>

<script>

import draggable from 'vuedraggable'

export default {
  name: 'structureBlocks',
  data () {
    return {
      msg: ''
    }
  },

  components: {
    draggable
  }
}
</script>
