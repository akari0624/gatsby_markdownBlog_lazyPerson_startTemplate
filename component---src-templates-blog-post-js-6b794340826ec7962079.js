(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7evw":function(t,e,n){"use strict";n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=e.CommentEmbed=e.CommentCount=void 0;var o=n("UZsz"),r=n("Bp/N"),i=n("HhXV");e.CommentCount=o.CommentCount,e.CommentEmbed=r.CommentEmbed,e.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};e.default=a},Bjlx:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("vOnD"),r=n("/rHJ");function i(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n/**\n * take reference from  https://github.com/joshwcomeau/blog/blob/master/src/components/App/prism-theme.js\n * Josh Blog theme for Javascript, CSS, and HTML.\n * Derived from the a11y-dark theme, by ericwbailey\n */\n.prism-code {\n  display: block;\n\tcolor: ",";\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\t-moz-tab-size: 2;\n\t-o-tab-size: 2;\n\ttab-size: 2;\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n  hyphens: none;\n  font-family: 'Fira Code', monospace !important;\n  font-size: 16px;\n  letter-spacing: -0.5px;\n  outline: none;\n\tmargin: 0;\n\toverflow: auto;\n\tborder-radius: 0;\n  &::selection {\n    color: ",";\n    background-color: ",";\n  }\n}\n.token::selection {\n  color: ",";\n  background-color: ",';\n}\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: 0.1em;\n\tborder-radius: 0.3em;\n\twhite-space: normal;\n}\n.token {\n  font-weight: 500;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: #B0BEC5;\n  /* font-style: italic; */\n}\n.token.punctuation {\n\tcolor: ',";\n}\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: ",";\n}\n.token.attr-name, .token.tag {\n  font-weight: 700;\n}\n.token.boolean,\n.token.number {\n\tcolor: ",";\n}\n.token.string, .token.attr-value {\n  color: #78909C;\n}\n.token.selector,\n.token.attr-name,\n.token.char,\n.token.builtin,\n.token.inserted,\n.token.script-punctuation {\n\tcolor: ",";\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable,\n.token.keyword {\n\tcolor: ",";\n}\n.token.atrule,\n.token.function {\n\tcolor: ",";\n}\n.token.regex,\n.token.important {\n\tcolor: #ffd700;\n}\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n.token.entity {\n\tcursor: help;\n}\n@media screen and (-ms-high-contrast: active) {\n\t.prism-code {\n\t\tcolor: windowText;\n\t\tbackground: window;\n\t}\n\t.prism-code {\n\t\tbackground: window;\n\t}\n\t.token.important {\n\t\tbackground: highlight;\n\t\tcolor: window;\n\t\tfont-weight: normal;\n\t}\n\t.token.atrule,\n\t.token.attr-value,\n\t.token.function,\n\t.token.keyword,\n\t.token.operator,\n\t.token.selector {\n\t\tfont-weight: bold;\n\t}\n\t.token.attr-value,\n\t.token.comment,\n\t.token.doctype,\n\t.token.function,\n\t.token.keyword,\n\t.token.operator,\n\t.token.property,\n\t.token.string {\n\t\tcolor: highlight;\n\t}\n\t.token.attr-value,\n\t.token.url {\n\t\tfont-weight: normal;\n\t}\n}"]);return i=function(){return t},t}var a=Object(o.a)(i(),r.b.gray[800],r.b.white,r.b.gray[900],r.b.white,r.b.gray[900],r.b.gray[700],r.b.pink[500],r.b.orange[500],r.b.violet[700],r.b.purple[500],r.b.blue[500])},"Bp/N":function(t,e,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var o,r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n("q1tI"),a=(o=i)&&o.__esModule?o:{default:o};(e.CommentEmbed=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),e}(a.default.Component)).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},HhXV:function(t,e,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var o,r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n("q1tI"),a=(o=i)&&o.__esModule?o:{default:o},c=n("ZMnY");e.DiscussionEmbed=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,c.shallowComparison)(this.props,t)}},{key:"componentWillUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,c.removeScript)("dsq-embed-scr",t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=t.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)}},{key:"getDisqusConfig",value:function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.callbacks.onNewComment=[t.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),e}(a.default.Component)},I5cv:function(t,e,n){var o=n("XKFU"),r=n("Kuth"),i=n("2OiF"),a=n("y3w9"),c=n("0/R4"),s=n("eeVq"),u=n("8MEG"),l=(n("dyZX").Reflect||{}).construct,p=s((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),f=!s((function(){l((function(){}))}));o(o.S+o.F*(p||f),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(f&&!p)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var o=[null];return o.push.apply(o,e),new(u.apply(t,o))}var s=n.prototype,d=r(c(s)?s:Object.prototype),m=Function.apply.call(t,d,e);return c(m)?m:d}})},JTHi:function(t,e){t.exports={YOUR_BLOG_TITLE:"somebody's blog",YOUR_ROOT_DOMAIN:"https://this_is_your_domain.io",YOUR_DISQUS_SHORTNAME:"DISQUS_shortName_need_you_to_apply",WHEN_MAX_WIDTH_LESS_THAN_THIS_WIDTH_BECOME_ONE_ROW:"750px",YOUR_GOOGLE_ANALYST_ID:"GA_ID",PATH_PREFIX:"/gatsby_markdownBlog_lazyPerson_startTemplate"}},UZsz:function(t,e,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var o,r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n("q1tI"),a=(o=i)&&o.__esModule?o:{default:o},c=n("ZMnY");var s=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);e.CommentCount=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,c.shallowComparison)(this.props,t)}},{key:"componentWillUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById("dsq-count-scr")?s():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",t.body)}},{key:"cleanInstance",value:function(){var t=window.document.body;(0,c.removeScript)("dsq-count-scr",t),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),e}(a.default.Component)},X8hv:function(t,e,n){function o(t,e,n){return(o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i}).apply(null,arguments)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("/SS/"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("/SS/"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var u=n("q1tI"),l=n("7ljp"),p=l.useMDXComponents,f=l.mdx,d=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,r=t.children,a=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["scope","components","children"]),s=p(n),l=d(e),m=u.useMemo((function(){if(!r)return null;var t=c({React:u,mdx:f},l),e=Object.keys(t),n=e.map((function(e){return t[e]}));return o(Function,["_fn"].concat(i(e),[""+r])).apply(void 0,[{}].concat(i(n)))}),[r,e]);return u.createElement(m,c({components:s},a))}},ZMnY:function(t,e,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var o=window.document.createElement("script");return o.async=!0,o.src=t,o.id=e,n.appendChild(o),o},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var o=void 0;return function(){var r=this,i=arguments,a=function(){o=null,n||t.apply(r,i)},c=n&&!o;window.clearTimeout(o),o=setTimeout(a,e),c&&t.apply(r,i)}},e.isReactElement=a,e.shallowComparison=function(t,e){var n=new Set(Object.keys(t),Object.keys(e)),o=!0,r=!1,i=void 0;try{for(var c,s=n[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var u=c.value;if(t[u]!==e[u]&&!a(t[u]))return!0}}catch(l){r=!0,i=l}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return!1};var o,r=n("q1tI"),i=(o=r)&&o.__esModule?o:{default:o};function a(t){return!!i.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return i.default.isValidElement(t)}))}},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return h}));var o=n("q1tI"),r=n.n(o),i=n("7evw"),a=n("vOnD"),c=n("X8hv"),s=n.n(c),u=n("JTHi"),l=n.n(u),p=n("Bjlx"),f=n("Bl7J"),d=a.b.div.withConfig({displayName:"blog-post__TagDiv",componentId:"n6tzdl-0"})(["margin-top:0.6em;margin-bottom:0.6em;font-size:1.3em;font-family:Arial,Helvetica,sans-serif;"]),m=a.b.div.withConfig({displayName:"blog-post__DivInMiddle",componentId:"n6tzdl-1"})(["text-align:center;margin-top:0.6em;margin-bottom:0.6em;font-size:1.6em;font-family:Arial,Helvetica,sans-serif;"]),h="733673326";e.default=function(t){console.log("props",t);var e=t.location,n=t.pageContext,o=t.data,a=n.id,c=o.mdx.frontmatter,u=c.title,h=c.date,y=c.tags,b=c.description,w=o.mdx.body,v=l.a.disqusShortname,g={url:""+l.a.rootDomain+e.pathname,identifier:""+a,title:u},k={title:u,tagsString:y.join(),description:b};return r.a.createElement(f.a,{pageData:k},r.a.createElement(p.a,null),r.a.createElement("article",null,r.a.createElement("h1",null,u),r.a.createElement("div",null,h),r.a.createElement(d,null,"文章標籤：",y.map((function(t){return r.a.createElement("span",{key:t}," ",t+", "," ")}))),r.a.createElement(s.a,null,w)),r.a.createElement(m,null,"response"),r.a.createElement(i.DiscussionEmbed,{shortname:v,config:g}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6b794340826ec7962079.js.map