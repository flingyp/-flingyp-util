import{u as c}from"./chunks/index.bb651d16.js";import{d as F,o as B,c as i,f as l,t as p,u as o,a as y,w as A,b as d,r as m}from"./app.6b508245.js";function e(E,a){let n=E,s=new Date;c.isString(a)&&(s=new Date(a)),c.isNumber(a)&&(s=new Date(a)),c.isDate(a)&&(s=a);const r={"y+":s.getFullYear(),"M+":s.getMonth()+1,"d+":s.getDate(),"h+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds()};for(let C in r){const D=new RegExp(`(${C})`);if(D.test(n)){let t=r[C].toString();t.length===1&&(t=`0${t}`),n=n.replace(D,t)}}return n}const u=F({__name:"index",setup(E){return(a,n)=>(B(),i("div",null,[l("div",null,"当前年份: "+p(o(e)("yyyy")),1),l("div",null,"当前月份: "+p(o(e)("MM")),1),l("div",null,"当前几号: "+p(o(e)("dd")),1),l("div",null,"当前时间: "+p(o(e)("yyyy-MM-dd hh:mm:ss")),1),l("div",null,"传入一个Unix时间戳: "+p(o(e)("yyyy-MM-dd hh:mm:ss","2021-01-17T13:32:06.381Z")),1),l("div",null,"传入一个时间戳: "+p(o(e)("yyyy-MM-dd hh:mm:ss",1668528e6)),1)]))}}),h=d(`<h1 id="useformatdate" tabindex="-1">useFormatDate <a class="header-anchor" href="#useformatdate" aria-hidden="true">#</a></h1><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { useFormatDate } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@flypeng/tool/browser&#39;</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { useFormatDate } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;@flypeng/tool/browser&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declaration" tabindex="-1">Type Declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;"> * 格式类型</span></span>
<span class="line"><span style="color:#8B949E;"> */</span></span>
<span class="line"><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">DateFormatOption</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;yyyy-MM-dd hh:mm:ss&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;yyyy-MM-dd&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;yyyy/MM/dd&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;hh:mm:ss&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;yyyy&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;MM&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;dd&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;hh&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;mm&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;ss&#39;</span></span>
<span class="line"><span style="color:#8B949E;">/**</span></span>
<span class="line"><span style="color:#8B949E;"> * 格式化日期函数</span></span>
<span class="line"><span style="color:#8B949E;"> * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#C9D1D9;">format</span></span>
<span class="line"><span style="color:#8B949E;"> * </span><span style="color:#FF7B72;">@param</span><span style="color:#8B949E;"> </span><span style="color:#C9D1D9;">date</span></span>
<span class="line"><span style="color:#8B949E;"> */</span></span>
<span class="line"><span style="color:#FF7B72;">declare</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useFormatDate</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">format</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">DateFormatOption</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">date</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Date</span><span style="color:#C9D1D9;">)</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;"> * 格式类型</span></span>
<span class="line"><span style="color:#6E7781;"> */</span></span>
<span class="line"><span style="color:#CF222E;">type</span><span style="color:#24292F;"> </span><span style="color:#953800;">DateFormatOption</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;yyyy-MM-dd hh:mm:ss&#39;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;yyyy-MM-dd&#39;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;yyyy/MM/dd&#39;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;hh:mm:ss&#39;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;yyyy&#39;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;MM&#39;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;dd&#39;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;hh&#39;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;mm&#39;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;ss&#39;</span></span>
<span class="line"><span style="color:#6E7781;">/**</span></span>
<span class="line"><span style="color:#6E7781;"> * 格式化日期函数</span></span>
<span class="line"><span style="color:#6E7781;"> * </span><span style="color:#CF222E;">@param</span><span style="color:#6E7781;"> </span><span style="color:#24292F;">format</span></span>
<span class="line"><span style="color:#6E7781;"> * </span><span style="color:#CF222E;">@param</span><span style="color:#6E7781;"> </span><span style="color:#24292F;">date</span></span>
<span class="line"><span style="color:#6E7781;"> */</span></span>
<span class="line"><span style="color:#CF222E;">declare</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">useFormatDate</span><span style="color:#24292F;">(</span><span style="color:#953800;">format</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#953800;">DateFormatOption</span><span style="color:#24292F;">, </span><span style="color:#953800;">date</span><span style="color:#CF222E;">?:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">number</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">|</span><span style="color:#24292F;"> </span><span style="color:#953800;">Date</span><span style="color:#24292F;">)</span><span style="color:#CF222E;">:</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">string</span></span>
<span class="line"></span></code></pre></div><h2 id="online-demo" tabindex="-1">Online Demo <a class="header-anchor" href="#online-demo" aria-hidden="true">#</a></h2>`,6),f=JSON.parse('{"title":"useFormatDate","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"Type Declaration","slug":"type-declaration","link":"#type-declaration","children":[]},{"level":2,"title":"Online Demo","slug":"online-demo","link":"#online-demo","children":[]}],"relativePath":"Date/useFormatDate/index.md"}'),g={name:"Date/useFormatDate/index.md"},b=F({...g,setup(E){return(a,n)=>{const s=m("demo-preview");return B(),i("div",null,[h,y(s,{title:"useFormatDate",description:"Format Date",code:"%3Cscript%20lang=%22ts%22%20setup%3E%0A%20%20import%20%7B%20useFormatDate%20%7D%20from%20'@flypeng/browser'%0A%3C/script%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%3E%E5%BD%93%E5%89%8D%E5%B9%B4%E4%BB%BD:%20%7B%7B%20useFormatDate('yyyy')%20%7D%7D%3C/div%3E%0A%20%20%20%20%3Cdiv%3E%E5%BD%93%E5%89%8D%E6%9C%88%E4%BB%BD:%20%7B%7B%20useFormatDate('MM')%20%7D%7D%3C/div%3E%0A%20%20%20%20%3Cdiv%3E%E5%BD%93%E5%89%8D%E5%87%A0%E5%8F%B7:%20%7B%7B%20useFormatDate('dd')%20%7D%7D%3C/div%3E%0A%20%20%20%20%3Cdiv%3E%E5%BD%93%E5%89%8D%E6%97%B6%E9%97%B4:%20%7B%7B%20useFormatDate('yyyy-MM-dd%20hh:mm:ss')%20%7D%7D%3C/div%3E%0A%20%20%20%20%3Cdiv%3E%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AAUnix%E6%97%B6%E9%97%B4%E6%88%B3:%20%7B%7B%20useFormatDate('yyyy-MM-dd%20hh:mm:ss',%20'2021-01-17T13:32:06.381Z')%20%7D%7D%3C/div%3E%0A%20%20%20%20%3Cdiv%3E%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AA%E6%97%B6%E9%97%B4%E6%88%B3:%20%7B%7B%20useFormatDate('yyyy-MM-dd%20hh:mm:ss',%201668528000000)%20%7D%7D%3C/div%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20github-dark%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20useFormatDate%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%40flypeng%2Fbrowser%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E5%B9%B4%E4%BB%BD%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E6%9C%88%E4%BB%BD%3A%20%7B%7B%20useFormatDate(%26%2339%3BMM%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E5%87%A0%E5%8F%B7%3A%20%7B%7B%20useFormatDate(%26%2339%3Bdd%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E6%97%B6%E9%97%B4%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AAUnix%E6%97%B6%E9%97%B4%E6%88%B3%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B%2C%20%26%2339%3B2021-01-17T13%3A32%3A06.381Z%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AA%E6%97%B6%E9%97%B4%E6%88%B3%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B%2C%201668528000000)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20github-light%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20useFormatDate%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%40flypeng%2Fbrowser%26%2339%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E5%B9%B4%E4%BB%BD%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E6%9C%88%E4%BB%BD%3A%20%7B%7B%20useFormatDate(%26%2339%3BMM%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E5%87%A0%E5%8F%B7%3A%20%7B%7B%20useFormatDate(%26%2339%3Bdd%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%E5%BD%93%E5%89%8D%E6%97%B6%E9%97%B4%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AAUnix%E6%97%B6%E9%97%B4%E6%88%B3%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B%2C%20%26%2339%3B2021-01-17T13%3A32%3A06.381Z%26%2339%3B)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AA%E6%97%B6%E9%97%B4%E6%88%B3%3A%20%7B%7B%20useFormatDate(%26%2339%3Byyyy-MM-dd%20hh%3Amm%3Ass%26%2339%3B%2C%201668528000000)%20%7D%7D%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"},{default:A(()=>[y(u)]),_:1})])}}});export{f as __pageData,b as default};
