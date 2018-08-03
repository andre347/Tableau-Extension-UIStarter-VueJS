<template>
    <div class="mdc-typography">
    <mdc-card>
          <mdc-tab-bar>
            <mdc-tab to="/configure">CONFIGURE</mdc-tab>
            <mdc-tab active>ABOUT</mdc-tab>
        </mdc-tab-bar>
  <mdc-card-header :title="title" :subtitle="author" />
    <mdc-card-text>
        {{ text }}
        <p>
    <img src="../assets/logo.png" alt="image" style="width: 250px;">
    </p>
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
export default {
    name: 'About',
    data () {
    return {
      title: 'Tableau Extension',
      author: 'Created by Andre de Vries',
      text: 'Boilerplate extension created for VueJS'
    }
  },
  methods: {
      onSelected(idx) {
          console.log(`selected index: ${idx}`);
        }
  }
}
</script>

<style scoped>
</style>

