(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{189:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(199);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},193:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(12),o=n.n(i),u=n(192),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(194),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(38);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},194:function(e,t,n){var a;e.exports=(a=n(196))&&a.default||a},195:function(e){e.exports={data:{site:{siteMetadata:{title:"somebody's blog"}}}}},196:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),u=n(41),c=n(1),s=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(u.a,{location:t,pageResources:n})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},197:function(e,t,n){},199:function(e,t,n){"use strict";var a=n(195),r=n(0),i=n.n(r),o=n(12),u=n.n(o),c=n(202),s=n.n(c),l=n(193),d=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},m=(n(197),n(204),function(e){var t=e.children;return e.data,i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});m.propTypes={children:u.a.node.isRequired},t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-7f20604f28a3646c3287.js.map