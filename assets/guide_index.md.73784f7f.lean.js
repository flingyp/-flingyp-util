import{d as l,c as e,k as s,a as n,t as a,l as o,S as p,o as t}from"./chunks/framework.6e128ac8.js";const r="5.3.2",c=54,i=s("h1",{id:"get-started",tabindex:"-1"},[n("Get Started "),s("a",{class:"header-anchor",href:"#get-started","aria-label":'Permalink to "Get Started"'},"​")],-1),y=s("p",null,[s("strong",null,[s("span",{style:{color:"var(--component-preview-primary-color)","font-size":"16px"}},"@flypeng/tool")]),n(" 是一个集成各种实用功能的开发工具箱")],-1),E={style:{color:"var(--component-preview-primary-color)","font-weight":"600","font-size":"16px"}},d={style:{color:"var(--component-preview-primary-color)","font-weight":"600","font-size":"16px"}},u=p(`<h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@flypeng/tool@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@flypeng/tool@latest</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useRandomInteger, useIsMobile } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@flypeng/tool/browser&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useGetCurrentPath, useIsFile } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@flypeng/tool/node&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isMobile</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useIsMobile</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// isMobile is Boolean</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">randomInteger</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useRandomInteger</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// Integer in [10, 100]</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isFile</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useIsFile</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">useGetCurrentPath</span><span style="color:#E1E4E8;">()) </span><span style="color:#6A737D;">// isFile is Boolean</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useRandomInteger, useIsMobile } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@flypeng/tool/browser&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useGetCurrentPath, useIsFile } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@flypeng/tool/node&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isMobile</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useIsMobile</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// isMobile is Boolean</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">randomInteger</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRandomInteger</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// Integer in [10, 100]</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isFile</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useIsFile</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">useGetCurrentPath</span><span style="color:#24292E;">()) </span><span style="color:#6A737D;">// isFile is Boolean</span></span></code></pre></div><h2 id="通过-cdn-引入" tabindex="-1">通过 CDN 引入 <a class="header-anchor" href="#通过-cdn-引入" aria-label="Permalink to &quot;通过 CDN 引入&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;https://unpkg.com/@flypeng/tool@\${version}/browser/index-browser.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text/javascript&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	// All methods are injected into fy global variable</span></span>
<span class="line"><span style="color:#E1E4E8;">	const isMobile = useIsMobile() // isMobile is Boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">	const randomInteger = useRandomInteger(10, 100) // Integer in [10, 100]</span></span>
<span class="line"><span style="color:#E1E4E8;">	const isFile = useIsFile(useGetCurrentPath()) // isFile is Boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;https://unpkg.com/@flypeng/tool@\${version}/browser/index-browser.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text/javascript&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	// All methods are injected into fy global variable</span></span>
<span class="line"><span style="color:#24292E;">	const isMobile = useIsMobile() // isMobile is Boolean</span></span>
<span class="line"><span style="color:#24292E;">	const randomInteger = useRandomInteger(10, 100) // Integer in [10, 100]</span></span>
<span class="line"><span style="color:#24292E;">	const isFile = useIsFile(useGetCurrentPath()) // isFile is Boolean</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里使用了 <a href="https://unpkg.com/" target="_blank" rel="noreferrer">unpkg</a> ，但也可以使用其他提供包服务的 CDN，例如 <a href="https://www.jsdelivr.com/" target="_blank" rel="noreferrer">jsdelivr</a> 或 <a href="https://cdnjs.com/" target="_blank" rel="noreferrer">cdnjs</a>。</p><p>也可以下载此文件并自行提供服务。</p></div><h2 id="project-introduction" tabindex="-1">Project introduction <a class="header-anchor" href="#project-introduction" aria-label="Permalink to &quot;Project introduction&quot;">​</a></h2><p>项目的灵感来自于 VueUse。开发这样一个工具库来用于平时开发中，可以极大的提高开发者的效率</p><p><strong>@flypeng/tool</strong>：</p><ol><li><p>使用 TypeScript 语言 配置 Rollup 打包工具进行实用函数的编写和打包</p></li><li><p>使用 vitest 进行功能测试，每个实用函数应配备 <code>index.test.ts</code> 测试文件</p></li><li><p>工具箱使用 vitepress 文档，各种实用函数 Introduction、在线 Demo 演示编写。确保在不好书写测试用例的情况下，进行 Demo 演示</p></li></ol>`,11),f=JSON.parse('{"title":"Get Started","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md","lastUpdated":1692928187000}'),g={name:"guide/index.md"},v=l({...g,setup(h){return(F,m)=>(t(),e("div",null,[i,y,s("p",null,[n("当前版本："),s("span",E,"v"+a(o(r)),1)]),s("p",null,[n("函数统计："),s("span",d,a(o(c))+" Functions",1)]),u]))}});export{f as __pageData,v as default};
