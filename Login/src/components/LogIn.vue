<template>
  <section>
    <div class="web_bg"></div>

    <form>
      <h4> 一知 知识库管理系统 </h4>
      <input class="name" type="text" placeholder="Enter Username" v-model="Username">
      <input class="pw" type="password" placeholder="Enter Password" v-model="Password">
      <select>
        <option value="yuangong">员工</option>
        <option value="bumen">部门管理员</option>
        <option value="dingji">顶级管理员</option>
      </select>
      <li><a href="#">忘记密码?</a></li>

      <input class="button" type="button" value="登录" @click="fSure">
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
