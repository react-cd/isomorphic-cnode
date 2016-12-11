webpackJsonp([1],{200:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var u=t[o](a),c=u.value}catch(e){return void r(e)}return u.done?void e(c):Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(201),l=o(s),f=r(208),p=o(f),d=r(271),h=n(d),m=r(276),v=function(e){function t(){var e,r,n,o;u(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return r=n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.name="List",n.View=p.default,n.actions=h,n.initialState={topics:[],showMenu:!1,searchKey:{page:1,limit:20,tab:"all",mdrender:!0},userInfo:{}},n.isFetching=!1,n.methods={openMenu:m.openMenu,closeMenu:m.closeMenu,handleScroll:function(){var e=this;return a(regeneratorRuntime.mark(function t(){var r,n,o,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store.getState(),n=r.showMenu,!e.isFetching&&!n){t.next=3;break}return t.abrupt("return");case 3:if(o=window.innerHeight+window.scrollY,a=document.body.scrollHeight||document.documentElement.scrollHeight,!(a-o<=200)){t.next=11;break}return u=e.store.actions.FETCH_NEXT_TOPICS,e.isFetching=!0,t.next=10,u();case 10:e.isFetching=!1;case 11:case"end":return t.stop()}},t,e)}))()}},o=r,c(n,o)}return i(t,e),t}(l.default);t.default=v},208:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.state,r=e.methods,n=t.showMenu,o=t.topics,a=t.location,c=t.userInfo,l=t.searchKey,f=r.openMenu,d=r.closeMenu;return i.default.createElement("div",null,i.default.createElement(p.default,{fixHead:!0,needAdd:!0,showMenu:n,openMenu:f,closeMenu:d,location:a,userInfo:c,pageType:(0,s.getTitleStr)(l.tab)}),i.default.createElement("section",{id:"page"},i.default.createElement("ul",{className:"posts-list"},o.map(function(e){return i.default.createElement(y,u({},e,{key:e.id}))}))),i.default.createElement(v.default,null))}function a(e){var t=e.id,r=e.title,n=e.good,o=e.top,a=e.tab,u=e.author,c=e.reply_count,l=e.create_at,f=e.last_reply_at,p=e.visit_count;return i.default.createElement(h.default,{tagName:"li",to:"/topic/"+t},i.default.createElement("h3",{className:(0,s.getTabClassName)(a,n,o),title:(0,s.getTabStr)(a,n,o)},r),i.default.createElement("div",{className:"content"},i.default.createElement("img",{className:"avatar",src:u.avatar_url}),i.default.createElement("div",{className:"info"},i.default.createElement("p",null,i.default.createElement("span",{className:"name"},u.loginname),c>0&&i.default.createElement("span",{className:"status"},i.default.createElement("b",null,c),"/",p)),i.default.createElement("p",null,i.default.createElement("time",null,(0,s.getLastTimeStr)(l,!0)),i.default.createElement("time",null,(0,s.getLastTimeStr)(f,!0))))))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=r(202),i=n(c),s=r(209),l=r(264),f=r(265),p=n(f),d=r(268),h=n(d),m=r(270),v=n(m);t.default=(0,l.connectScroll)(["methods","handleScroll"])(o);var y=(0,l.purify)()(a)},270:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(202),s=n(i),l=function(e){function t(){var e,r,n,u;o(this,t);for(var c=arguments.length,i=Array(c),s=0;s<c;s++)i[s]=arguments[s];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={shouldShow:!1},n.goTop=function(){window.scrollTo(0,0)},n.handleScroll=function(){var e=window,t=e.scrollY,r=n.state.shouldShow;t>100?r||n.setState({shouldShow:!0}):r&&n.setState({shouldShow:!1})},u=r,a(n,u)}return u(t,e),c(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return this.state.shouldShow?s.default.createElement("div",{className:"iconfont icon-top",onClick:this.goTop},""):null}}]),t}(i.Component);t.default=l},271:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var u=t[o](a),c=u.value}catch(e){return void r(e)}return u.done?void e(c):Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.UPDATE_FIELD=t.FETCH_NEXT_TOPICS=t.INIT=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=r(272),i=function(){var e=a(regeneratorRuntime.mark(function e(t){var r,n,a,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.searchKey,n=t.location,n.query.tab&&(r=u({},r,{tab:n.query.tab})),e.next=4,(0,c.getTopics)(r);case 4:return a=e.sent,i=a.data,s=i.map(function(e){var t=(e.content,o(e,["content"]));return t}),e.abrupt("return",u({},t,{topics:s,searchKey:r}));case 8:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}();t.INIT=i;t.FETCH_NEXT_TOPICS=function(){var e=a(regeneratorRuntime.mark(function e(t){var r,n,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.searchKey,n=t.topics,r=u({},r,{page:r.page+1}),e.next=4,(0,c.getTopics)(r);case 4:return o=e.sent,a=o.data,n=n.concat(a),e.abrupt("return",u({},t,{searchKey:r,topics:n}));case 8:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.UPDATE_FIELD=function(e,t){var r=t.key,o=t.value;return e[r]===o?e:u({},e,n({},r,o))}},272:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var u=t[o](a),c=u.value}catch(e){return void r(e)}return u.done?void e(c):Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.readPic=t.addReply=t.upsReply=t.markAllMessages=t.getMessages=t.addTopic=t.getUserData=t.getUserInfo=t.getTopic=t.getTopics=void 0;var u=r(273),c=n(u),i=r(209),s="https://cnodejs.org/api/v1",l=(0,i.createFetchJSON)(s),f=(t.getTopics=function(e){return l("/topics?"+c.default.stringify(e))},t.getTopic=function(e){return l("/topic/"+e)},function(){var e=a(regeneratorRuntime.mark(function e(t){var r,n,a,u,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="/accesstoken",n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c.default.stringify({accesstoken:t})},e.next=4,l(r,n);case 4:if(a=e.sent,u=a.success,i=a.error_msg,s=o(a,["success","error_msg"]),u){e.next=10;break}throw new Error(i);case 10:return e.abrupt("return",s);case 11:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}());t.getUserInfo=f;t.getUserData=function(){var e=a(regeneratorRuntime.mark(function e(t){var r,n,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("/user/"+t);case 2:if(r=e.sent,n=r.success,o=r.error_msg,a=r.data,n){e.next=8;break}throw new Error(o);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.addTopic=function(){var e=a(regeneratorRuntime.mark(function e(t){var r,n,o,a,u,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="/topics",n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c.default.stringify(t)},e.next=4,l(r,n);case 4:if(o=e.sent,a=o.success,u=o.error_msg,i=o.topic_id,a){e.next=10;break}throw new Error(u);case 10:return e.abrupt("return",i);case 11:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.getMessages=function(){var e=a(regeneratorRuntime.mark(function e(t){var r,n,o,a,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="/messages?accesstoken="+t,e.next=3,l(r);case 3:if(n=e.sent,o=n.success,a=n.error_msg,u=n.data,o){e.next=9;break}throw new Error(a);case 9:return e.abrupt("return",u);case 10:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.markAllMessages=function(){var e=a(regeneratorRuntime.mark(function e(t){var r,n,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="/message/mark_all",n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c.default.stringify({accesstoken:t})},e.next=4,l(r,n);case 4:if(o=e.sent,a=o.success){e.next=8;break}throw new Error(error_msg);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.upsReply=function(){var e=a(regeneratorRuntime.mark(function e(t){var r,n,o,a,u,i,s=t.replyId,f=t.accesstoken;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="/reply/"+s+"/ups",n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c.default.stringify({accesstoken:f})},e.next=4,l(r,n);case 4:if(o=e.sent,a=o.success,u=o.action,i=o.error_msg,a){e.next=10;break}throw new Error(i);case 10:return e.abrupt("return",u);case 11:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.addReply=function(){var e=a(regeneratorRuntime.mark(function e(t){var r,n,o,a,u,i,s,f=t.topicId,p=t.accesstoken,d=t.content,h=t.replyId;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="/topic/"+f+"/replies",n={accesstoken:p,content:d},h&&(n.reply_id=h),o={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c.default.stringify(n)},e.next=6,l(r,o);case 6:if(a=e.sent,u=a.success,i=a.error_msg,s=a.reply_id,u){e.next=12;break}throw new Error(i);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.readPic=function(){var e=a(regeneratorRuntime.mark(function e(t){var r,n,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="http://m.yueqingwang.com/common.ashx",n={method:"POST",body:JSON.stringify({img:t})},e.next=4,fetch(r,n);case 4:return o=e.sent,e.next=7,o.text();case 7:if(a=e.sent,"qrcode error"===a){e.next=10;break}throw new Error("二维码图片不清晰");case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()}});