(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[822],{822:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-container"},[r("van-nav-bar",{staticClass:"page-nav-bar",attrs:{"left-arrow":"",border:!1},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"title",fn:function(){return[r("van-search",{directives:[{name:"fofo",rawName:"v-fofo"}],attrs:{placeholder:"请输入搜索关键词"},on:{input:t.searchFn,search:t.searchVal},model:{value:t.value,callback:function(e){t.value="string"===typeof e?e.trim():e},expression:"value"}})]},proxy:!0}])}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"sugg-list"},t._l(t.suggestList,(function(e,n){return r("div",{key:n,staticClass:"sugg-item",domProps:{innerHTML:t._s(t.lightFn(e,t.value))},on:{click:function(r){return t.searchSuggest(e)}}})})),0),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.value&&t.history.length,expression:"!value && history.length"}],staticClass:"search-history"},[r("van-cell",{attrs:{title:"搜索历史"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[r("van-icon",{staticClass:"search-icon",attrs:{name:"delete"},on:{click:t.clearHistory}})]},proxy:!0}])}),r("van-grid",{attrs:{"column-num":3,gutter:15,direction:"horizontal",border:!1}},t._l(t.history,(function(e,n){return r("van-grid-item",{key:n,attrs:{text:e},on:{click:function(r){return t.searchHistory(e)}}})})),1)],1)],1)},s=[],a=r(6198),i=(r(8975),r(4916),r(5306),r(4603),r(8450),r(8386),r(9714),r(1539),r(189),r(8783),r(3948),r(1038),r(5922)),o=r(2705),c={name:"SearchIndex",methods:{onClickLeft:function(){this.$router.replace("/home")},searchFn:function(){var t=this;clearTimeout(this.timer),this.value.length<=0?this.suggestList=[]:this.timer=setTimeout((0,a.Z)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.D)(t.value);case 2:r=e.sent,n=r.data,t.suggestList=n.data.options;case 5:case"end":return e.stop()}}),e)}))),500)},lightFn:function(t,e){try{var r=new RegExp(e,"ig");return t.replace(r,(function(t){return'<span style="color: tomato;">'.concat(t,"</span>")}))}catch(n){}},gotoFn:function(t){this.$nextTick((function(){this.$router.push({name:"searchResult",params:{value:t}})}))},searchVal:function(){this.value&&(this.history.push(this.value),this.gotoFn(this.value))},searchSuggest:function(t){t&&(this.history.push(t),this.gotoFn(t))},searchHistory:function(t){this.gotoFn(t)},clearHistory:function(){this.history=[],this.$toast("历史记录已清除")}},data:function(){return{value:"",timer:null,suggestList:[],history:(0,i.rV)("hist")||[]}},watch:{history:{deep:!0,handler:function(t){var e=new Set(t),r=Array.from(e);(0,i.LS)("hist",r)}}}},u=c,l=r(1001),h=(0,l.Z)(u,n,s,!1,null,"36c09e7e",null),f=h.exports},1038:function(t,e,r){var n=r(2109),s=r(8457),a=r(7072),i=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:s})},2705:function(t,e,r){"use strict";r.d(e,{D:function(){return s},n:function(){return a}});var n=r(5972),s=function(t){return n.Z.get("/v1_0/suggestion",{params:{q:t}})},a=function(t){var e=t.page,r=void 0===e?1:e,s=t.q;return n.Z.get("/v1_0/search",{params:{page:r,per_page:10,q:s}})}}}]);
//# sourceMappingURL=822-legacy.bcb4fd4a.js.map