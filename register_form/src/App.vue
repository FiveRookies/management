<template>
  <div id="app">
    <div class="web_bg"></div>
    <form class="web_form">
      <h4> 知识库管理系统 </h4>
      <div class="reg-bd">  
        <ul class="reg-list">
          <li>
            <div class="label">
              <span class="required">*</span>
              用 户 名：
              </div>
              <div class="r-txt">
                <input type="text" 
                placeholder="用户名须以字母开头,不能含符号" 
                class="inptxt" 
                id="userName" 
                maxlength="20" 
                @focus="focususername" 
                @blur="blurusername"
                v-model="userNameStr"
                v-bind:style="{borderColor:UNborderColor}"/>
              </div>
          </li>
          <li id="err">
            <p v-if="UNSeen">{{UNERR}}</p>
          </li>
          <li>
            <div class="label">
              <span class="required">*</span>
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
            <p v-if="PWDSeen">{{PWDERR}}</p>
          </li>
          <li>
            <div class="label"><span class="required">*</span>
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
            <p v-if="CPWDSeen">{{CPWDERR}}</p>
          </li>
          <li>
              <div class="label"><span class="required">*</span>手机号码：
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
            <p v-if="PSeen">{{PERR}}</p>
          </li>
          <li>
              <div class="label"><span class="required">*</span>账号类型：
              </div>
            <div class="r-txt">
                <select>
                    <option value ="yuangong">员工</option>
                    <option value ="bumen">部门管理员</option>
                    <option value="dingji">顶级管理员</option>
                </select>
            </div>
          </li>
        </ul>
      </div>
      <input id="registerButton" class="button" type="submit" value="注册"
              v-on:click="registerClick"/>
    </form>
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
    }
  },
  methods:{
    focususername:function(){
      this.UNborderColor='';
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
          this.UNERR='用户名只能由字母、数字和_组成,须以字母开头！';
        }
        else{
          this.UNborderColor='green';
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
    focusPhone:function(){
      this.PborderColor='';
      this.PWDSeen=false;
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
          alert("ok");
        }
      else{
        alert("failure");
      }
    }
  }
}
</script>

<style>
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
  background-image: url('./assets/1.png');
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.web_form {
  position:relative;
  /* width:360px; */
  width:500px;
  height:400px;
  margin:200px auto;
  text-align:center;
  background:#ecf0f1;
  padding:40px;
  -webkit-border-radius:20px 0 0 0;
     -moz-border-radius:20px 0 0 0;
          border-radius:20px 0 0 0;
  -webkit-box-shadow: 0px 1px 0px #ad392d, inset 0px 1px 0px white;
     -moz-box-shadow: 0px 1px 0px #ad392d, inset 0px 1px 0px white;
          box-shadow: 0px 1px 0px #ad392d, inset 0px 1px 0px white;
  box-shadow: 10px 10px 10px;
}
h4 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size:2em;
  font-weight:300;
  margin-bottom:25px;
  color:#7f8c8d;
  text-shadow:1px 1px 0px white;
}

li {
	list-style: none;
}
#err {
  height: 14px;
}
p {
  width: 200px;
  height: 30px;
  margin: auto;
  text-align: center;
  line-height: 0px;
  color: #f00;
  font-size: 10px;
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
}
.reg-list .label {
    display: block;
    height: 30px;
    float: left;
    text-align: center;
    width: 135px;
    padding-right: 5px;
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
  width:315px;
  padding:5px;
  -webkit-border-radius:6px;
     -moz-border-radius:6px;
          border-radius:6px;
  border:0.5;
  margin-bottom:12px;
  color:#7f8c8d;
  font-weight:300;
  font-size:16px;
}
input:focus {
  background:#fafafa;
}
select {
 display:block;
  width:325px;
  padding:5px;
  margin-bottom:12px;
  /* position:absolute; */
  right:120px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 15px;
  font-weight:500;
  color:#7f8c8d;
  list-style:none;
  border: none;
}

option {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 15px;
  font-weight:500;
  color:#7f8c8d;
}

.button {
  /* position:relative; */
  /* float:left; */
  width:145px;
  height: 40px;
  margin-top:10px;
  background:#3498db;
  color:#fff;
  font-weight:100;
  text-shadow:1px 1px 0px #2d7baf;
  box-shadow:0px 3px 0px #2d7baf;
  -webkit-transition: all .3s ease-in-out;
     -moz-transition: all .3s ease-in-out;
          transition: all .3s ease-in-out;
}
</style>
