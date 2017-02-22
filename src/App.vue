<template>

  <div id="app" v-bind:class="{ preview: previewMode }">

    <div id="leftPane">

      <div>

        <editorHeader></editorHeader>

        <el-tabs v-model="selectedTab" @tab-click="handleClick">

          <el-tab-pane label="Obsah" name="blocks">

            <div v-if="activeBlock">
              <blockForm :block="activeBlock"></blockForm>
            </div>

            <contentBlocks v-else></contentBlocks>

          </el-tab-pane>

          <el-tab-pane label="Struktura" name="sections">

            <div v-if="activeSection">
              <sectionForm :section="activeSection"></sectionForm>
            </div>

            <structureBlocks v-else></structureBlocks>

          </el-tab-pane>

          <el-tab-pane label="Nastavení" name="settings">
            <settingsForm></settingsForm>
          </el-tab-pane>

        </el-tabs>

      </div>

    </div>

    <div id="rightPane">

      <topBar></topBar>
      
      <email :preview="this.$store.state.previewMode"></email>
      
    </div>

  </div>
</template>

<script>

import editorHeader from './layout/editorHeader.vue'
import structureBlocks from './layout/structureBlocks.vue'
import contentBlocks from './layout/contentBlocks.vue'
import email from './layout/email.vue'
import topBar from './layout/topBar.vue'
import settingsForm from './forms/settingsForm.vue'

import blockForm from './forms/blockForm.vue'
import sectionForm from './forms/sectionForm.vue'

import draggable from 'vuedraggable'

export default {
  
  name: 'app',

  data () {

    return {
      activeTab: 'blocks'
    }

  },

  computed: {

    activeBlock () {
      return this.$store.state.selectedBlock
    },

    selectedTab () {
      if(this.activeBlock){
        return 'blocks'
      } else if(this.activeSection) {
        return 'sections'
      } else {
        return this.activeTab
      }
    },

    activeSection () {
      return this.$store.state.selectedSection
    },

    previewMode () {
      return this.$store.state.previewMode
    }

  },

  components: {

    editorHeader,
    structureBlocks,
    contentBlocks,
    email,
    draggable,
    blockForm,
    sectionForm,
    settingsForm,
    topBar

  },

  methods: {

    clearSelection: function(){
      this.$store.dispatch('clearSelection')
    },

    handleClick(tab, event) {
      //console.log(tab, event);
      //console.log(tab)
      this.activeTab = tab.name
      this.$store.dispatch('clearSelection')
    }

  },

  created: function()
  {

  },

  updated:function()
  {
    //console.log('updated App.vue')
  },

  mounted:function()
  {
    
  }
}
</script>
