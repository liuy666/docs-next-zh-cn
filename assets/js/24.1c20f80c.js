(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{400:function(n,t,r){"use strict";var e=r(218),a=r(12),s=r(24),o=r(26),u=r(30),i=r(220),l=r(219);e("match",(function(n,t,r){return[function(t){var r=u(this),e=null==t?void 0:t[n];return void 0!==e?e.call(t,r):new RegExp(t)[n](o(r))},function(n){var e=a(this),u=o(n),c=r(t,e,u);if(c.done)return c.value;if(!e.global)return l(e,u);var v=e.unicode;e.lastIndex=0;for(var d,h=[],p=0;null!==(d=l(e,u));){var g=o(d[0]);h[p]=g,""===g&&(e.lastIndex=i(u,s(e.lastIndex),v)),p++}return 0===p?null:h}]}))},410:function(n,t,r){"use strict";r.d(t,"a",(function(){return e})),r.d(t,"b",(function(){return a}));var e={language:"Language",github:"GitHub",lastCommit:"Last commit",last90Days:"Last 90 days",loadDetails:"Load Details",commits:"commits",loading:"Loading..."},a=[{lang:"en-us",owner:"vuejs",repo:"docs",branch:"master",url:"https://v3.vuejs.org/"},{lang:"id",owner:"vuejs-id",repo:"docs-next",branch:"indonesian"},{lang:"ja",owner:"vuejs-jp",repo:"ja.vuejs.org",branch:"lang-ja",url:"https://v3.ja.vuejs.org/"},{lang:"ko",owner:"vuejs-kr",repo:"docs-next",branch:"rootKoKr",url:"https://v3.ko.vuejs.org/"},{lang:"pt-br",owner:"vuejs-br",repo:"docs-next",branch:"master",url:"https://vuejsbr-docs-next.netlify.app/"},{lang:"ru",owner:"translation-gang",repo:"docs-next",branch:"master",url:"https://v3.ru.vuejs.org/"},{lang:"zh-cn",owner:"vuejs",repo:"docs-next-zh-cn",branch:"master",url:"https://v3.cn.vuejs.org/"}]},555:function(n,t,r){"use strict";r.r(t);r(60),r(400),r(125);var e=r(410),a={data:function(){return{isTranslation:!1}},mounted:function(){var n=function(n){return(String(n).match(/https?:\/\/[^/]+/)||[])[0]},t=n(document.referrer);t&&t!==location.origin&&e.b.some((function(r){var e=r.url;return n(e)===t}))&&(this.isTranslation=!0)}},s=r(59),o=Object(s.a)(a,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"theme-container"},[r("div",{staticClass:"theme-default-content"},[r("h1",[n._v("404")]),n._v(" "),n._m(0),n._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:n.isTranslation,expression:"isTranslation"}]},[n._v("\n      我们的文档会不断产生新的页面。该页面可能还没有被所有的译者加入其中。\n    ")]),n._v(" "),r("RouterLink",{attrs:{to:"/"}},[n._v("\n      回到首页。\n    ")])],1)])}),[function(){var n=this.$createElement,t=this._self._c||n;return t("blockquote",[t("p",[this._v("糟糕！这个页面不存在。")])])}],!1,null,null,null);t.default=o.exports}}]);