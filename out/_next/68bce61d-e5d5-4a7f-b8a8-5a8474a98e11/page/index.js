module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([3],{206:function(e,t,n){e.exports=n(207)},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return h});var r=n(23),o=n.n(r),a=n(1),u=n.n(a),i=n(99),c=n.n(i),l=n(47),f=n.n(l),s=n(107),p=n(109);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,a,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.a.Component),n=t,r=[{key:"render",value:function(){var e=this.props.query;return u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,null,u.a.createElement("title",null,e.title)),u.a.createElement(s.a,null,u.a.createElement(f.a,{href:"/videos"},u.a.createElement(p.a,{modifiers:"big"},"Videos")),e.projects.map(function(e){return u.a.createElement("a",{key:e.slug,href:"/projects/".concat(e.slug)},u.a.createElement("h3",null,e.name),u.a.createElement("img",{src:e.fullThumbnail.fields.file.url,alt:""}))}),u.a.createElement("pre",null,JSON.stringify(e.projects,4,4))))}}],a=[{key:"getInitialProps",value:(i=o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,n=t.query,console.log("test",n.projects[0]),e.abrupt("return",{query:n});case 3:case"end":return e.stop()}},e,this)}),l=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=i.apply(e,t);function a(e,t){try{var a=o[e](t),i=a.value}catch(e){return void r(e)}a.done?n(i):Promise.resolve(i).then(u,c)}function u(e){a("next",e)}function c(e){a("throw",e)}u()})},function(e){return l.apply(this,arguments)})}],r&&m(n.prototype,r),a&&m(n,a),t}()}},[206]).default}});