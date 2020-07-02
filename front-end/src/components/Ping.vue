<template>
  <div>
    <q-btn color='primary'>{{ msg }}</q-btn>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Ping',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getMessage () {
      const path = 'http://localhost:5000/api/ping'
      axios.get(path)
        .then((res) => {
          this.msg = res.data
        })
        .catch((error) => {
        // eslint-diable-next-line
          console.error(error)
        })
    }
  },
  created () {
    this.getMessage()
  }
}
</script>
