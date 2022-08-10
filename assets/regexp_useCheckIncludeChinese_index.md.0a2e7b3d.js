import{_ as s,c as n,o as a,a as l}from"./app.a9af8b67.js";const C=JSON.parse('{"title":"useCheckIncludeChinese","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4ECB\u7ECD","slug":"\u57FA\u672C\u4ECB\u7ECD"},{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u7C7B\u578B\u58F0\u660E","slug":"\u7C7B\u578B\u58F0\u660E"}],"relativePath":"regexp/useCheckIncludeChinese/index.md"}'),e={name:"regexp/useCheckIncludeChinese/index.md"},p=l(`<h1 id="usecheckincludechinese" tabindex="-1">useCheckIncludeChinese <a class="header-anchor" href="#usecheckincludechinese" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u4ECB\u7ECD" tabindex="-1">\u57FA\u672C\u4ECB\u7ECD <a class="header-anchor" href="#\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u68C0\u6D4B\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u4E2D\u6587</p><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">useCheckIncludeChinese</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;@flypeng/tool&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">isCheckedOne</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useCheckPhoneNumber</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;Hello-World&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// false</span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">isCheckedTwo</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useCheckPhoneNumber</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;\u65E9\u4E0A\u597D&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">//  true</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#1C6B48;">import</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">useCheckIncludeChinese</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;@flypeng/tool&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">isCheckedOne</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useCheckPhoneNumber</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;Hello-World&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">isCheckedTwo</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useCheckPhoneNumber</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;\u65E9\u4E0A\u597D&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//  true</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B\u578B\u58F0\u660E" tabindex="-1">\u7C7B\u578B\u58F0\u660E <a class="header-anchor" href="#\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">/**</span></span>
<span class="line"><span style="color:#758575;"> * \u68C0\u6D4B\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u4E2D\u6587</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">param</span><span style="color:#758575;"> </span><span style="color:#B8A965;">value</span></span>
<span class="line"><span style="color:#758575;"> * </span><span style="color:#858585;">@</span><span style="color:#CB7676;">returns</span></span>
<span class="line"><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#CB7676;">declare</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">useCheckIncludeChinese</span><span style="color:#858585;">(</span><span style="color:#B8A965;">value</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">string</span><span style="color:#858585;">)</span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">boolean</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;"> * \u68C0\u6D4B\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u4E2D\u6587</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">param</span><span style="color:#A0ADA0;"> </span><span style="color:#8C862B;">value</span></span>
<span class="line"><span style="color:#A0ADA0;"> * </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">returns</span></span>
<span class="line"><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#AB5959;">declare</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">useCheckIncludeChinese</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">value</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">string</span><span style="color:#8E8F8B;">)</span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B58451;">boolean</span></span>
<span class="line"></span></code></pre></div>`,7),o=[p];function c(r,t,y,i,A,d){return a(),n("div",null,o)}var h=s(e,[["render",c]]);export{C as __pageData,h as default};
