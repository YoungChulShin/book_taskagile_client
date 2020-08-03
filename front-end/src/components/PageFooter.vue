<template>
  <footer class="footer">
    <span class="copyright">&copy; 2018 TaskAgile.com</span>
    <ul class="footer-links list-inline float-right">
      <li class="list-inline-item"><a href="#">About</a></li>
      <li class="list-inline-item"><a href="#">Terms of Service</a></li>
      <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
      <li class="list-inline-item"><a href="https://github.com/taskagile/vuejs.spring-boot.mysql" target="_blank">GitHub</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    line-height: 40px;
    margin-top: 50px;
    font-size: 13px;
    color: #666;
    border-top: 1px sold #ddd;

    .list-inline-item {
      margin-right: 10px;
    }

    a {
      color: #666;
    }
}
</style>
