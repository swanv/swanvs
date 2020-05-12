<template>
  <div>
    <p>{{ msg }}</p>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Ping',
  data() {
    return {
      msg: ''
    }
  },
  methods: {
      getMessage(){
          const path = 'http://localhost:5000/api/ping'
          axios.get(path)
            .then((res)=>{
                this.msg = res.data;
            })
            .catch((error)=>{
                console.error(error);
            })
      }
  },
  created(){
      this.getMessage()
  }
}
</script>