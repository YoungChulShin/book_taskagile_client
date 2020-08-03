<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="register-form">
        <Logo/>
        <form @submit.prevent="submitForm">
          <div v-show="errorMessage" class="alert alert-danger failed">{{errorMessage}}</div>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" v-model="form.username">
          </div>
          <div class="form-group">
            <label for="emailAddress">Email address</label>
            <input type="email" class="form-control" id="emailAddress" v-model="form.emailAddress">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="form.password">
          </div>
          <button type="submit" class="btn btn-primary btn-block">Create account</button>
        </form>
      </div>
    </div>
    <PageFooter/>
  </div>
</template>

<script>

import Logo from '@/components/Logo'
import PageFooter from '@/components/PageFooter'
import registrationService from '@/services/registration'

export default {
  name: 'RegisterPage',
  data: function () {
    return {
      form: {
        username: '',
        emailAddress: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    submitForm () {
      registrationService.register(this.form).then(() => {
        this.$router.push({ name: 'LoginPage' })
      }).catch((error) => {
        this.errorMessage = 'Failed to register user. Reason: ' +
          (error.message ? error.message : 'Unknown') + '.'
      })
    }
  },
  components: {
    Logo,
    PageFooter
  }
}
</script>

<style scoped>
.container {
    max-width: 900px;
}
.register-form {
    margin-top: 50px;
    max-width: 320px;
}

</style>
