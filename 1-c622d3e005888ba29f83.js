(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var r=n(0),o=n.n(r),a=n(1),i=n.n(a),s=n(169),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(210),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(48);n.d(t,"parsePath",function(){return d.a});var p=o.a.createContext({}),f=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},170:function(e,t,n){"use strict";n.d(t,"g",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"f",function(){return c}),n.d(t,"e",function(){return u});var r=n(11),o=function(e){return{type:r.g,payload:{headerHeight:e}}},a=function(e){return{type:r.b,payload:{anchorOpen:e}}},i=function(e){return{type:r.f,payload:{sidebarOpen:e}}},s=function(e){return{type:r.e,payload:{sidebarDocked:e}}},l=function(e){return{type:r.a,payload:{expandedKeys:e,autoExpandParent:!1}}},c=function(){return{type:r.d}},u=function(){return{type:r.c}}},193:function(e,t,n){"use strict";n(88),n(29),n(53);var r=n(246),o=n(0),a=n.n(o),i=n(1),s=n.n(i),l=n(247),c=n.n(l),u=n(168),d=n(8),p=n.n(d),f=n(257),h=n.n(f),m=n(51),g=n(170),y=(n(271),n(272),n(273)),b=function(){return a.a.createElement(u.StaticQuery,{query:"2236891844",render:function(e){var t=e.allMenuItems.edges.map(function(e){return e.node}).reverse();return a.a.createElement("div",null,t.map(function(e){return a.a.createElement("div",{style:{marginLeft:"2em",float:"right"},key:t.indexOf(e)},a.a.createElement("p",{style:{margin:0,fontSize:"1rem"}},a.a.createElement(u.Link,{to:e.link,style:{color:"white",textDecoration:"none"}},e.name)))}))},data:y})},v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).componentDidUpdate=function(){t.props.updateHeaderHeight(t.props.size.height)},t}return p()(t,e),t.prototype.render=function(){var e=this.props.siteTitle;return a.a.createElement("div",{style:{position:"fixed",top:0,width:"100%",zIndex:1e3,background:"cornflowerblue",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:1360,padding:"0.8rem 1.0875rem"}},a.a.createElement("div",{style:{float:"left",marginBottom:"0.8em"}},a.a.createElement("h1",{style:{margin:0,fontSize:"1.25rem"}},a.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))),a.a.createElement(b,null)))},t}(o.Component),E={updateHeaderHeight:g.g},k=Object(m.b)(function(){return{}},E)(h()({monitorHeight:!0})(v)),S=(n(274),n(89),function(e){return e.layout.sidebar}),w=function(e){return e.layout.header.height},O=function(e){return e.layout.content.onPostPage},x=(n(275),n(213),n(91),n(85),n(86),n(87),n(278)),P=n(284),C=n.n(P),M=(n(279),n(283),n(214)),A=C.a.SubMenu,R=function(e){var t=[],n=[];return e.forEach(function(e){if(e.parents===[]||null===e.parents)t.push(e);else{for(var r=t,o=function(t){if(0===r.filter(function(n){return n.title===e.parents[t]&&n.children}).length){var o={key:"tree/"+e.parents[t],title:e.parents[t],children:[]};r.push(o),n.push(o)}r=r.find(function(n){return n.title===e.parents[t]&&n.children}).children},a=0;a<e.parents.length;a++)o(a);r.push(e)}}),[t,n]},T=function(e){e.sort(function(e,t){return(e.children&&t.children||!e.children&&!t.children)&&e.title>t.title?1:e.children?1:-1})},H=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!1)},t}return p()(t,e),t.prototype.render=function(){var e=this,t=this.props.sidebar.expandedKeys,n=this.props.root;return a.a.createElement(u.StaticQuery,{query:"1176653062",render:function(r){var o=function(e){var t=e.map(function(e){return{path:e.node.fields.slug,key:e.node.id,title:e.node.frontmatter.title,parents:e.node.frontmatter.parents}});return R(t)}(r.allMarkdownRemark.edges.filter(function(e){return e.node.fields.slug.startsWith(n)})),i=o[0],s=o[1];T(i);var l=window.location.pathname.replace(M.pathPrefix.slice(0,-1),""),c=r.allMarkdownRemark.edges.filter(function(e){return l===e.node.fields.slug||l.slice(0,-1)===e.node.fields.slug&&"/"===l.slice(-1)}).length>0?[t]:[],d=s.map(function(e){return e.key});return a.a.createElement("div",null,a.a.createElement(C.a,{mode:"inline",defaultOpenKeys:d,selectedKeys:c,inlineIndent:12},function t(n){return n.map(function(n){return n.children?(T(n.children),a.a.createElement(A,{key:n.key,title:a.a.createElement("span",{style:{fontWeight:900}},n.title)},t(n.children))):a.a.createElement(C.a.Item,{key:n.key},a.a.createElement(u.Link,{to:n.path,onClick:e.onSetSidebarOpen},n.title))})}(i)))},data:x})},t}(o.Component),q={onSetSidebarOpen:g.c},D=Object(m.b)(function(e){return{sidebar:S(e)}},q)(H),j=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.root;return a.a.createElement("div",{style:{position:"fixed",top:t+30,left:10,right:"80%",bottom:0,overflow:"hidden"}},a.a.createElement("div",{style:{position:"absolute",left:0,right:10,top:0,bottom:0}},a.a.createElement(D,{root:n})))},t}(o.Component),I=Object(m.b)(function(e){return{headerHeight:w(e)}})(j),W=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.sidebarDocked,n=e.headerHeight,r=e.onPostPage;return a.a.createElement("div",{style:{position:"absolute",top:t||!r?n+30:n+70,left:t?"20%":0,right:t?"15%":0,bottom:0,overflow:t?"visible":"auto"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},this.props.children))},t}(o.Component),L=Object(m.b)(function(e){return{headerHeight:w(e),onPostPage:O(e)}})(W),G=n(343),Q=n.n(G),z=(n(340),n(342),Q.a.Link),B=function(e){for(var t=[],n=0;n<e.length;n++)for(var r=n+1;r<e.length;r++)if(e[n].depth+1===e[r].depth)e[n].children.push(e[r]),t.push(r);else if(e[n].depth>=e[r].depth)break;t.sort(function(e,t){return t-e}).forEach(function(t){return e.splice(t,1)})},K=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSetAnchorOpen=function(){n.props.onSetAnchorOpen(!1)},n.state={anchors:[]},n}p()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementsByClassName("post-toc-anchor");this.setState({anchors:function(e){var t=0;return e=[].slice.call(e).map(function(e){var n=parseInt(e.parentElement.nodeName[1]);return 0!==t&&n>t&&(n=t+1),t=n,{href:"#"+e.parentElement.id,title:e.parentElement.innerText,depth:n,children:[]}}),B(e),e}(e)})},n.render=function(){var e=this.state.anchors,t=this.props,n=t.offsetTop,r=t.affix;return a.a.createElement(Q.a,{offsetTop:n,onClick:this.onSetAnchorOpen,affix:r},function e(t){return t.map(function(t){return t.children.length>0?a.a.createElement(z,{href:t.href,title:t.title,key:t.href},e(t.children)):a.a.createElement(z,{href:t.href,title:t.title,key:t.href})})}(e))},t}(o.Component),N={onSetAnchorOpen:g.a},_=Object(m.b)(function(){return{}},N)(K),F=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.headerHeight;return a.a.createElement("div",{style:{position:"fixed",top:e+30,left:"85%",right:10,bottom:0,overflow:"hidden"}},a.a.createElement("div",{style:{position:"absolute",left:10,right:0,top:0,bottom:0}},a.a.createElement(_,{offsetTop:e+30,affix:!0})))},t}(o.Component),U=Object(m.b)(function(e){return{headerHeight:w(e)}})(F),J=n(235),Y=n.n(J),V=(n(234),function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!0)},t.onSetSidebarClose=function(){t.props.onSetSidebarOpen(!1)},t.onSetAnchorOpen=function(){t.props.onSetAnchorOpen(!0)},t.onSetAnchorClose=function(){t.props.onSetAnchorOpen(!1)},t}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.sidebarOpen,r=e.anchorOpen,o=e.root;return a.a.createElement("div",{style:{position:"fixed",top:t,width:"100%",height:40,zIndex:1e3,background:"aliceblue",marginBottom:"1.45rem"}},!r&&a.a.createElement("div",{style:{position:"absolute",left:8,top:4}},n?a.a.createElement(Y.a,{icon:"close",onClick:this.onSetSidebarClose}):a.a.createElement(Y.a,{icon:"bars",onClick:this.onSetSidebarOpen}),n&&a.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:0,bottom:0,backgroundColor:"white"}},a.a.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},a.a.createElement(D,{root:o})))),!n&&a.a.createElement("div",{style:{position:"absolute",right:8,top:4}},r?a.a.createElement(Y.a,{icon:"close",onClick:this.onSetAnchorClose}):a.a.createElement(Y.a,{icon:"ellipsis",onClick:this.onSetAnchorOpen}),r&&a.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:10,bottom:0,overflowY:"auto",backgroundColor:"white",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},a.a.createElement(_,{offsetTop:t+70,affix:!1}))))},t}(o.Component)),X={onSetSidebarOpen:g.c,onSetAnchorOpen:g.a},Z=Object(m.b)(function(e){return{headerHeight:w(e),sidebarOpen:S(e).open,anchorOpen:(t=e,t.layout.anchor).open};var t},X)(V),$=n(370),ee=n.n($),te=function(e){var t=e.children,n=e.setPostPageOn,o=e.setPostPageOff,i=e.sidebarRoot,s=e.onSetSidebarDocked,l=(e.sidebarDocked,e.onPostPage);return a.a.createElement(u.StaticQuery,{query:"3168754476",render:function(e){var r=e.allMarkdownRemark.edges.map(function(e){return e.node.fields.slug});if("undefined"!=typeof window){var u=window.location.pathname.replace(M.pathPrefix.slice(0,-1),"");r.indexOf(u)>=0||r.indexOf(u.slice(0,-1))>=0?n():o()}return a.a.createElement(ee.a,{maxWidth:1e3,onChange:function(e){s(!e)}},function(n){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},a.a.createElement("html",{lang:"en"})),a.a.createElement(k,{siteTitle:e.site.siteMetadata.title}),n&&l?a.a.createElement(Z,{root:i}):null,!n&&l?a.a.createElement(a.a.Fragment,null,a.a.createElement(I,{root:i})," ",a.a.createElement(U,null)," "):null,a.a.createElement(L,{sidebarDocked:!n},t))})},data:r})};te.propTypes={children:s.a.node.isRequired};var ne={setPostPageOn:g.f,setPostPageOff:g.e,onSetSidebarDocked:g.b},re=Object(m.b)(function(e){return{onPostPage:O(e)}},ne)(te);t.a=re},210:function(e,t,n){var r;e.exports=(r=n(256))&&r.default||r},214:function(e,t){(function(t){e.exports={siteMetadata:{title:"Gatsby Markdown Starter"},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-source-filesystem",options:{name:"images",path:t+"/src/images"}},{resolve:"gatsby-transformer-json",options:{typeName:"MenuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"menuItems",path:t+"/src/menuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"contents",path:t+"/contents"}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-markdown",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/gatsby-icon.png"}},{resolve:"gatsby-transformer-remark",options:{plugins:["gatsby-remark-katex",{resolve:"gatsby-remark-autolink-headers",options:{className:"post-toc-anchor"}}]}},"gatsby-plugin-remove-trailing-slashes"],pathPrefix:"/gatsby-starter-markdown/"}}).call(this,"/")},246:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Markdown Starter"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/README"}}},{node:{fields:{slug:"/blog/hello-world"}}},{node:{fields:{slug:"/docs/test"}}},{node:{fields:{slug:"/docs/test-1/test1"}}}]}}}},256:function(e,t,n){"use strict";n.r(t);n(31);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),s=n(78),l=n(3),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},273:function(e){e.exports={data:{allMenuItems:{edges:[{node:{name:"Docs",link:"/docs/test"}},{node:{name:"Blog",link:"/blog"}}]}}}},274:function(e,t,n){},278:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/README"},id:"4ae4be27-8cf5-5095-aed9-171bd325c169",frontmatter:{title:"README",parents:null}}},{node:{fields:{slug:"/blog/hello-world"},id:"3a9baa4a-664e-5457-bf53-3b0e0b1412e2",frontmatter:{title:"Hello World",parents:null}}},{node:{fields:{slug:"/docs/test"},id:"aedaa3a9-d5f3-5575-bf26-f19a172db6e4",frontmatter:{title:"Test",parents:[]}}},{node:{fields:{slug:"/docs/test-1/test1"},id:"4fb2aa46-5893-58f2-bfc4-8719e306b324",frontmatter:{title:"Test1",parents:["Test-1"]}}}]}}}},283:function(e,t,n){},342:function(e,t,n){}}]);
//# sourceMappingURL=1-c622d3e005888ba29f83.js.map