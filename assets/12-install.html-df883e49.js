import{_}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as h,c as p,a as d,e as i,b as e,w as s,d as t,f as m}from"./app-c284fd83.js";const b={},v=e("h2",{id:"windows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),t(" Windows")],-1),g=e("p",null,"Windows的运行多个AList没什么好说的，直接改端口号启动就行",-1),x={style:{"text-align":"right"}},f={href:"https://www.bilibili.com/video/BV14s4y1h7yZ",target:"_blank",rel:"noopener noreferrer"},w=e("strong",null,"BV14s4y1h7yZ",-1),B=e("h2",{id:"linux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),t(" Linux")],-1),V=e("p",null,"最方便的办法安装多个AList同时运行",-1),k={style:{"text-align":"right"}},y={href:"https://www.bilibili.com/video/BV1rF41197Qv",target:"_blank",rel:"noopener noreferrer"},N=e("strong",null,"BV1rF41197Qv",-1),A={style:{"text-align":"right"}},L={href:"https://www.youtube.com/watch?v=3Kb8Vr7uNws",target:"_blank",rel:"noopener noreferrer"},T=e("strong",null,"3Kb8Vr7uNws",-1),z=e("h4",{id:"另手动安装alist",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#另手动安装alist","aria-hidden":"true"},"#"),t(),e("strong",null,"另手动安装AList")],-1),C=e("p",null,[e("mark",null,"推荐先使用视频中的哪种办法，如果你非要试试手动安装你再看下面的教程")],-1),F={href:"https://github.com/alist-org/alist/releases/",target:"_blank",rel:"noopener noreferrer"},I=e("ul",null,[e("li",null,[t("如果提示 "),e("strong",null,"lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./alist)或者 accept: function not implemented"),t("，我们就要换成文件名带musl的，就像下面的")]),e("li",null,"alist-linux-amd64.tar.gz ===> alist-linux-musl-amd64.tar.gz"),e("li",null,"alist-linux-arm-X.tar.gz ===> alist-linux-musl-armX.tar.gz")],-1),Y=m(`<li><p>下载好后解压出来上传到服务器，或者直接上传到服务器再解压</p><ul><li><p>记得要使用cd命令到这个文件夹才可以的</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压下载的文件，得到可执行文件：</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> alist-xxxx.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>然后再进行授权 <code>chmod +x alist</code></p><ul><li>记得cd到文件夹</li></ul></li><li><p>然后使用命令启用就好</p></li><li><p>到这里就结束了已经可以使用了</p></li>`,4),E=e("p",null,"⚠️ 还是建议使用视频中的哪种办法，这种手动安装可以自己试试看就知道方便不方便了，适合自己魔改上传的程序",-1);function K(Q,Z){const r=n("BiliBili"),l=n("ExternalLinkIcon"),c=n("YouTube"),u=n("Tabs");return h(),p("div",null,[d(" 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 "),d(" more "),v,g,i(r,{bvid:"BV14s4y1h7yZ"}),e("div",x,[e("p",null,[e("a",f,[w,i(l)])])]),B,V,i(u,{id:"21",data:[{id:"哔哩哔哩"},{id:"YouTube"}],"tab-id":"video"},{title0:s(({value:o,isActive:a})=>[t("哔哩哔哩")]),title1:s(({value:o,isActive:a})=>[t("YouTube")]),tab0:s(({value:o,isActive:a})=>[i(r,{bvid:"BV1rF41197Qv"}),e("div",k,[e("p",null,[e("a",y,[N,i(l)])])])]),tab1:s(({value:o,isActive:a})=>[i(c,{id:"3Kb8Vr7uNws"}),e("div",A,[e("p",null,[e("a",L,[T,i(l)])])])]),_:1}),z,C,e("ol",null,[e("li",null,[e("p",null,[t("先下载适合自己的架构"),e("strong",null,[e("a",F,[t("https://github.com/alist-org/alist/releases/"),i(l)])])]),I]),Y]),E])}const q=_(b,[["render",K],["__file","12-install.html.vue"]]);export{q as default};
