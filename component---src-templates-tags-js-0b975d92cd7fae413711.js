(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var f,l=[];function s(){f=e(l.map((function(e){return e.props}))),T.canUseDOM?t(f):n&&(f=n(f))}var T=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return f},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=f;return f=void 0,l=[],e};var u=o.prototype;return u.shouldComponentUpdate=function(e){return!a(e,this.props)},u.componentWillMount=function(){l.push(this),s()},u.componentDidUpdate=function(){s()},u.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},u.render=function(){return i.createElement(r,this.props)},o}(o.Component);return u(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(T,"canUseDOM",c),T}}},Bl7J:function(e,t,n){"use strict";var r=n("PlB2"),o=n("q1tI"),i=n.n(o),a=n("TJpk"),u=n.n(a),c=n("Wbzz"),f=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};n("8ypT"),t.a=function(e){var t=e.children,n=e.pageData;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement("main",null,i.a.createElement(u.a,{title:n.title,meta:[{name:"description",content:n.description},{name:"keywords",content:n.tagsString}]}),i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:r})}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var f=i[c];if(!u(f))return!1;var l=e[f],s=t[f];if(!1===(o=n?n.call(r,l,s,f):void 0)||void 0===o&&l!==s)return!1}return!0}},M4XY:function(e,t,n){(function(t){n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt"),n("SRfc"),n("Oyvg");var r=1/0,o="[object Symbol]",i=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",c="["+u+"]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\d+",s="[\\u2700-\\u27bf]",T="[a-z\\xdf-\\xf6\\xf8-\\xff]",d="[^\\ud800-\\udfff"+u+l+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",A="[A-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:"+T+"|"+d+")",h="(?:"+A+"|"+d+")",y="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",S="[\\ufe0e\\ufe0f]?"+y+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",E,p].join("|")+")[\\ufe0e\\ufe0f]?"+y+")*"),b="(?:"+[s,E,p].join("|")+")"+S,v=RegExp("['’]","g"),_=RegExp(f,"g"),g=RegExp([A+"?"+T+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[c,A,"$"].join("|")+")",h+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[c,A+m,"$"].join("|")+")",A+"?"+m+"+(?:['’](?:d|ll|m|re|s|t|ve))?",A+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",l,b].join("|"),"g"),R=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,O="object"==typeof t&&t&&t.Object===Object&&t,P="object"==typeof self&&self&&self.Object===Object&&self,M=O||P||Function("return this")();var I,w=(I={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==I?void 0:I[e]});var C=Object.prototype.toString,N=M.Symbol,x=N?N.prototype:void 0,L=x?x.toString:void 0;function G(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&C.call(e)==o}(e))return L?L.call(e):"";var t=e+"";return"0"==t&&1/e==-r?"-0":t}function j(e){return null==e?"":G(e)}var H,k=(H=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var o=-1,i=e?e.length:0;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}(function(e,t,n){return e=j(e),void 0===(t=n?void 0:t)?function(e){return R.test(e)}(e)?function(e){return e.match(g)||[]}(e):function(e){return e.match(i)||[]}(e):e.match(t)||[]}(function(e){return(e=j(e))&&e.replace(a,w).replace(_,"")}(e).replace(v,"")),H,"")});e.exports=k}).call(this,n("yLpj"))},MN1z:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return d}));var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=n("vOnD"),u=n("M4XY"),c=n.n(u),f=n("Bl7J"),l=n("OWz4"),s=a.b.section.withConfig({displayName:"tags__FlexboxDivWrapper",componentId:"sc-6y409i-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;@media (max-width:","){flex-direction:column;}"],(function(e){return e.oneRowWidth})),T={title:"Morris' blog",tagsString:"",description:"標籤頁"},d="2012299592";t.default=function(e){var t=e.pageContext,n=e.data,r=t.tTag,a=t.allTagsArr,u=n.allMdx.edges,d=n.site.siteMetadata.oneRowWidth;return o.a.createElement(f.a,{pageData:T},o.a.createElement(s,{oneRowWidth:d},o.a.createElement(l.a,{oneRowWidth:d},o.a.createElement("h1",null,"標籤：",r),u.map((function(e){var t=e.node;return o.a.createElement("article",{key:""+t.frontmatter.title+t.frontmatter.date},o.a.createElement(i.a,{to:t.fields.slug},t.frontmatter.date,"   ",t.frontmatter.title))}))),o.a.createElement(l.b,{oneRowWidth:d},o.a.createElement("h3",null,"其他標籤"),function(e,t){return t.filter((function(t){return t!==e})).map((function(e){return o.a.createElement("div",{key:e},o.a.createElement(i.a,{to:"/tags/"+c()(e)},e))}))}(r,a))))}},OWz4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n("vOnD"),o=r.b.div.withConfig({displayName:"indexPageUI__LeftArticleListArea",componentId:"sc-3qdvky-0"})(["width:80%;margin-right:",";@media (max-width:","){width:100%;}"],"30px",(function(e){return e.oneRowWidth})),i=r.b.div.withConfig({displayName:"indexPageUI__RightTagsArea",componentId:"sc-3qdvky-1"})(["width:calc(20% - ",");@media (max-width:","){margin-top:2em;width:100%;}"],"30px",(function(e){return e.oneRowWidth}))},PlB2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"somebody\'s blog"}}}}')},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n("q1tI")),a=s(n("17x9")),u=s(n("8+s/")),c=s(n("bmMU")),f=n("v1p5"),l=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var d,E,p,A=(0,u.default)(f.reducePropsToState,f.handleClientStateChange,f.mapStateOnServer)((function(){return null})),m=(d=A,p=E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=u,t.titleAttributes=r({},a),t));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=T(o,["children"]),u=(0,f.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(d,o)},o(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=d.peek,E.rewind=function(){var e=d.rewind();return e||(e=(0,f.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);m.renderStatic=m.rewind,t.Helmet=m,t.default=m},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,f,l=r(t),s=r(n);if(l&&s){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(l!=s)return!1;var T=t instanceof Date,d=n instanceof Date;if(T!=d)return!1;if(T&&d)return t.getTime()==n.getTime();var E=t instanceof RegExp,p=n instanceof RegExp;if(E!=p)return!1;if(E&&p)return t.toString()==n.toString();var A=o(t);if((c=A.length)!==o(n).length)return!1;for(u=c;0!=u--;)if(!i.call(n,A[u]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!=u--;)if(!("_owner"===(f=A[u])&&t.$$typeof||e(t[f],n[f])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("q1tI")),a=c(n("MgzW")),u=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var f,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},s=function(e){var t=A(e,u.TAG_NAMES.TITLE),n=A(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=A(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return A(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},p=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],f=c.toLowerCase();-1===t.indexOf(f)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||f===u.TAG_PROPERTIES.REL&&"stylesheet"===e[f].toLowerCase()||(n=f),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var f=i[c],l=(0,a.default)({},o[f],r[f]);o[f]=l}return e}),[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(f=Date.now(),function(e){var t=Date.now();t-f>16?(f=t,e(t)):setTimeout((function(){m(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,_=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,f=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,T=e.title,d=e.titleAttributes;O(u.TAG_NAMES.BODY,r),O(u.TAG_NAMES.HTML,o),R(T,d);var E={baseTag:P(u.TAG_NAMES.BASE,n),linkTags:P(u.TAG_NAMES.LINK,i),metaTags:P(u.TAG_NAMES.META,a),noscriptTags:P(u.TAG_NAMES.NOSCRIPT,c),scriptTags:P(u.TAG_NAMES.SCRIPT,l),styleTags:P(u.TAG_NAMES.STYLE,s)},p={},A={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(A[e]=E[e].oldTags)})),t&&t(),f(e,p,A)},g=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),O(u.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var f=a[c],l=t[f]||"";n.getAttribute(f)!==l&&n.setAttribute(f,l),-1===o.indexOf(f)&&o.push(f);var s=i.indexOf(f);-1!==s&&i.splice(s,1)}for(var T=i.length-1;T>=0;T--)n.removeAttribute(i[T]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},P=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},M=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},w=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=I(n,r),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=M(n),i=g(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&S(v),e.defer?v=y((function(){_(e,(function(){v=null}))})):(_(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,f=e.scriptTags,l=e.styleTags,s=e.title,T=void 0===s?"":s,d=e.titleAttributes;return{base:w(u.TAG_NAMES.BASE,t,r),bodyAttributes:w(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:w(u.ATTRIBUTE_NAMES.HTML,o,r),link:w(u.TAG_NAMES.LINK,i,r),meta:w(u.TAG_NAMES.META,a,r),noscript:w(u.TAG_NAMES.NOSCRIPT,c,r),script:w(u.TAG_NAMES.SCRIPT,f,r),style:w(u.TAG_NAMES.STYLE,l,r),title:w(u.TAG_NAMES.TITLE,{title:T,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:E([u.TAG_PROPERTIES.HREF],e),bodyAttributes:d(u.ATTRIBUTE_NAMES.BODY,e),defer:A(e,u.HELMET_PROPS.DEFER),encode:A(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(u.ATTRIBUTE_NAMES.HTML,e),linkTags:p(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:p(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:p(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:s(e),titleAttributes:d(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=b}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-templates-tags-js-0b975d92cd7fae413711.js.map