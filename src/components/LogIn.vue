<template>
  <div class="mydiv">

    <form class="web_form">
      <h4>知识库管理系统</h4>
        <div class="reg-bd">  
        <ul class="reg-list">
          <li class="myli">
            <div class="mylabel">
              
              用 户 名：
              </div>
              <div class="r-txt">
                <input type="text" 
                placeholder="Username" 
                class="inptxt" 
                id="userName" 
                maxlength="20" 
                @focus="focususername" 
                @blur="blurusername"
                v-model="userNameStr"
                v-bind:style="{'border-bottom-color':UNborderColor}"/>
              </div>
          </li>
          <li id="err">
            <p class="myp" v-if="UNSeen">{{UNERR}}</p>
          </li>
          <li  class="myli">
            <div class="mylabel">
              
              登录密码：
            </div>
            <div class="r-txt">
              <input placeholder="Password" 
              class="inptxt" 
              id="passWord" 
              type="password" 
              maxlength="25" 
              @focus="focusPassWord"
              @blur="blurPassWord"
              v-model="passWordStr"
              v-bind:style="{borderColor:PWDborderColor}"/>
            </div>
          </li>
          <li id="err">
            <p class="myp" v-if="PWDSeen">{{PWDERR}}</p>
          </li>
        </ul>
      </div>
      <!-- <li class="input">
        <img src="/static/image/my.png">
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
        <img src="/static/image/mm.png">
        <input class="pw" type="password" placeholder="Password" 
        @focus="focusPassWord" 
        @blur="blurPassWord" 
        v-model="passWordStr"
        v-bind:style="{borderColor:PWDborderColor}"/>
      </li>
      <li id="err">
            <p v-if="PWDSeen">{{PWDERR}}</p>
      </li> -->

      <!-- <label class="checkbox">
        <input type="checkbox">
        <span>记住我</span>
      </label> -->
      <div id="loginButton" class="button"  v-on:click="loginClick">登  录</div>
      <ul class="fog">
        <li v-on:click="gotoregister"><a>现在注册!</a></li>
        <li v-on:click="forgetPWD"><a>忘记密码?</a></li>
      </ul>
    </form>
    <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
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
      gotoregister:function(){
        this.$router.push({path:'/register'});
      },
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
      forgetPWD:function(){
        alert("巧了，我也不知道");
      },
      loginClick:function(){
        if(this.UNborderColor=='green' &&
        this.PWDborderColor=='green'){
          // this.$http.get('http://www.ls1rius.com:8080/login', {
          //     params: {
          //       "username": this.userNameStr,  
          //       "password": this.passWordStr,
          //     },
          //     dataType:'json'
          // }).then((res) => {
          //     // res.forEach(function (c) {  
          //     //   console.log(c);
          //     // })
          //     console.log(res.body.result);
          //     console.log(res.body.msg);
          //     alert("登录成功");
          //     this.$router.push({ path: '/module' })
          // }, (response) => {
          //   // error callback
          // });
          var self = this;
          var info ={
            "username": this.userNameStr,  
            "password": this.passWordStr,
          };
          $.ajax({  
            url :"http://www.ls1rius.com:8080/login",   
            cache : true, 
            type : "get",
            xhrFields: {
                withCredentials: true
            },
            datatype : "json",  
            contentType : "application/json; charset=utf-8",  
            data : info,  
            success : function (data){  
                console.log(data.result);
                if(data.result==false){
                  alert("账号密码错误，请重新登录");
                }
                else{
                  self.$router.push({ path: '/module' });
                }
            }
        })

        }
        else{
          alert("请填写账号密码");
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}

body {
  background: #06689f; /*From http://flatuicolors.com/ */
}


.web_form {
  position:relative;
  width:350px;
  height:300px;
  text-align:center;
  background:white;
  padding:40px;
  margin: auto;
  /* -webkit-border-radius:20px 0 0 0;
     -moz-border-radius:20px 0 0 0;
          border-radius:20px 0 0 0;
  -webkit-box-shadow: 0px 1px 0px #ad392d, inset 0px 1px 0px white;
     -moz-box-shadow: 0px 1px 0px #ad392d, inset 0px 1px 0px white;
          box-shadow: 0px 1px 0px #ad392d, inset 0px 1px 0px white; */
  box-shadow: 3px 3px 5px;
  box-sizing: content-box;
  z-index: 999;

}

h4 {
  font-family: 'Microsoft Yahei';
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 25px;
  color: #000000;
  text-shadow:1px 1px 0px white;
}

/*input {
  display: block;
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  border: 0;
  margin-bottom: 25px;
  color: #7f8c8d;
  font-weight: 600;
  font-size: 16px;
}*/
.input{
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}
.input input{

  flex: 1;
  padding: 14px;
  background: none;
  color: #7f8c8d;
  font-weight: 600;
  font-size: 16px;
  border: none;outline:none;
  border-bottom: 1px solid #20B2AA;
}

.input input:focus {
  background: none;
}
.input input:active{
  background: none;
}
.input img{width: 30px}
li,ul {
  list-style: none;
}
.checkbox{
  text-align: left;
  font-size: 17px;
  display: flex;
  margin-left: 20px;
}
select {
  height: 30px;
  width: 100px;
  position: absolute;
  right: 130px;
  bottom: 52px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #7f8c8d;
  list-style: none;
  border: none;
}

option {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #7f8c8d;
}

a, a:visited {
  text-decoration: none;
  color: #7f8c8d;
  font-weight: 400;
  text-shadow: 1px 1px 0px white;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}

.button {
  width:355px;
  height: 40px;
  margin-top:20px;
  background:rgb(39,166,155);
  color:rgb(227, 233, 232);
  font-weight: bolder; 
  font-size: 20px;
  box-shadow:0px 3px 0px #2d7baf;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 3px #ccc;
  cursor: pointer;
}

.fog{
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  margin-top: 40px;
}
.fog a:hover{ cursor: pointer; color: #20B2AA}

p {
  width: 230px;
  height: 30px;
  text-align: center;
  line-height: 0px;
  color: #f00;
  font-size: 10px;
  text-align:left;
  margin-left: 30px;
}

#err {
  height: 14px;
  margin-bottom: 10px;
}

.mydiv {
    background: #50a3a2;
    background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
    position: absolute;
    /*top: 50%;*/
    top: 0;
    left: 0;
    width: 100%;
    /*height: 400px;*/
    height: 100%;
    /*margin-top: -200px;*/
    overflow: hidden;
    display: flex;
}
.bg-bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.bg-bubbles li {
    position: absolute;
    list-style: none;
    display: block;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.15);
    bottom: -160px;
    -webkit-animation: square 25s infinite;
    animation: square 25s infinite;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
}
.bg-bubbles li:nth-child(1) {
    left: 10%;
}
.bg-bubbles li:nth-child(2) {
    left: 20%;
    width: 80px;
    height: 80px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 17s;
    animation-duration: 17s;
}
.bg-bubbles li:nth-child(3) {
    left: 25%;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
}
.bg-bubbles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    -webkit-animation-duration: 22s;
    animation-duration: 22s;
    background-color: rgba(255, 255, 255, 0.25);
}
.bg-bubbles li:nth-child(5) {
    left: 70%;
}
.bg-bubbles li:nth-child(6) {
    left: 80%;
    width: 120px;
    height: 120px;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    background-color: rgba(255, 255, 255, 0.2);
}
.bg-bubbles li:nth-child(7) {
    left: 32%;
    width: 160px;
    height: 160px;
    -webkit-animation-delay: 7s;
    animation-delay: 7s;
}
.bg-bubbles li:nth-child(8) {
    left: 55%;
    width: 20px;
    height: 20px;
    -webkit-animation-delay: 15s;
    animation-delay: 15s;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
}
.bg-bubbles li:nth-child(9) {
    left: 25%;
    width: 10px;
    height: 10px;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-duration: 40s;
    animation-duration: 40s;
    background-color: rgba(255, 255, 255, 0.3);
}
.bg-bubbles li:nth-child(10) {
    left: 90%;
    width: 160px;
    height: 160px;
    -webkit-animation-delay: 11s;
    animation-delay: 11s;
}
@-webkit-keyframes square {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(-700px) rotate(600deg);
        transform: translateY(-700px) rotate(600deg);
    }
}
@keyframes square {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(-700px) rotate(600deg);
        transform: translateY(-700px) rotate(600deg);
    }
}


.reg-list {
    padding-top: 20px;
}

.reg-list li {
    height: 30px;
    line-height: 30px;
    margin-bottom: 5px;
    zoom: 1;
    /* display: block; */
}
.reg-list .mylabel {
    display: block;
    height: 30px;
    float: left;
    text-align: center;
    width: 100px;
    padding-right: 5px;
    font-weight: bold;
    color: black;
}
.reg-list .r-txt {
    float: left;
}

.inptxt {
  display:block;
  width:240px;
  padding:5px;
  margin-bottom:12px;
  /* background-color: #ecf0f1; */
  font-weight:300;
  font-size:16px;
  border-left:none;
  border-top: none;
  border-right: none;
  border-bottom-color:rgb(39,166,155);
  outline: none;
  line-height: normal;
}
input:focus {
  background:#fafafa;
}
.myp {
  width: 230px;
  height: 30px;
  margin-left: 110px;
  text-align: center;
  line-height: 0px;
  color: #f00;
  font-size: 10px;
  text-align:left;
}
.myli {
	list-style: none;
}
</style>
