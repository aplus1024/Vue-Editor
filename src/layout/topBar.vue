<template>
  
  <div id="topBar">

    <div>

      <div id="mainNav">

      	<el-button :plain="true" type="info" v-on:click="togglePreviewMode"><i class="icon-desktop"></i> Náhled a testování</el-button>

      	<el-button type="success">Uložit a zavřít</el-button>

      </div>

      <div id="previewNav">
        
        <div id="previewMode">
          <div class="icon-desktop"></div>
          <el-switch v-model="mobile" on-text="" off-text=""></el-switch>
          <div class="icon-mobile" style="font-size: 22px;"></div>
        </div>
        
        <div id="sendPreview">
          <el-button type="success"><i class="icon-send"></i></el-button>
          <el-input placeholder="E-mailová adresa"></el-input>
          <span>POŠLETE SI TESTOVACÍ E-MAIL</span>
        </div>

      </div>

    </div>
  	
  </div>

</template>

<script>

export default {

	name: 'topBar',
	props: [],

	data () {
		return {
			'mobile': false
		}
  },

  methods: {

  	togglePreviewMode: function(){
  		this.$store.dispatch('togglePreview')
  	}

  }

}
</script>
