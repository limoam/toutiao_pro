"use strict";(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[540],{3540:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-edit-container"},[n("van-nav-bar",{staticClass:"page-nav-bar",attrs:{title:"编辑资料","left-arrow":"",fixed:"",border:!1},on:{"click-left":function(t){return e.$router.back()}}}),n("van-cell-group",{staticClass:"action-card"},[n("van-cell",{attrs:{title:"头像","is-link":"",center:""},scopedSlots:e._u([{key:"default",fn:function(){return[n("van-image",{staticClass:"avatar",attrs:{round:"",src:e.$store.state.avatar},on:{click:function(t){return e.$refs.iptFile.click()}}}),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"iptFile",attrs:{type:"file",accept:"image/*"},on:{change:e.onFileChange}})]},proxy:!0}])}),n("van-cell",{attrs:{title:"名称","is-link":"",value:e.profileObj.name},on:{click:e.editNameFn}}),n("van-cell",{attrs:{title:"生日","is-link":"",value:e.profileObj.birthday},on:{click:e.editBirthday}})],1),n("van-dialog",{attrs:{title:"标题","show-cancel-button":"",beforeClose:e.beforeCloseFn},scopedSlots:e._u([{key:"default",fn:function(){return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editName,expression:"editName"},{name:"fofo",rawName:"v-fofo"}],attrs:{type:"text"},domProps:{value:e.editName},on:{input:function(t){t.target.composing||(e.editName=t.target.value)}}})]},proxy:!0}]),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),n("van-popup",{style:{height:"50%"},attrs:{position:"bottom",round:"","get-container":".user-edit-container"},model:{value:e.birShow,callback:function(t){e.birShow=t},expression:"birShow"}},[n("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":e.minDate,"max-date":e.maxDate},on:{cancel:function(t){e.birShow=!1},confirm:e.confirmFn},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1)],1)},a=[],i=n(6198),o=(n(8309),n(4916),n(7601),n(8975),n(6165)),u=n(5796),c={name:"UserEdit",data:function(){return{profileObj:{},show:!1,editName:"",birShow:!1,minDate:new Date(1922,0,1),maxDate:new Date,currentDate:new Date(2022,4,26)}},created:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.nP)();case 2:n=t.sent,r=n.data,console.log(r),e.profileObj=r.data;case 6:case"end":return t.stop()}}),t)})))()},methods:{onFileChange:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!==e.target.files.length){n.next=2;break}return n.abrupt("return");case 2:return r=new FormData,r.append("photo",e.target.files[0]),n.next=6,(0,o.CA)(r);case 6:a=n.sent,i=a.data,t.$store.commit("setAvatar",i.data.photo);case 9:case"end":return n.stop()}}),n)})))()},editNameFn:function(){this.show=!0,this.editName=this.profileObj.name},beforeCloseFn:function(e,t){var n=this;return(0,i.Z)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("confirm"!==e){r.next=14;break}if(a=/^[A-Za-z0-9\u4e00-\u9fa5]{1,7}$/,!a.test(n.editName)){r.next=10;break}return n.profileObj.name=n.editName,r.next=6,(0,o.XN)({name:n.editName});case 6:n.$toast("修改成功"),t(),r.next=12;break;case 10:n.$notify({type:"warning",message:"用户名格式有误，只能是中英文数字混合1到7位"}),t(!1);case 12:r.next=15;break;case 14:t();case 15:case"end":return r.stop()}}),r)})))()},editBirthday:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.birShow=!0,e.currentDate=new Date(e.profileObj.birthday);case 2:case"end":return t.stop()}}),t)})))()},confirmFn:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.XN)({birthday:(0,u.p)(e.currentDate)});case 2:n=t.sent,r=n.data,e.profileObj.birthday=(0,u.p)(e.currentDate),e.birShow=!1,e.$toast("修改成功"),console.log(r);case 8:case"end":return t.stop()}}),t)})))()}}},s=c,l=n(1001),f=(0,l.Z)(s,r,a,!1,null,"cd0d8d14",null),d=f.exports},6165:function(e,t,n){n.d(t,{CA:function(){return f},P_:function(){return c},Q6:function(){return i},XN:function(){return d},bG:function(){return o},nP:function(){return l},vh:function(){return u},wQ:function(){return s},x4:function(){return a}});var r=n(5972),a=function(e){return r.Z.post("/v1_0/authorizations",e)},i=function(e){return r.Z.get("/v1_0/sms/codes/".concat(e))},o=function(){return r.Z.get("/v1_0/user")},u=function(){return r.Z.get("/v1_0/user/channels")},c=function(e){return r.Z.post("/v1_0/user/followings",{target:e})},s=function(e){return r.Z["delete"]("/v1_0/user/followings/".concat(e))},l=function(){return r.Z.get("/v1_0/user/profile")},f=function(e){return r.Z.patch("/v1_0/user/photo",e)},d=function(e){var t={name:"",gender:0,birthday:"",real_name:"",intro:""};for(var n in t)void 0===e[n]?delete t[n]:t[n]=e[n];return r.Z.patch("/v1_0/user/profile",t)}}}]);
//# sourceMappingURL=540-legacy.e86072fa.js.map