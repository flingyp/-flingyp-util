import{_ as s,c as a,o as n,S as e}from"./chunks/framework.6e128ac8.js";const h=JSON.parse('{"title":"useCheckIncludeNumber","description":"","frontmatter":{},"headers":[],"relativePath":"Regexp/useCheckIncludeNumber/index.md","filePath":"Regexp/useCheckIncludeNumber/index.md","lastUpdated":1692928187000}'),l={name:"Regexp/useCheckIncludeNumber/index.md"},o=e(`<h1 id="usecheckincludenumber" tabindex="-1">useCheckIncludeNumber <a class="header-anchor" href="#usecheckincludenumber" aria-label="Permalink to &quot;useCheckIncludeNumber&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>检测字符串中是否包含数字</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCheckIncludeNumber } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@flypeng/tool/browser&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isCheckedOne</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCheckIncludeNumber</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@flypeng/tool&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isCheckedTwo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCheckIncludeNumber</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2022年8月10号&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//  true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useCheckIncludeNumber } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@flypeng/tool/browser&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isCheckedOne</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCheckIncludeNumber</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@flypeng/tool&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isCheckedTwo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCheckIncludeNumber</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2022年8月10号&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//  true</span></span></code></pre></div><h2 id="type-declaration" tabindex="-1">Type Declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type Declaration&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 检测字符串中是否包含数字</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">value</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@returns</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCheckIncludeNumber</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 检测字符串中是否包含数字</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">value</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@returns</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCheckIncludeNumber</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span></code></pre></div>`,7),p=[o];function c(t,r,y,i,u,d){return n(),a("div",null,p)}const b=s(l,[["render",c]]);export{h as __pageData,b as default};
