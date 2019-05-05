# gatsby-blog-start-template
適合想用gatsby+markdown寫blog但是不想踩`環境設定的各種雷`的人使用,
已經設定好各種markdown plugin,  
`2019/05/05`  目前是使用gatsby 2.4.2  
在[gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)之上修改而成  



## DEMO Site
- [on Github page of this repo](https://akari0624.github.io/gatsby_markdownBlog_lazyPerson_startTemplate/)

## Install

- 電腦裡要先有[node.JS和npm](https://nodejs.org/en/download/)

- git clone 整包下來到你的directory裡  
```sh
git clone  $the_git_url_of_this_repo
```

- cd 進 這個repo的資料夾裡  
```sh
cd gatsby_markdownBlog_lazyPerson_startTemplate
```

- 安裝所有為這個blog-template設定好的 dependencies  
```sh
npm install
```

- 這樣都沒問題的話，就可以開始用了。  
開啟gatsby建立於webpack devServer上的dev server，以hot reload模式來寫  
blog
```sh
npm run develop
```  

- 瀏覽器上去訪問`localhost:8000`就會看到初始頁面

## how to write article 

- markdown全部都寫在`src/pages`底下  
一層層的年月日的資料夾會變成網址，markdown檔名必須命名為`index.md`  
`index.md`裡要顯示的圖片就把它跟`index.md`放在同一層，在markdown裡引用即可  
```markdown
  ![](question_mark.jpg)
```

- 嵌入iframe也沒有問題，該包進來的plugin都已經設定好了  
`見 src/pages/2018/08/10/example_md2/index.md`  

- code區塊會自動語法上色  
  thanks to `gatsby-remark-prismjs`

- 在這個template裡，每個markdown上都必須要有一個YAML metadata block，一個`上下三中線`劃分出來的區塊  
目前`至少`必須打上這四個屬性:  

```markdown
---
title: "exampleMD1"
date: "2018-08-09"
id: "000001"
tags: ["LocalImage"]
---
```
metadata      | 用途   
--------------|:------------
title         | 文章標題 
date          | 文章日期  
id            | 文章序號，會被用來在`部落格首頁`排序   
tags          | 文章標籤，會出現在標籤側邊欄裡，必須用`[]`包起來，多個標籤的話:`["food","fun","panda"]`...

注意 `:` 後面需有空格，才開始接tag的value，不然轉譯markdown時會轉譯失敗。  
數字需用` "..." `包起來。  
YAML metadata block應該是 [pan doc 制定的規定](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block)  


## site meta data
`conf/site_meta/index.js`裡已經有一些site meta data可以設定  
  ```javaScript
  YOUR_BLOG_TITLE :'somebody\'s blog',  //部落格標題
  YOUR_ROOT_DOMAIN :'https://this_is_your_domain.io',  //domain
  YOUR_DISQUS_SHORTNAME : 'DISQUS_shortName_need_you_to_apply', //留言功能的Disqus shortname,要啟用的話要自己去Disqus申請
  WHEN_MAX_WIDTH_LESS_THAN_THIS_WIDTH_BECOME_ONE_ROW : '750px' // 設定多少寬度以下兩欄的排版會變一欄  
  PATH_PREFIX: '/gatsby_markdownBlog_lazyPerson_startTemplate', //當你的部署環境是有webapp name的時候在用的，demo網站是放在這個repo的github page上，所以目前是這個repo的名稱
```
PATH_PREFIX更詳細資訊 可參考 [gatsby官方文件](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)


## build
把部落格打包成靜態頁面於`public`底下，就可以發佈到想要放的地方  
```sh
npm run build
```

## build without sourceMap
[`sourceMap`](https://blog.teamtreehouse.com/introduction-source-maps)  
簡單來說`sourceMap`就是webpack在做打包時，讓我們就算js都已經是壓縮過的了，在打開瀏覽器的devTool的時候還是能夠看到未壓縮前的js code，這會在`public`資料夾底下針對一個js bundle file就產生出一個對應的 `somebundle.js.map`檔案，有點增加了部署時要傳輸的檔案量，還有既然JS都壓縮了就是不希望別人看到source。如果這是你希望的，那你在build的時候就應該使用這個指令。
```sh
npm run buildWithouSourceMap
```

## deploy
或是設定好`PATH_PREFIX`之後，如果有連結你自己的github repo的話  
執行  
```sh
npm run deploy_to_gh_page
```
就可以直接發佈到github page


## 如果你想自己加更多功能

- `gatsby-XXX.js`這幾個檔案有修改的話，要重下`npm run develop`，因為這幾個檔案只有在devServer init的時候被讀取一次而已

- `gatsby-config.js` 設定資料要經過哪些plugins做處理，和site meta data


- `gatsby-node.js`  gatsby在這個檔案裡提供兩個hook`onCreateNode`跟`createPages`，讓人可以加資料，之後在每一頁的`props`裡取出來

- `gatsby-ssr.js`, `gatsby-browser.js` 目前沒用到。

## More reference
- 也可參考[Gatsby官網上更多的starter](https://next.gatsbyjs.org/docs/gatsby-starters/)

