import{u as s}from"./chunks/index.UkDNXBGx.js";import{d as o,o as E,c as e,k as a,t as n,m as l,D as C,I as p,w as D,R as F}from"./chunks/framework.zvTB9_zP.js";import"./chunks/index.-YXPD9NO.js";const A=o({__name:"index",setup(t){return(r,c)=>(E(),e("div",null,[a("div",null,"当前年份: "+n(l(s)("yyyy")),1),a("div",null,"当前月份: "+n(l(s)("MM")),1),a("div",null,"当前几号: "+n(l(s)("dd")),1),a("div",null,"当前时间: "+n(l(s)("yyyy-MM-dd hh:mm:ss")),1),a("div",null,"传入一个Unix时间戳: "+n(l(s)("yyyy-MM-dd hh:mm:ss","2021-01-17T13:32:06.381Z")),1),a("div",null,"传入一个时间戳: "+n(l(s)("yyyy-MM-dd hh:mm:ss",1668528e6)),1)]))}}),B=F(`<h1 id="useformatdate" tabindex="-1">useFormatDate <a class="header-anchor" href="#useformatdate" aria-label="Permalink to &quot;useFormatDate&quot;">​</a></h1><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useFormatDate } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@flypeng/tool/browser&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useFormatDate } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@flypeng/tool/browser&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="type-declaration" tabindex="-1">Type Declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type Declaration&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 格式类型</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DateFormatOption</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;yyyy-MM-dd hh:mm:ss&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;yyyy-MM-dd&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;yyyy/MM/dd&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hh:mm:ss&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;yyyy&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;MM&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;dd&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hh&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;mm&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ss&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 格式化日期函数</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">format</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">date</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useFormatDate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">format</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DateFormatOption</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">date</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 格式类型</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DateFormatOption</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;yyyy-MM-dd hh:mm:ss&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;yyyy-MM-dd&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;yyyy/MM/dd&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hh:mm:ss&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;yyyy&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;MM&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;dd&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hh&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;mm&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ss&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 格式化日期函数</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">format</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">date</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useFormatDate</span><span style="color:#24292E;">(</span><span style="color:#E36209;">format</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DateFormatOption</span><span style="color:#24292E;">, </span><span style="color:#E36209;">date</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="online-demo" tabindex="-1">Online Demo <a class="header-anchor" href="#online-demo" aria-label="Permalink to &quot;Online Demo&quot;">​</a></h2>`,6),h=JSON.parse('{"title":"useFormatDate","description":"","frontmatter":{},"headers":[],"relativePath":"Date/useFormatDate/index.md","filePath":"Date/useFormatDate/index.md","lastUpdated":1700544640000}'),i={name:"Date/useFormatDate/index.md"},g=o({...i,setup(t){return(r,c)=>{const y=C("demo-preview");return E(),e("div",null,[B,p(y,{title:"useFormatDate",description:"Format Date",code:"%3Cscript%20lang=%22ts%22%20setup%3E%0Aimport%20%7B%20useFormatDate%20%7D%20from%20'@flypeng/browser';%0A%3C/script%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%3E%E5%BD%93%E5%89%8D%E5%B9%B4%E4%BB%BD:%20%7B%7B%20useFormatDate('yyyy')%20%7D%7D%3C/div%3E%0A%20%20%20%20%3Cdiv%3E%E5%BD%93%E5%89%8D%E6%9C%88%E4%BB%BD:%20%7B%7B%20useFormatDate('MM')%20%7D%7D%3C/div%3E%0A%20%20%20%20%3Cdiv%3E%E5%BD%93%E5%89%8D%E5%87%A0%E5%8F%B7:%20%7B%7B%20useFormatDate('dd')%20%7D%7D%3C/div%3E%0A%20%20%20%20%3Cdiv%3E%E5%BD%93%E5%89%8D%E6%97%B6%E9%97%B4:%20%7B%7B%20useFormatDate('yyyy-MM-dd%20hh:mm:ss')%20%7D%7D%3C/div%3E%0A%20%20%20%20%3Cdiv%3E%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AAUnix%E6%97%B6%E9%97%B4%E6%88%B3:%20%7B%7B%20useFormatDate('yyyy-MM-dd%20hh:mm:ss',%20'2021-01-17T13:32:06.381Z')%20%7D%7D%3C/div%3E%0A%20%20%20%20%3Cdiv%3E%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AA%E6%97%B6%E9%97%B4%E6%88%B3:%20%7B%7B%20useFormatDate('yyyy-MM-dd%20hh:mm:ss',%201668528000000)%20%7D%7D%3C/div%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20github-dark%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%7B%20useFormatDate%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3B%40flypeng%2Fbrowser%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E5%B9%B4%E4%BB%BD%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E6%9C%88%E4%BB%BD%3A%20%7B%7B%20useFormatDate(%26%2339%3BMM%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E5%87%A0%E5%8F%B7%3A%20%7B%7B%20useFormatDate(%26%2339%3Bdd%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E6%97%B6%E9%97%B4%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AAUnix%E6%97%B6%E9%97%B4%E6%88%B3%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B%2C%20%26%2339%3B2021-01-17T13%3A32%3A06.381Z%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AA%E6%97%B6%E9%97%B4%E6%88%B3%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B%2C%201668528000000)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20github-light%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%7B%20useFormatDate%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3B%40flypeng%2Fbrowser%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E5%B9%B4%E4%BB%BD%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E6%9C%88%E4%BB%BD%3A%20%7B%7B%20useFormatDate(%26%2339%3BMM%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E5%87%A0%E5%8F%B7%3A%20%7B%7B%20useFormatDate(%26%2339%3Bdd%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E6%97%B6%E9%97%B4%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AAUnix%E6%97%B6%E9%97%B4%E6%88%B3%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B%2C%20%26%2339%3B2021-01-17T13%3A32%3A06.381Z%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AA%E6%97%B6%E9%97%B4%E6%88%B3%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B%2C%201668528000000)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"},{default:D(()=>[p(A)]),_:1})])}}});export{h as __pageData,g as default};
