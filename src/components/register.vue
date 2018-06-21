<template>
  <div class="mydiv">
    <!-- <div class="web_bg">
    </div> -->
    <form class="web_form">
      <h4 class="myh4"> 知识库管理系统 </h4>
      <div class="reg-bd">  
        <ul class="reg-list">
          <li class="myli">
            <div class="mylabel">
              
              用 户 名：
              </div>
              <div class="r-txt">
                <input type="text" 
                placeholder="须以字母开头,不能含符号" 
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
              <input placeholder="6-20位字母、数字或符号" 
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
          <li class="myli">
            <div class="mylabel">
              确认密码：
            </div>
            <div class="r-txt">
              <input placeholder="再次输入您的登录密码" 
              class="inptxt" 
              id="confirmPassWord" 
              type="password" 
              maxlength="25" 
              @focus="focusConfirmPassWord"
              @blur="blurConfirmPassWord"
              v-model="confirmPassWordStr"
              v-bind:style="{borderColor:CPWDborderColor}"/>
            </div>
          </li>
          <li id="err">
            <p class="myp" v-if="CPWDSeen">{{CPWDERR}}</p>
          </li>
          <li  class="myli">
            <div class="mylabel">
              真实姓名：
            </div>
            <div class="r-txt">
              <input placeholder="输入您的真实姓名" 
              class="inptxt" 
              id="realName" 
              type="text" 
              maxlength="25" 
              @focus="focusrealName"
              @blur="blurrealName"
              v-model="realNameStr"
              v-bind:style="{borderColor:RNborderColor}"/>
            </div>
          </li>
          <li id="err">
            <p class="myp" v-if="RNSeen">{{RNERR}}</p>
          </li>
          <li class="myli">
              <div class="mylabel">手机号码：
              </div>
              <div class="r-txt">
                <input type="text" 
                placeholder="请输入您的手机号码" 
                class="inptxt" 
                id="mobileNo" 
                maxlength="11" 
                @focus="focusPhone"
                @blur="blurPhone"
                v-model="PhoneStr"
                v-bind:style="{borderColor:PborderColor}"
                />
              </div>
          </li>
          <li id="err">
            <p class="myp" v-if="PSeen">{{PERR}}</p>
          </li>
        </ul>
      </div>
      <div id="registerButton" class="button" v-on:click="registerClick">注  册</div>
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
  name: 'App',
  data(){
    return{
      UNborderColor:'',
      userNameStr:'',
      PWDborderColor:'',
      passWordStr:'',
      CPWDborderColor:'',
      confirmPassWordStr:'',
      PhoneStr:'',
      PborderColor:'',
      UNERR:'',
      UNSeen:false,
      PWDERR:'',
      PWDSeen:false,
      CPWDERR:'',
      CPWDSeen:false,
      PERR:'',
      PSeen:false,
      realNameStr:'',
      RNborderColor:'',
      RNSeen:'',
      RNERR:'',
    }
  },
  methods:{
    focususername:function(){
      this.UNborderColor='rgb(39,166,155)';
      this.UNSeen=false;
    },
    blurusername:function(){
      if(this.userNameStr=='')
      {
        this.UNborderColor='red';
        this.UNSeen=true;
        this.UNERR='用户名不能为空';
      }
      else {

        var reg=/^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9_\u4E00-\u9FA5]{5,19}$/;
        if(this.userNameStr.length<6 || this.userNameStr.length>30){
          this.UNborderColor='red';
          this.UNSeen=true;
          this.UNERR='长度不符，需6到20位';
        }
        else if(!reg.test(this.userNameStr)){
          this.UNborderColor='red';
          this.UNSeen=true;
          this.UNERR='只能由字母、数字和_组成,须以字母开头！';
        }
        else{
            this.$http.get('http://www.ls1rius.com:8080/isUserNameExist', {
                params: {
                      "username": this.userNameStr,
                },
                dataType:'json'
                }).then((un) => {
                  if(un.body.result=='exist'){
                    this.UNborderColor='red';
                    this.UNSeen=true;
                    this.UNERR='用户名已存在';
                  }
                  else{
                    this.UNborderColor='green';
                  }
                }, (response) => {
                  // error callback
            });
              
        }
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
      else {
        var reg=/^([A-Z]|[a-z]|[0-9]|[`~!@#$%^&*()+=|{}.<>~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]){6,20}$/;
        var alpha=/^(\w)\1*$/;
        if(this.passWordStr.length<6 || this.passWordStr.length>30){
          this.PWDborderColor='red';
          this.PWDSeen=true;
          this.PWDERR='密码长度不符，需6到20位';
        }
        else if(!reg.test(this.passWordStr)){
          this.PWDborderColor='red';
          this.PWDSeen=true;
          this.PWDERR='非法字符，请使用字母加数字或符号的组合，6-20个字符';
        }
        else if(alpha.test(this.passWordStr)){
          if(this.passWordStr[0]>='0' && this.passWordStr[0]<='9'){
            this.PWDborderColor='red';
            this.PWDSeen=true;
            this.PWDERR='不能为同一数字';
          }
          else{
            this.PWDborderColor='red';
            this.PWDSeen=true;
            this.PWDERR='不能为同一字母';
          }
        }
        else{
          this.PWDborderColor='green';
        }
      }
    },
    focusConfirmPassWord:function(){
      this.CPWDborderColor='';
      this.CPWDSeen=false;
    },
    blurConfirmPassWord:function(){
      if(this.confirmPassWordStr=='')
      {
        this.CPWDborderColor='red';
        this.CPWDSeen=true;
        this.CPWDERR='请再次输入密码';
      }
      else {
        if(this.confirmPassWordStr!=this.passWordStr){
          this.CPWDborderColor='red';
          this.CPWDSeen=true;
          this.CPWDERR='密码错误，密码确认不一致';
        }
        else{
          this.CPWDborderColor='green';
        }
      }
    },
    focusrealName:function(){
      this.RNborderColor='';
      this.RNSeen=false;
    },
    blurrealName:function(){
      if(this.realNameStr==''){  
        this.RNborderColor='red';
        this.RNSeen=true;
        this.RNERR='请输入真实姓名';
      }
      else{
        this.RNborderColor='green';
      }
    },
    focusPhone:function(){
      this.PborderColor='';
      this.PSeen=false;
    },
    blurPhone:function(){
      if(this.PhoneStr==''){
        this.PborderColor='red';
        this.PSeen=true;
        this.PERR='请输入手机号';
      }
      else{
        var reg=/^0?(13[0-9]|15[012356789]|18[01236789]|14[57])[0-9]{8}$/;
        if(!reg.test(this.PhoneStr)){
          this.PborderColor='red';
          this.PSeen=true;
          this.PERR='手机号非法';
        }
        else{
          this.PborderColor='green';
        }
      }
    },
    registerClick:function(){
      

      if(this.UNborderColor=='green' &&
        this.PWDborderColor=='green' &&
        this.CPWDborderColor=='green' &&
        this.PborderColor=='green'){

          this.$http.get('http://www.ls1rius.com:8080/register', {
              params: {
                "username": this.userNameStr,  
                "password": this.passWordStr,
                "name": this.realNameStr,
                "email": null,
                "phone": this.PhoneStr
              },
              dataType:'json'
          }).then((res) => {
              // res.forEach(function (c) {  
              //   console.log(c);
              // })
              console.log(res.body.result);
              console.log(res.body.msg);
              alert("注册成功");
              this.$router.push({path:"/login"})
          }, (response) => {
            // error callback

          });
          
        }
      else{
        alert("注册失败");
      }
    }
  }
}
</script>

<style scoped>
* {
  margin:0;
  padding:0;
  font-family: 'Source Sans Pro', sans-serif;
}

body {
  background:#06689f;
  
}
.web_bg{
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  min-width: 1000px;
  z-index:-10;
  zoom: 1;
  /* background-image: url('/static/image/lan.jpg'); */
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.web_form {
  position:relative;
  width:350px;
  height:420px;
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
.myh4 {
  font-family: "Microsoft YaHei";
  font-size:2em;
  font-weight:bold;
  margin-bottom:25px;
  color:black;
  text-shadow:1px 1px 0px white;
}

.myli {
	list-style: none;
}
#err {
  list-style: none;
  height: 14px;
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
.lay-hd {
    height: 32px;
    line-height: 30px;
    color: #e5f8ff;
    padding-left: 20px;
    font-size: 14px;
    position: relative;
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
.required {
    font-size: 10px;
    color: #f00;
    font-family: Tahoma;
    vertical-align: middle;
    margin-right: 2px;
    font-weight: 200;
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

</style>
