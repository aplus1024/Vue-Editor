<template>
  <div class="blockActions">
    <a class="copy" @click.stop="copyBlock"><i class="icon-files-o"></i></a>
    <a class="delete" @click.stop="deleteBlock"><i class="icon-trash"></i></a>
  </div>
</template>

<script>

export default {

  name: 'blockActions',
  props: [],
  
  data () {
      return {
        
      }
  },

  methods: {
    copyBlock: function(){
      //this.$store.dispatch('duplicateBlock');
      this.$emit('duplicate')
    },
    deleteBlock: function(){
      //this.$store.dispatch('deleteBlock');
      this.$emit('remove')
    },
  },
  
  components: {
      
  }
}
</script>
