webpackJsonp([0],{KWt1:function(t,e,i){"use strict";var a=i("WH9D"),s=i("LEyw"),n=i("VU/8")(a.a,s.a,!1,null,null,null);n.options.__file="client/components/Posts.vue",e.a=n.exports},LEyw:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"main-content"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title has-text-centered"},[t._v("\n        Recent Posts.\n      ")]),i("div",{staticClass:"columns is-multiline"},t._l(t.posts,function(e){return i("div",{staticClass:"column is-half"},[i("div",{staticClass:"card"},[i("header",{staticClass:"card-header"},[i("p",{staticClass:"card-header-title"},[t._v("\n              "+t._s(e.title)+"\n            ")])]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"content"},[t._v("\n              "+t._s(e.summary)+"\n              "),i("br"),i("small",[t._v("\n                by "),i("strong",[t._v(t._s(e.author))]),t._v(" \n                \\\\ "+t._s(e.published)+"\n              ")])])]),i("footer",{staticClass:"card-footer"},[i("nuxt-link",{staticClass:"card-footer-item",attrs:{to:"/nuxt-demo/post/"+e.id,append:""}},[t._v("\n              Read More\n            ")])],1)])])}))])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},"Lu/K":function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),e("posts")],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-medium is-primary is-bold"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("\n          Welcome to the JavaScript SSR Blog.\n        ")]),e("h2",{staticClass:"subtitle"},[this._v("\n          Hope you find something you like.\n        ")])])])])}]};e.a=s},P7bJ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("bcod"),s=i("Lu/K"),n=i("VU/8")(a.a,s.a,!1,null,null,null);n.options.__file="client/pages/index.vue",e.default=n.exports},WH9D:function(t,e,i){"use strict";var a=i("bu0/"),s=i.n(a);e.a={name:"posts",data:function(){return{posts:s.a}}}},bcod:function(t,e,i){"use strict";var a=i("KWt1");e.a={components:{Posts:a.a},head:{title:"Home"}}},"bu0/":function(t,e){t.exports=[{id:4,title:"Building universal JS apps with Nuxt.js",summary:"Get introduced to Nuxt.js, and build great SSR Apps with Vue.js.",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",author:"Jane Doe",published:"08:00 - 07/06/2017"},{id:3,title:"Great SSR Use cases",summary:"See simple and rich server rendered JavaScript apps.",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",author:"Jane Doe",published:"17:00 - 06/06/2017"},{id:2,title:"SSR in Vue.js",summary:"Learn about SSR in Vue.js, and where Nuxt.js can make it all faster.",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",author:"Jane Doe",published:"13:00 - 06/06/2017"},{id:1,title:"Introduction to SSR",summary:"Learn about SSR in JavaScript and how it can be super cool.",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",author:"John Doe",published:"11:00 - 06/06/2017"}]}});