<template>
  <div class="container">
    <template v-for="(alert, index) in alerts">
      <alert
        :key="index"
        v-if="alert.showAlert"
        v-bind:variant="alert.alertVariant"
        v-bind:message="alert.alertMessage">
      </alert>
    </template>
   <q-btn color="primary" label="HomePage" />
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'Home',
  componts: {
    alert: Alert
  },
  data () {
    return {
      alert: [
        {
          showAlert: true,
          alertVariant: 'danger',
          alertMessage: 0
        },
        {
          showAlert: true,
          alertVariant: 'info',
          alertMessage: 0
        },
        {
          showAler: true,
          alertVariant: 'dark',
          alertMessage: 2
        }
      ]
    }
  }
}
</script>
