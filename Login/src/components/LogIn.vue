<template>
  <section>
    <div class="web_bg"></div>

    <form>
      <h4>知识库管理系统</h4>
      <li class="input"><img src="../assets/my.png"><input class="name" type="text" placeholder="Enter Username" v-model="Username"></li>
      <li class="input"><img src="../assets/mm.png"><input class="pw" type="password" placeholder="Enter Password" v-model="Password"></li>
      <label class="checkbox">
        <input type="checkbox">
        <span>记住我</span>
      </label>
      <button class="button" type="button" @click="fSure">登录</button>
      <ul class="fog">
        <li><a href="#">现在注册!</a></li>
        <li><a href="#">忘记密码?</a></li>
      </ul>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'LogIn',
    data() {
      return {
        Username: '',
        Password: ''
      }
    },
    methods: {
      fSure() {
        if (this.Username == '') {
          alert('用户名 必须填');
          return
        }
        if (this.Password.length < 6) {
          alert('密码长度 必须6位数以上')
          return
        }
        alert('登陆成功')
        location.reload();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
