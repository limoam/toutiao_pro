"use strict";(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[546],{2546:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-container"},[s("van-nav-bar",{staticClass:"page-nav-bar",attrs:{title:"登录",border:!1}},[s("van-icon",{attrs:{slot:"left",name:"cross"},on:{click:function(e){return t.$router.back()}},slot:"left"})],1),s("van-form",{ref:"loginForm",on:{submit:t.onSubmit}},[s("van-field",{attrs:{name:"mobile",placeholder:"请输入手机号",rules:t.userFormRules.mobile,type:"number",maxlength:"11"},model:{value:t.user.mobile,callback:function(e){t.$set(t.user,"mobile",e)},expression:"user.mobile"}},[s("i",{staticClass:"toutiao toutiao-shouji",attrs:{slot:"left-icon"},slot:"left-icon"})]),s("van-field",{attrs:{name:"code",placeholder:"请输入验证码",rules:t.userFormRules.code,type:"number",maxlength:"6"},scopedSlots:t._u([{key:"button",fn:function(){return[t.isCountDownShow?s("van-count-down",{staticClass:"send-sms-btn",attrs:{time:6e4,format:" ss s"},on:{finish:function(e){t.isCountDownShow=!1}}}):s("van-button",{staticClass:"send-sms-btn",attrs:{size:"small",round:"",type:"default","native-type":"button"},on:{click:t.onSendSms}},[t._v("发送验证码")])]},proxy:!0}]),model:{value:t.user.code,callback:function(e){t.$set(t.user,"code",e)},expression:"user.code"}},[s("i",{staticClass:"toutiao toutiao-yanzhengma",attrs:{slot:"left-icon"},slot:"left-icon"})]),s("div",{staticClass:"button-sub",staticStyle:{margin:"16px"}},[s("van-button",{staticClass:"login-btn",attrs:{block:"",type:"info","native-type":"submit"}},[t._v("登录")])],1)],1)],1)},o=[],a=s(6165),i={name:"LoginIndex",data(){return{user:{mobile:"",code:""},userFormRules:{mobile:[{required:!0,message:"手机号不能为空"},{pattern:/1[3|5|7|8|9]\d{9}/,message:"手机号格式错误"}],code:[{required:!0,message:"验证码不能为空"},{pattern:/^\d{6}$/,message:"验证码格式错误"}]},isCountDownShow:!1}},methods:{async onSubmit(){const t=this.user;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0});try{const{data:e}=await(0,a.x4)(t);this.$store.commit("setUser",e.data),this.$toast.success("登陆成功"),this.$router.replace("/my")}catch(e){400===e.response.status?this.$toast.fail("手机号或验证码错误"):this.$toast.fail("登录失败，稍后重试")}},async onSendSms(){try{await this.$refs.loginForm.validate("mobile")}catch(t){return this.$toast(t.message)}this.isCountDownShow=!0;try{await(0,a.Q6)(this.user.mobile),this.$toast("发送成功")}catch(t){this.isCountDownShow=!1,429===t.response.status?this.$toast("发送过于频繁，请稍后再试"):this.$toast("发送失败，稍后重试")}}}},r=i,u=s(1001),l=(0,u.Z)(r,n,o,!1,null,"4fd1d4e0",null),c=l.exports},6165:function(t,e,s){s.d(e,{CA:function(){return m},P_:function(){return u},Q6:function(){return a},XN:function(){return d},bG:function(){return i},nP:function(){return c},vh:function(){return r},wQ:function(){return l},x4:function(){return o}});var n=s(5972);const o=t=>n.Z.post("/v1_0/authorizations",t),a=t=>n.Z.get(`/v1_0/sms/codes/${t}`),i=()=>n.Z.get("/v1_0/user"),r=()=>n.Z.get("/v1_0/user/channels"),u=t=>n.Z.post("/v1_0/user/followings",{target:t}),l=t=>n.Z["delete"](`/v1_0/user/followings/${t}`),c=()=>n.Z.get("/v1_0/user/profile"),m=t=>n.Z.patch("/v1_0/user/photo",t),d=t=>{const e={name:"",gender:0,birthday:"",real_name:"",intro:""};for(const s in e)void 0===t[s]?delete e[s]:e[s]=t[s];return n.Z.patch("/v1_0/user/profile",e)}}}]);
//# sourceMappingURL=546.be0e21a8.js.map