const e=JSON.parse('{"key":"v-31dc96d0","path":"/index/03-code.html","title":"AList魔改示例教程","lang":"zh-CN","frontmatter":{"title":"AList魔改示例教程","icon":"fa-solid fa-rocket-launch","order":3,"author":"安稳","date":"2023-01-01T00:00:00.000Z","category":["使用指南"],"tag":["页面配置","使用指南"],"sticky":true,"star":true,"footer":"这是测试显示的页脚","copyright":"无版权","description":"前言 虽然默认的也挺好的，但是吧就是想折腾折腾，就魔改了一下前端嘿嘿 以下代码是我自己魔改了前端的一些地方，虽然可能位置和行数不太对，大概浮动的地方不会差很大的. 如果需要修改的话自己clone前端代码哦，可以在线调试，具体怎么调试也很简单 下面我们先随便修改个加载缓冲试试水呗~ 1. 先修改 Loading 试试水 文件位置：alist-web\\\\sr...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/index/03-code.html"}],["meta",{"property":"og:site_name","content":"安安稳稳"}],["meta",{"property":"og:title","content":"AList魔改示例教程"}],["meta",{"property":"og:description","content":"前言 虽然默认的也挺好的，但是吧就是想折腾折腾，就魔改了一下前端嘿嘿 以下代码是我自己魔改了前端的一些地方，虽然可能位置和行数不太对，大概浮动的地方不会差很大的. 如果需要修改的话自己clone前端代码哦，可以在线调试，具体怎么调试也很简单 下面我们先随便修改个加载缓冲试试水呗~ 1. 先修改 Loading 试试水 文件位置：alist-web\\\\sr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-06T08:50:31.000Z"}],["meta",{"property":"article:author","content":"安稳"}],["meta",{"property":"article:tag","content":"页面配置"}],["meta",{"property":"article:tag","content":"使用指南"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-06T08:50:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AList魔改示例教程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-06T08:50:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"安稳\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"1. 先修改 Loading 试试水","slug":"_1-先修改-loading-试试水","link":"#_1-先修改-loading-试试水","children":[]},{"level":2,"title":"2. 修改并且取消在加密码情况下的出现的登录按钮","slug":"_2-修改并且取消在加密码情况下的出现的登录按钮","link":"#_2-修改并且取消在加密码情况下的出现的登录按钮","children":[]},{"level":2,"title":"3.修改了不登录的后台显示","slug":"_3-修改了不登录的后台显示","link":"#_3-修改了不登录的后台显示","children":[]},{"level":2,"title":"4. 取消游客访问和语言选择的按钮默认为简体中文","slug":"_4-取消游客访问和语言选择的按钮默认为简体中文","link":"#_4-取消游客访问和语言选择的按钮默认为简体中文","children":[]},{"level":2,"title":"5.删除\\"本地设置\\"里面的语言切换按钮，已经默认为中文","slug":"_5-删除-本地设置-里面的语言切换按钮-已经默认为中文","link":"#_5-删除-本地设置-里面的语言切换按钮-已经默认为中文","children":[]},{"level":2,"title":"6. 将本地设置里面的夜间/白天 切换模式和刷新按钮(刷新需要登录)移动到主页","slug":"_6-将本地设置里面的夜间-白天-切换模式和刷新按钮-刷新需要登录-移动到主页","link":"#_6-将本地设置里面的夜间-白天-切换模式和刷新按钮-刷新需要登录-移动到主页","children":[{"level":3,"title":"不会加,可以参考这里的完整代码","slug":"不会加-可以参考这里的完整代码","link":"#不会加-可以参考这里的完整代码","children":[]}]},{"level":2,"title":"7.将登录页面的 \\"登录到\\" 隐藏，后期适配自己的使用","slug":"_7-将登录页面的-登录到-隐藏-后期适配自己的使用","link":"#_7-将登录页面的-登录到-隐藏-后期适配自己的使用","children":[]},{"level":2,"title":"8.ipa界面添加下载和复制链接按钮,同时添加巨魔安装按钮","slug":"_8-ipa界面添加下载和复制链接按钮-同时添加巨魔安装按钮","link":"#_8-ipa界面添加下载和复制链接按钮-同时添加巨魔安装按钮","children":[]},{"level":2,"title":"9. 去掉底部内容（有原因的）","slug":"_9-去掉底部内容-有原因的","link":"#_9-去掉底部内容-有原因的","children":[]},{"level":2,"title":"10. 添加一个infuse播放器(3.9.2版本移植到官方内了)","slug":"_10-添加一个infuse播放器-3-9-2版本移植到官方内了","link":"#_10-添加一个infuse播放器-3-9-2版本移植到官方内了","children":[]},{"level":2,"title":"11. 修改一下搜索，变的更加匹配 ✅","slug":"_11-修改一下搜索-变的更加匹配-✅","link":"#_11-修改一下搜索-变的更加匹配-✅","children":[]},{"level":2,"title":"12.修改文件图标","slug":"_12-修改文件图标","link":"#_12-修改文件图标","children":[]},{"level":2,"title":"13.修改默认为某\\"视图\\"方式","slug":"_13-修改默认为某-视图-方式","link":"#_13-修改默认为某-视图-方式","children":[]},{"level":2,"title":"$ 修改后台地址和登录地址","slug":"修改后台地址和登录地址","link":"#修改后台地址和登录地址","children":[]}],"git":{"createdTime":1680678324000,"updatedTime":1680771031000,"contributors":[{"name":"AnWen-anyi","email":"anwen_anyi@foxmail.com","commits":2}]},"readingTime":{"minutes":13.99,"words":4196},"filePathRelative":"index/03-code.md","localizedDate":"2023年1月1日","autoDesc":true}');export{e as data};
