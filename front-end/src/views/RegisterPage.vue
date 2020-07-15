<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="register-form">
        <div class="logo-wrapper">
          <img class="logo" src="/static/images/logo.png">
          <div class="tagline">Open source task management tool</div>
        </div>
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username"/>
          </div>
          <div class="form-group">
            <label for="emailaddress">Email address</label>
            <input type="email" class="form-control" id="emailAddress"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password"/>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Create Account</button>
        </form>
      </div>
    </div>
    <footer class="footer">
      <span class="copyright">&copy; 2018 TaskAgile.com</span>
      <ul class="footer-links list-inline float-right">
        <li class="list-inline-item"><a href="#">About</a></li>
        <li class="list-inline-item"><a href="#">Terms of Service</a></li>
        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        <li class="list-inline-item"><a href="https://github.com/youngchulshin" target="_blank">Github</a></li>
      </ul>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class RegisterPage extends Vue {
  // data

  // methods
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

.logo-wrapper {
  margin-top: 40px;
}

.footer {
  width: 100%;
  line-height: 40px;
  margin-top: 50px;
}
</style>
