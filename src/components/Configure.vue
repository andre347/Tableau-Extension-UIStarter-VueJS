<template>
  <div class="mdc-typography">
    <mdc-card>
          <mdc-tab-bar>
            <mdc-tab active>CONFIGURE</mdc-tab>
            <mdc-tab to='/about'>ABOUT</mdc-tab>
        </mdc-tab-bar>

          <mdc-card-text>
        </mdc-card-text>
          <mdc-card-actions>
    <mdc-card-action-buttons>
      <mdc-card-action-button>RESET</mdc-card-action-button>
    </mdc-card-action-buttons>
  </mdc-card-actions>
    </mdc-card>
  </div>

</template>

<script>

let tableauAPI = require('../js/tableau-extensions-1.latest.min.js');


export default {
  name: 'Configure',
  data () {
    return {
      text: ''
    }
  },
  methods: {
      onSelected(idx) {
          console.log(`selected index: ${idx}`);
        }
  },
  mounted: function(){
      tableau.extensions.initializeDialogAsync().then(function (openPayload) {

  });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
