<template>
  <div>
    <div class="web_bg"></div>

    <form class="web_form">
      <h4>企业知识库管理系统</h4>
      <li class="input">
        <img src="../assets/my.png">
        <input class="name" type="text" placeholder="Username" 
        @focus="focususername" 
        @blur="blurusername" 
        v-model="userNameStr"
        v-bind:style="{'border-bottom-color':UNborderColor}"/>
      </li>
      <li id="err">
            <p v-if="UNSeen">{{UNERR}}</p>
      </li>
        
      <li class="input">
        <img src="../assets/mm.png">
        <input class="pw" type="password" placeholder="Password" 
        @focus="focusPassWord" 
        @blur="blurPassWord" 
        v-model="passWordStr"
        v-bind:style="{borderColor:PWDborderColor}"/>
      </li>
      <li id="err">
            <p v-if="PWDSeen">{{PWDERR}}</p>
      </li>

      <label class="checkbox">
        <input type="checkbox">
        <span>记住我</span>
      </label>
      <div id="loginButton" class="button"  v-on:click="loginClick">登  录</div>
      <ul class="fog">
        <li><a href="#">现在注册!</a></li>
        <li><a href="#">忘记密码?</a></li>
      </ul>
    </form>
   </div>
</template>

<script>
  export default {
    name: 'LogIn',
    data() {
      return {
        userNameStr:'',
        passWordStr:'',
        PWDborderColor:'',
        UNborderColor:'',
        UNERR:'',
        UNSeen:false,
        PWDERR:'',
        PWDSeen:false,
      }
    },
    methods: {
      focususername:function(){
      this.UNborderColor='rgb(39,166,155)';
      this.UNSeen=false;
      },
      blurusername:function(){
        if(this.userNameStr=='')
        {
          this.UNborderColor='red';
          this.UNSeen=true;
          this.UNERR='用户名不能为空'
        }
        else{
          this.UNborderColor='green';
        }
      },

      focusPassWord:function(){
      this.PWDborderColor='';
      this.PWDSeen=false;
      },
      blurPassWord:function(){
        if(this.passWordStr=='')
        {
          this.PWDborderColor='red';
          this.PWDSeen=true;
          this.PWDERR='请输入密码';
        }
        else{
          this.PWDborderColor='green';
        }
      },

      loginClick:function(){
        if(this.UNborderColor=='green' &&
        this.PWDborderColor=='green'){

          this.$http.get('http://www.ls1rius.com:8080/login', {
              params: {
                "username": this.userNameStr,  
                "password": this.passWordStr,
              },
              dataType:'json'
          }).then((res) => {
              // res.forEach(function (c) {  
              //   console.log(c);
              // })
              console.log(res.body.result);
              console.log(res.body.msg);
              alert("登录成功");
          }, (response) => {
            // error callback
          });
          
        }
        else{
          alert("登录失败");
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
