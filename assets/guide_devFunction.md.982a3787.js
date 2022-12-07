import{d as t,o as n,c as s,F as r,k as i,u as F,g as u,t as d,_ as D,b as E,h as e,a as _}from"./app.c6f736a9.js";const h=JSON.parse('[{"text":"Common","link":"/Common/useCommonType/"},{"text":"Date","link":"/Date/useFormatDate/"},{"text":"Dom","link":"/Dom/useCopySelector/"},{"text":"Number","link":"/Number/useRandomInteger/"},{"text":"Object","link":"/Object/useObjectIsEmpty/"},{"text":"Regexp","link":"/Regexp/useCheckPhoneNumber/"},{"text":"String","link":"/String/useCheckIncludeEmoji/"},{"text":"Node","link":"/Node/useGetCurrentPath"}]'),C={id:"modules-show-container"},g=["href"],B=t({__name:"DevFunctionModulesShow",setup(a){return(l,c)=>(n(),s("div",C,[(n(!0),s(r,null,i(F(h),(o,p)=>(n(),s("div",{key:p},[u("a",{href:`/flypeng-tool${o.link}`},"- "+d(o.text)+" Functions \u6A21\u5757",9,g)]))),128))]))}});const y=D(B,[["__scopeId","data-v-fed0a6db"]]),A=u("h1",{id:"dev-function",tabindex:"-1"},[e("Dev Function "),u("a",{class:"header-anchor",href:"#dev-function","aria-hidden":"true"},"#")],-1),m=u("h2",{id:"introduce",tabindex:"-1"},[e("Introduce "),u("a",{class:"header-anchor",href:"#introduce","aria-hidden":"true"},"#")],-1),f=u("p",null,[e("\u5F53\u4F60\u51C6\u5907\u5411 "),u("strong",null,"@flypeng/tool"),e(" \u65B0\u589E\u65B0 Function \u65F6\uFF0C\u6839\u636E\u65B0 Function \u7684\u7279\u6027\u6765\u51B3\u5B9A\u653E\u7F6E\u5728\u54EA\u4E2A\u6A21\u5757\u3002")],-1),v=u("p",null,[e("\u76EE\u524D "),u("strong",null,"@flypeng/tool"),e(" \u5DF2\u7ECF\u5B58\u5728\u5982\u4E0B\u6A21\u5757\uFF1A")],-1),x=_(`<p>\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u5B58\u5728 <strong>template</strong> \u76EE\u5F55\uFF0C\u91CC\u9762\u6709 <strong>Docs Template</strong>\u3001<strong>Function Template</strong></p><p>\u6DFB\u52A0\u65B0 Function \u65F6\uFF0C\u8BF7\u53C2\u8003\u5DF2\u5B58\u5728\u7684 Function \u6765\u8FDB\u884C\u6DFB\u52A0</p><h2 id="attention" tabindex="-1">Attention <a class="header-anchor" href="#attention" aria-hidden="true">#</a></h2><ol><li><p>\u51FD\u6570\u547D\u540D\u7EDF\u4E00\uFF1A <code>useAaBb</code></p></li><li><p>\u51FD\u6570\u7EDF\u4E00\u88AB\u9ED8\u8BA4\u5BFC\u51FA</p></li><li><p>\u51FD\u6570\u547D\u540D\u65F6\u8981\u786E\u4FDD\u540D\u79F0\u552F\u4E00\uFF0C\u4E0D\u53EF\u91CD\u590D</p></li></ol><p>\u6B64\u5904\u505A\u6CD5\u7684\u597D\u5904\u5C31\u662F\uFF1A\u5F00\u53D1\u8005\u5728\u4F7F\u7528\u5DE5\u5177\u5E93\u65F6\uFF0C\u5728\u8F93\u5165 <code>use</code> \u65F6 \u4F1A\u5217\u51FA\u6240\u6709\u7684\u51FD\u6570\u540D\u79F0\uFF0C\u4F1A\u63D0\u4F9B\u6781\u597D\u7684\u7C7B\u578B\u63D0\u793A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { useAaBb } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@flypeng/tool&#39;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { useAaBb } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;@flypeng/tool&#39;</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u6587\u6863\u4E2D\u6240\u51FA\u73B0\u7684\u5982\u4E0B\u4EE3\u7801\u3002\u5747\u53EF\u5728 <code>@flypeng/tool</code> \u5305\u4E2D\u5F15\u5165\uFF0C\u8FD9\u6837\u505A\u5206\u5305\u7684\u76EE\u7684\u662F\u56E0\u4E3A <strong>Vitepress</strong> \u4E2D\u5982\u679C\u5BFC\u5165\u4E86 Node \u6A21\u5757\u5728\u5F00\u53D1\u548C\u6784\u5EFA\u5F53\u4E2D\u90FD\u4F1A\u51FA\u73B0\u4E00\u4E9B\u5947\u602A\u7684\u9519\u8BEF\u3002\u800C\u5206\u5305\u540E\uFF0C\u5728\u5F00\u53D1\u9636\u6BB5\u6211\u4EEC\u53EA\u5728\u6587\u6863\u4E2D\u5F15\u5165 <code>@flypeng/browser</code>\uFF0C\u800C <code>@flypeng/node</code> \u6A21\u5757\u5219\u53E6\u5916\u5F00\u4E86\u4E00\u4E2A <strong>playground</strong> \u6765\u6D4B\u8BD5\u76F8\u5173\u94A9\u5B50\u51FD\u6570</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { xxx } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@flypeng/browser&#39;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { xxx } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;@flypeng/browser&#39;</span></span>
<span class="line"></span></code></pre></div>`,8),N=JSON.parse('{"title":"Dev Function","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduce","slug":"introduce","link":"#introduce","children":[]},{"level":2,"title":"Attention","slug":"attention","link":"#attention","children":[]}],"relativePath":"guide/devFunction.md"}'),k={name:"guide/devFunction.md"},S=t({...k,setup(a){return(l,c)=>(n(),s("div",null,[A,m,f,v,E(y),x]))}});export{N as __pageData,S as default};
