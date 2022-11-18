import{i as p}from"./chunks/bundle.35b89ea5.js";import{d as C,o as t,c,g as a,t as n,u as o,h as l,b as E,w as A,a as r,r as y}from"./app.40c17549.js";const B=C({__name:"index",setup(D){const s="?name=@flypeng/tool&description=\u5DE5\u5177\u5E93";return(F,e)=>(t(),c("div",null,[a("section",null," \u83B7\u53D6\u5F53\u524D\u5730\u5740\u7684\u53C2\u6570name\uFF1A "+n(o(p)("name")||"\u4E0D\u5B58\u5728\u6B64\u53C2\u6570"),1),a("section",null,[l(" \u83B7\u53D6"),a("label",{style:{color:"var(--vp-c-brand)"}},n(s)),l("\uFF1A "+n(o(p)("name",s)||"\u4E0D\u5B58\u5728\u6B64\u53C2\u6570"),1)]),a("section",null,[l(" \u83B7\u53D6"),a("label",{style:{color:"var(--vp-c-brand)"}},n(s)),l("\uFF1A "+n(o(p)("description",s)||"\u4E0D\u5B58\u5728\u6B64\u53C2\u6570"),1)])]))}}),i=r(`<h1 id="usegeturlparam" tabindex="-1">useGetUrlParam <a class="header-anchor" href="#usegeturlparam" aria-hidden="true">#</a></h1><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { useGetUrlParam } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@flypeng/tool&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u83B7\u53D6\u672C\u5730\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">param1</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useGetUrlParam</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;name&#39;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u83B7\u53D6\u6307\u5B9A\u5B57\u7B26\u4E32\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">param2</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useGetUrlParam</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;name&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;?name=@flypeng/tool&amp;description=\u5DE5\u5177\u5E93&#39;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">param3</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useGetUrlParam</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;description&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;?name=@flypeng/tool&amp;description=\u5DE5\u5177\u5E93&#39;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { useGetUrlParam } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;@flypeng/tool&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;">// \u83B7\u53D6\u672C\u5730\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">param1</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useGetUrlParam</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;name&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;">// \u83B7\u53D6\u6307\u5B9A\u5B57\u7B26\u4E32\u7684\u53C2\u6570</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">param2</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useGetUrlParam</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;name&#39;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&#39;?name=@flypeng/tool&amp;description=\u5DE5\u5177\u5E93&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">param3</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useGetUrlParam</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;description&#39;</span><span style="color:#24292F;">, </span><span style="color:#0A3069;">&#39;?name=@flypeng/tool&amp;description=\u5DE5\u5177\u5E93&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="online-demo" tabindex="-1">Online Demo <a class="header-anchor" href="#online-demo" aria-hidden="true">#</a></h2>`,4),u=r(`<h2 id="type-declaration" tabindex="-1">Type Declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;"> * \u83B7\u53D6URL\u53C2\u6570\u4E2D\u6307\u5B9A\u53C2\u6570\u503C</span></span>
<span class="line"><span style="color:#8B949E;"> * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#C9D1D9;">param</span></span>
<span class="line"><span style="color:#8B949E;"> * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#C9D1D9;">origin</span></span>
<span class="line"><span style="color:#8B949E;"> * </span><span style="color:#FF7B72;">@returns</span></span>
<span class="line"><span style="color:#8B949E;"> */</span></span>
<span class="line"><span style="color:#FF7B72;">declare</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useGetUrlParam</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">param</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">origin</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">)</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">null</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;"> * \u83B7\u53D6URL\u53C2\u6570\u4E2D\u6307\u5B9A\u53C2\u6570\u503C</span></span>
<span class="line"><span style="color:#6E7781;"> * </span><span style="color:#CF222E;">@param</span><span style="color:#6E7781;"> </span><span style="color:#24292F;">param</span></span>
<span class="line"><span style="color:#6E7781;"> * </span><span style="color:#CF222E;">@param</span><span style="color:#6E7781;"> </span><span style="color:#24292F;">origin</span></span>
<span class="line"><span style="color:#6E7781;"> * </span><span style="color:#CF222E;">@returns</span></span>
<span class="line"><span style="color:#6E7781;"> */</span></span>
<span class="line"><span style="color:#CF222E;">declare</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useGetUrlParam</span><span style="color:#24292F;">(</span><span style="color:#953800;">param</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">, </span><span style="color:#953800;">origin</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">null</span></span>
<span class="line"></span></code></pre></div>`,2),h=JSON.parse('{"title":"useGetUrlParam","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"Online Demo","slug":"online-demo","link":"#online-demo","children":[]},{"level":2,"title":"Type Declaration","slug":"type-declaration","link":"#type-declaration","children":[]}],"relativePath":"common/useGetUrlParam/index.md"}'),m={name:"common/useGetUrlParam/index.md"},P=C({...m,setup(D){return(s,F)=>{const e=y("demo-preview");return t(),c("div",null,[i,E(e,{title:"useGetUrlParam",description:"\u83B7\u53D6 URL \u53C2\u6570\u4E2D\u6307\u5B9A\u53C2\u6570\u503C",code:"%3Cscript%20lang=%22ts%22%20setup%3E%0A%20%20import%20%7B%20useGetUrlParam%20%7D%20from%20'@flypeng/tool'%0A%0A%20%20const%20customParams%20=%20'?name=@flypeng/tool&description=%E5%B7%A5%E5%85%B7%E5%BA%93'%0A%3C/script%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Csection%3E%0A%20%20%20%20%20%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E5%9C%B0%E5%9D%80%E7%9A%84%E5%8F%82%E6%95%B0name%EF%BC%9A%0A%20%20%20%20%20%20%7B%7B%20useGetUrlParam('name')%20%7C%7C%20'%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%AD%A4%E5%8F%82%E6%95%B0'%20%7D%7D%0A%20%20%20%20%3C/section%3E%0A%20%20%20%20%3Csection%3E%0A%20%20%20%20%20%20%E8%8E%B7%E5%8F%96%3Clabel%20style=%22color:%20var(--vp-c-brand)%22%3E%7B%7B%20customParams%20%7D%7D%3C/label%0A%20%20%20%20%20%20%3E%EF%BC%9A%0A%20%20%20%20%20%20%7B%7B%20useGetUrlParam('name',%20customParams)%20%7C%7C%20'%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%AD%A4%E5%8F%82%E6%95%B0'%20%7D%7D%0A%20%20%20%20%3C/section%3E%0A%20%20%20%20%3Csection%3E%0A%20%20%20%20%20%20%E8%8E%B7%E5%8F%96%3Clabel%20style=%22color:%20var(--vp-c-brand)%22%3E%7B%7B%20customParams%20%7D%7D%3C/label%0A%20%20%20%20%20%20%3E%EF%BC%9A%0A%20%20%20%20%20%20%7B%7B%20useGetUrlParam('description',%20customParams)%20%7C%7C%20'%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%AD%A4%E5%8F%82%E6%95%B0'%20%7D%7D%0A%20%20%20%20%3C/section%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20useGetUrlParam%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%40flypeng%2Ftool%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EcustomParams%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%3Fname%3D%40flypeng%2Ftool%26amp%3Bdescription%3D%E5%B7%A5%E5%85%B7%E5%BA%93%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E5%9C%B0%E5%9D%80%E7%9A%84%E5%8F%82%E6%95%B0name%EF%BC%9A%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3EuseGetUrlParam%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3Bname%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%7C%7C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%AD%A4%E5%8F%82%E6%95%B0%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%E8%8E%B7%E5%8F%96%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bcolor%3A%20var(--vp-c-brand)%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%7B%7B%20customParams%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Elabel%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%26gt%3B%EF%BC%9A%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3EuseGetUrlParam%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3Bname%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%20customParams)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%7C%7C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%AD%A4%E5%8F%82%E6%95%B0%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%E8%8E%B7%E5%8F%96%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bcolor%3A%20var(--vp-c-brand)%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%7B%7B%20customParams%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Elabel%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%26gt%3B%EF%BC%9A%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3EuseGetUrlParam%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3Bdescription%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%20customParams)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%7C%7C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%AD%A4%E5%8F%82%E6%95%B0%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20useGetUrlParam%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%40flypeng%2Ftool%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EcustomParams%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%3Fname%3D%40flypeng%2Ftool%26amp%3Bdescription%3D%E5%B7%A5%E5%85%B7%E5%BA%93%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E5%9C%B0%E5%9D%80%E7%9A%84%E5%8F%82%E6%95%B0name%EF%BC%9A%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseGetUrlParam%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bname%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%7C%7C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%AD%A4%E5%8F%82%E6%95%B0%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%E8%8E%B7%E5%8F%96%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bcolor%3A%20var(--vp-c-brand)%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%7B%7B%20customParams%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Elabel%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%26gt%3B%EF%BC%9A%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseGetUrlParam%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bname%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20customParams)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%7C%7C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%AD%A4%E5%8F%82%E6%95%B0%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%E8%8E%B7%E5%8F%96%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bcolor%3A%20var(--vp-c-brand)%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%7B%7B%20customParams%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Elabel%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%26gt%3B%EF%BC%9A%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3EuseGetUrlParam%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3Bdescription%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20customParams)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%7C%7C%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%AD%A4%E5%8F%82%E6%95%B0%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Esection%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"},{default:A(()=>[E(B)]),_:1}),u])}}});export{h as __pageData,P as default};
