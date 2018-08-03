<template>
  <div class="hello mdc-typography">
    <mdc-display>{{ msg }}</mdc-display>
  </div>
</template>

<script>
let tableauAPI = require('../js/tableau-extensions-1.latest.min.js');

export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Tableau Extension'
    }
  },
  methods: {
      configure: function(){
        const popupUrl = 'http://localhost:8080/#/configure';
  tableau.extensions.ui
    .displayDialogAsync(popupUrl, "Payload Message", {
      height: 500,
      width: 500
    })
    .then(closePayload => {})
    .catch(error => {
      switch (error.errorCode) {
        case tableau.ErrorCodes.DialogClosedByUser:
          console.log("Dialog was closed by user");
          break;
        default:
          console.error(error.message);
      }
    });
      }
  },
  mounted: function(){
      tableau.extensions.initializeAsync({ configure: this.configure }).then(function() {
    tableau.extensions.settings.addEventListener(
      tableau.TableauEventType.SettingsChanged,
      settingsEvent => {}
    );
  });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
