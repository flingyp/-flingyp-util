import{_ as s,c as n,o as a,a as l}from"./app.f57829f4.js";const D=JSON.parse('{"title":"useCheckIncludeNumber","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"Type Declaration","slug":"type-declaration","link":"#type-declaration","children":[]}],"relativePath":"regexp/useCheckIncludeNumber/index.md"}'),e={name:"regexp/useCheckIncludeNumber/index.md"},p=l(`<h1 id="usecheckincludenumber" tabindex="-1">useCheckIncludeNumber <a class="header-anchor" href="#usecheckincludenumber" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>\u68C0\u6D4B\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u4E2D\u6587</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useCheckIncludeNumber</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@flypeng/tool</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">isCheckedOne</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">useCheckIncludeNumber</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@flypeng/tool</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span><span style="color:#CB7676;"> </span><span style="color:#758575DD;">// false</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">isCheckedTwo</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">useCheckIncludeNumber</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">2022\u5E748\u670810\u53F7</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span><span style="color:#CB7676;"> </span><span style="color:#758575DD;">//  true</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useCheckIncludeNumber</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@flypeng/tool</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">isCheckedOne</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">useCheckIncludeNumber</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@flypeng/tool</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span><span style="color:#AB5959;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">isCheckedTwo</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">useCheckIncludeNumber</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">2022\u5E748\u670810\u53F7</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span><span style="color:#AB5959;"> </span><span style="color:#A0ADA0;">//  true</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declaration" tabindex="-1">Type Declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h2><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575DD;">/**</span></span>
<span class="line"><span style="color:#758575DD;"> * \u68C0\u6D4B\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u6570\u5B57</span></span>
<span class="line"><span style="color:#758575DD;"> * </span><span style="color:#666666;">@</span><span style="color:#4D9375;">param</span><span style="color:#758575DD;"> </span><span style="color:#BD976A;">value</span></span>
<span class="line"><span style="color:#758575DD;"> * </span><span style="color:#666666;">@</span><span style="color:#4D9375;">returns</span></span>
<span class="line"><span style="color:#758575DD;"> */</span></span>
<span class="line"><span style="color:#CB7676;">declare</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">useCheckIncludeNumber</span><span style="color:#666666;">(</span><span style="color:#BD976A;">value</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">string</span><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">boolean</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * \u68C0\u6D4B\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u6570\u5B57</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#999999;">@</span><span style="color:#1E754F;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#B07D48;">value</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#999999;">@</span><span style="color:#1E754F;">returns</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">useCheckIncludeNumber</span><span style="color:#999999;">(</span><span style="color:#B07D48;">value</span><span style="color:#999999;">: </span><span style="color:#2E808F;">string</span><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">boolean</span></span>
<span class="line"></span></code></pre></div>`,7),o=[p];function c(t,r,y,i,A,d){return a(),n("div",null,o)}const h=s(e,[["render",c]]);export{D as __pageData,h as default};
