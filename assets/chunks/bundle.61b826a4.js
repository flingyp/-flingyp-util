function s(){return!(typeof window>"u"||!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))}function f(){return typeof window<"u"?{href:window.location.href,hostname:window.location.hostname,port:Number(window.location.port),pathname:window.location.pathname,params:decodeURIComponent(window.location.search),hash:decodeURIComponent(window.location.hash)}:null}function w(t,e){const n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)");let o=null;return typeof window<"u"&&(o=e==null?window.location.search.substring(1).match(n):e.substring(1).match(n)),o!=null?decodeURIComponent(o[2]):null}function h(){return![typeof window,typeof document].includes("undefined")}function p(t,e){let n=null;return function(...o){n&&clearTimeout(n),n=setTimeout(t.apply(this,o),e)}}function m(t,e){let n=Date.now();return function(...o){const r=this,c=o;if(Date.now()>=n+e)return n=Date.now(),t.apply(r,c)}}function g(t,e){let n,o=t;n=e?new Date(e):new Date;const r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};for(let c in r){const i=new RegExp(`(${c})`);if(i.test(o)){let u=r[c].toString();u.length===1&&(u=`0${u}`),o=o.replace(i,u)}}return o}function y(t){let e=document.querySelector(t);const n=(e==null?void 0:e.textContent)||"",o=document.createElement("textarea");o.setAttribute("readonly","readonly"),o.value=(e==null?void 0:e.textContent)||"",document.body.appendChild(o),o.select();const r=document.execCommand("copy");return document.body.removeChild(o),!!r||(navigator.clipboard.writeText(n),!1)}async function b(t,e){const n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.send(),n.onload=o=>{const r=n.response,c=URL.createObjectURL(r),i=document.createElement("a");i.setAttribute("href",c),i.setAttribute("download",e||""),i.click()}}function d(t,e){if(t>e){const n=t;t=e,e=n}return Math.floor(Math.random()*(e-t+1))+t}function C(t,e=3){let n=t.toString(),o=n.length;if(o<=e)return n;let r=o%e;const c=new RegExp(`\\d{${e}}`,"g"),i=n.slice(r,o).match(c).join(",");return r>0?n.slice(0,r)+","+i:i}function x(t){let{sensitiveSource:e,startIndex:n=0,endIndex:o=5,replaceSource:r="*"}=t,c="",i="";if(typeof e!="string")return;let u=e.substring(n,o+1);for(let l=0;l<u.length;l++)i+=r;return c=e.replace(u,i),c}const a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];function M(t=10){let e="";for(var n=0;n<t;n++){const o=d(0,a.length-1);e+=a[o]}return e}function S(t){t=String(t);for(let e=0;e<t.length;e++){const n=t.charCodeAt(e);if(55296<=n&&n<=56319){if(t.length>1){const o=1024*(n-55296)+(t.charCodeAt(e+1)-56320)+65536;if(118784<=o&&o<=128895)return!0}}else if(t.length>1){if(t.charCodeAt(e+1)==8419)return!0}else if(8448<=n&&n<=10239||11013<=n&&n<=11015||10548<=n&&n<=10549||12951<=n&&n<=12953||n==169||n==174||n==12349||n==12336||n==11093||n==11036||n==11035||n==11088)return!0}return!1}export{x as C,M as E,p as a,m as c,s as e,y as f,C as h,g as l,f as n,w as o,b as p,h as r,S as v,d as w};
