"use strict";(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[75],{8414:function(t,e,a){a.d(e,{Z:function(){return h}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-cell",{attrs:{clickable:""}},[a("div",{staticClass:"title van-multi-ellipsis--l2",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.article.title))]),a("div",{attrs:{slot:"label"},slot:"label"},[3===t.article.cover.type?a("div",{staticClass:"cover-wrap"},t._l(t.article.cover.images,(function(e,i){return a("van-image",{key:i,attrs:{fit:"cover",src:e,"lazy-load":""}},[a("van-loading",{attrs:{slot:"loading",type:"spinner",size:"20",vertical:""},slot:"loading"}),a("text",{attrs:{slot:"error"},slot:"error"},[t._v("加载失败")])],1)})),1):t._e(),a("div",{staticClass:"lable-info-wrap",class:{hide:!t.hide}},[a("span",[t._v(t._s(t.article.aut_name))]),a("span",[t._v(t._s(t.article.comm_count))]),a("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]),1===t.article.cover.type?a("van-image",{staticClass:"right-cover",attrs:{slot:"default",fit:"cover",src:t.article.cover.images[0],"lazy-load":""},slot:"default"},[a("van-loading",{attrs:{slot:"loading",type:"spinner",size:"20",vertical:""},slot:"loading"}),a("text",{attrs:{slot:"error"},slot:"error"},[t._v("加载失败")])],1):t._e(),t.hide?a("div",{staticClass:"toutiao toutiao-guanbi",attrs:{slot:"right-icon"},on:{click:function(e){e.stopPropagation(),t.show=!0}},slot:"right-icon"}):t._e()],1),a("van-action-sheet",{attrs:{actions:t.actions,"get-container":"body","cancel-text":t.bottomText,"lazy-render":""},on:{cancel:t.cancelFn,select:t.onSelect,close:t.closeFn},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},n=[];const s=[{name:"不感兴趣"},{name:"反馈垃圾内容"}],r=[{value:0,name:"其他问题"},{value:1,name:"标题夸张"},{value:2,name:"色情低俗"},{value:3,name:"错别字多"},{value:4,name:"旧闻重复"},{value:5,name:"广告软文"},{value:6,name:"内容不实"},{value:7,name:"涉嫌违规犯罪"},{value:8,name:"侵权"}];var l=a(4234),o={name:"ArticleItem",props:{article:{type:Object,required:!0},onRefresh:Function,hide:Boolean},data(){return{show:!1,actions:s,bottomText:"取消"}},methods:{async onSelect(t){if("反馈垃圾内容"===t.name)this.actions=r,this.bottomText="返回";else if("不感兴趣"===t.name){try{await(0,l.tH)(this.article.art_id),this.$toast("将为您减少此类推荐"),this.onRefresh()}catch(e){}this.show=!1}else try{await(0,l.X)({target:this.article.art_id,type:t.value,remark:"无"}),this.$toast("感谢您的反馈"),this.show=!1,this.onRefresh()}catch(e){}},cancelFn(){"返回"===this.bottomText&&(this.show=!0,this.actions=s,this.bottomText="取消")},closeFn(){this.actions=s,this.bottomText="取消"}}},c=o,u=a(1001),d=(0,u.Z)(c,i,n,!1,null,"28300ffe",null),h=d.exports},8075:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-result"},[a("van-nav-bar",{staticClass:"page-nav-bar",attrs:{title:"搜索结果","left-arrow":"",fixed:"",border:!1},on:{"click-left":function(e){return t.$router.replace("/search")}}}),a("div",{staticClass:"search-item"},[a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e){return a("ArticleItem",{key:e.art_id,attrs:{article:e,hide:!1},nativeOn:{click:function(a){return t.detailFn(e.art_id)}}})})),1)],1)],1)},n=[],s=a(2705),r=a(8414),l={name:"SearchResult",props:["value"],data(){return{page:1,list:[],finished:!1,loading:!1}},async created(){const{data:t}=await(0,s.n)({page:this.page,q:this.value});this.list=t.data.results},components:{ArticleItem:r.Z},methods:{async onLoad(){if(this.list.length>0){this.page++;const{data:t}=await(0,s.n)({page:this.page,q:this.value});t.data.results.length||(this.finished=!0),this.list.push(...t.data.results),this.loading=!1}},detailFn(t){this.$router.push({path:"/article_detail",query:{art_id:t}})}}},o=l,c=a(1001),u=(0,c.Z)(o,i,n,!1,null,"e8328146",null),d=u.exports},4234:function(t,e,a){a.d(e,{HA:function(){return o},IJ:function(){return d},Id:function(){return c},X:function(){return r},Zz:function(){return n},ih:function(){return v},jS:function(){return u},mx:function(){return l},tH:function(){return s},wR:function(){return h}});var i=a(5972);const n=t=>i.Z.get("/v1_0/articles",{params:t}),s=t=>i.Z.post("/v1_0/article/dislikes",{target:t}),r=t=>i.Z.post("/v1_0/article/reports",t),l=t=>i.Z.get(`/v1_0/articles/${t}`),o=t=>i.Z.post("/v1_0/article/likings",{target:t}),c=t=>i.Z["delete"](`/v1_0/article/likings/${t}`),u=({id:t,offset:e=null,limit:a=10})=>i.Z.get("/v1_0/comments",{params:{type:"a",source:t,offset:e,limit:a}}),d=({id:t,content:e,artId:a=null})=>{const n={target:t,content:e,art_id:a};return a||(n.art_id=a),i.Z.post("/v1_0/comments",n)},h=t=>i.Z.post("/v1_0/comment/likings",{target:t}),v=t=>i.Z["delete"](`/v1_0/comment/likings/${t}`)},2705:function(t,e,a){a.d(e,{D:function(){return n},n:function(){return s}});var i=a(5972);const n=t=>i.Z.get("/v1_0/suggestion",{params:{q:t}}),s=({page:t=1,q:e})=>i.Z.get("/v1_0/search",{params:{page:t,per_page:10,q:e}})}}]);
//# sourceMappingURL=75.87ec53f0.js.map