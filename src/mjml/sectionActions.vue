<template>
  <div class="sectionActions">
    <a class="copy" @click="copySection"><i class="icon-files-o"></i></a>
    <a class="delete" @click="deleteSection"><i class="icon-trash"></i></a>
  </div>
</template>

<script>

export default {

  name: 'sectionActions',
  props: [],
  
  data () {
      return {
        
      }
  },

  methods: {
    copySection: function(){
      //this.$store.dispatch('duplicateSection')
      this.$emit('duplicate')
    },
    deleteSection: function(){
      //this.$store.dispatch('deleteSection')
      this.$emit('remove')
    },
  },
  
  components: {
      
  }
}
</script>
