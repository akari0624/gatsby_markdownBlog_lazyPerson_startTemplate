(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{M4XY:function(e,t,n){(function(t){n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt"),n("SRfc"),n("Oyvg");var u=1/0,r="[object Symbol]",a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,f=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+i+"]",c="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\d+",l="[\\u2700-\\u27bf]",x="[a-z\\xdf-\\xf6\\xf8-\\xff]",s="[^\\ud800-\\udfff"+i+d+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",g="[A-Z\\xc0-\\xd6\\xd8-\\xde]",h="(?:"+x+"|"+s+")",b="(?:"+g+"|"+s+")",w="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+w+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",p,m].join("|")+")[\\ufe0e\\ufe0f]?"+w+")*"),E="(?:"+[l,p,m].join("|")+")"+v,y=RegExp("['’]","g"),A=RegExp(c,"g"),O=RegExp([g+"?"+x+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,g,"$"].join("|")+")",b+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,g+h,"$"].join("|")+")",g+"?"+h+"+(?:['’](?:d|ll|m|re|s|t|ve))?",g+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",d,E].join("|"),"g"),j=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,I="object"==typeof t&&t&&t.Object===Object&&t,R="object"==typeof self&&self&&self.Object===Object&&self,z=I||R||Function("return this")();var L,S=(L={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==L?void 0:L[e]});var U=Object.prototype.toString,W=z.Symbol,C=W?W.prototype:void 0,N=C?C.toString:void 0;function T(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&U.call(e)==r}(e))return N?N.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}function Z(e){return null==e?"":T(e)}var D,k=(D=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,u){var r=-1,a=e?e.length:0;for(u&&a&&(n=e[++r]);++r<a;)n=t(n,e[r],r,e);return n}(function(e,t,n){return e=Z(e),void 0===(t=n?void 0:t)?function(e){return j.test(e)}(e)?function(e){return e.match(O)||[]}(e):function(e){return e.match(a)||[]}(e):e.match(t)||[]}(function(e){return(e=Z(e))&&e.replace(f,S).replace(A,"")}(e).replace(y,"")),D,"")});e.exports=k}).call(this,n("yLpj"))},MN1z:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return s}));var u=n("q1tI"),r=n.n(u),a=n("Wbzz"),f=n("vOnD"),i=n("M4XY"),o=n.n(i),c=n("Bl7J"),d=n("OWz4"),l=f.b.section.withConfig({displayName:"tags__FlexboxDivWrapper",componentId:"sc-6y409i-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;@media (max-width:","){flex-direction:column;}"],(function(e){return e.oneRowWidth})),x={title:"Morris' blog",tagsString:"",description:"標籤頁"},s="2012299592";t.default=function(e){var t=e.pageContext,n=e.data,u=t.tTag,f=t.allTagsArr,i=n.allMdx.edges,s=n.site.siteMetadata.oneRowWidth;return r.a.createElement(c.a,{pageData:x},r.a.createElement(l,{oneRowWidth:s},r.a.createElement(d.a,{oneRowWidth:s},r.a.createElement("h1",null,"標籤：",u),i.map((function(e){var t=e.node;return r.a.createElement("article",{key:""+t.frontmatter.title+t.frontmatter.date},r.a.createElement(a.a,{to:t.fields.slug},t.frontmatter.date,"   ",t.frontmatter.title))}))),r.a.createElement(d.b,{oneRowWidth:s},r.a.createElement("h3",null,"其他標籤"),function(e,t){return t.filter((function(t){return t!==e})).map((function(e){return r.a.createElement("div",{key:e},r.a.createElement(a.a,{to:"/tags/"+o()(e)},e))}))}(u,f))))}},OWz4:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var u=n("vOnD"),r=u.b.div.withConfig({displayName:"indexPageUI__LeftArticleListArea",componentId:"sc-3qdvky-0"})(["width:80%;margin-right:",";@media (max-width:","){width:100%;}"],"30px",(function(e){return e.oneRowWidth})),a=u.b.div.withConfig({displayName:"indexPageUI__RightTagsArea",componentId:"sc-3qdvky-1"})(["width:calc(20% - ",");@media (max-width:","){margin-top:2em;width:100%;}"],"30px",(function(e){return e.oneRowWidth}))}}]);
//# sourceMappingURL=component---src-templates-tags-js-8d182e28bc39b7e43a9c.js.map