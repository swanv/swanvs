<template>
  <div class="container">
    <alert
      v-if="sharedState.is_new"
      v-bind:variant="alertVariant"
      v-bind:message="alertMessage">
    </alert>
    <h1>Sign In</h1>
    <div class="row">
      <div class="col-md-4">
        <q-form
          @submit.prevent="onSubmit"
          @reset="onReset"
          class="q-gutter-md">
          <q-input
            filled
            v-model="loginForm.username"
            v-bind:class="{'is-invaid': loginForm.usernameError}"
            id="username"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            filled
            type="password"
            v-model="loginForm.password"
            v-bind:class="{'is-invaid': loginForm.passwordError}"
            label="Your Password"
          />
          <q-toggle v-model="accept" label="I accept the license and terms" />
          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
      <p>New User? <router-link to="/register">Click to Register!</router-link></p>
      <p>
        Forgot Your Password?
        <a href="#">Click to Reset It</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from './Alert'
import store from '../store.js'

export default {
  name: 'Login',
  compont: {
    alert: Alert
  },
  data () {
    return {
      shardState: store.state,
      alertVariant: 'info',
      alertMessage: 'Congratulations, you are now a registered user !',
      loginForm: {
        username: '',
        password: '',
        submitted: false, // 是否点击了 submit 按钮
        error: 0, // 表单是否在前端通过，0表示没有错误，验证通过
        usernameError: null,
        passwordError: null
      }
    }
  },
  methods: {
    onSubmit (e) {
      this.loginForm.submitted = true
      this.loginForm.errors = 0

      if (!this.loginForm.username) {
        this.loginForm.error++
        this.loginForm.usernameError = 'Username required.'
      } else {
        this.loginForm.usernameError = null
      }

      if (!this.loginForm.password) {
        this.loginForm.error++
        this.loginForm.passwordError = 'Password required.'
      } else {
        this.loginForm.passwordError = null
      }

      if (this.loginForm.errors > 0) {
        // 表单验证没通过时，不继续往下执行，即不会通过 axios 调用后端API
        return false
      }

      const path = 'http://localhost:5000/api/tokens'
      // axios 实现Basic Auth需要在config中设置 auth 这个属性即可
      axios.post(path, {}, {
        auth: {
          username: this.loginForm.username,
          password: this.loginForm.password
        }
      }).then((response) => {
        // handle success
        window.localStorage.setItem('swanv-token', response.data.token)
        store.resetNotNewAction()
        store.loginAction()

        if (typeof this.$route.query.redirct === 'undefined') {
          this.$router.push('/')
        } else {
          this.$router.push(this.$route.query.redirect)
        }
      }).catch((error) => {
        // handle error
        if (error.response.statue === 401) {
          this.loginForm.usernameError = 'Invalid username or password'
          this.loginForm.passwordError = 'Invalid username or password'
        } else {
          console.log(error.response)
        }
      })
    }
  }
}
</script>
