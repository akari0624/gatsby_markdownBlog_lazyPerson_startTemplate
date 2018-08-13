# gatsby-blog-start-template
適合想用gatsby+markdown寫blog但是不想踩雷的人使用,
已經設定好各種markdown plugin,
2018/08/13  目前是使用gatsby 2.0.0-beta

## Install

git clone 整包下來到你的directory裡
```sh
git clone  $the_git_url_of_this_repo
```

第一層是gatsby-cli 必須先安裝，這樣好處是不用把gatsby-cli安裝到global
```sh
npm install
```

cd 到真正的部落格那一層
```sh
cd myblog
```

再安裝所有為這個blog-template設定好的 dependencies 
```sh
npm install
```

這樣都沒問題的話，就可以開始用了。

## how to write article
- 下面的指令中的`/`都是指`myblog/`

- markdown全部都寫在`/src/pages`底下
一層層的年月日的資料夾會變成網址，markdown檔名必須命名為`index.md`
`index.md`裡要顯示的圖片就把它跟`index.md`放在同一層，在markdown裡引用即可
```markdown
  ![](question_mark.jpg)
```

- 嵌入iframe也沒有問題，都包進來的plugin都已經設定好了
`見 /src/pages/2018/08/10/example_md2/index.md`

- code區塊會自動語法上色

- 開啟gatsby建立於webpack devServer上的dev server，以hot reload模式來寫blog
```sh
npm run develop
```

## deply
把部落格打包成靜態頁面於`/public`底下，就可以發布到想要放的地方
```sh
npm run build
```

## site meta data
`/conf/site_meta/index.js`裡已經有一些site meta data可以設定
  ```javaScript
  YOUR_BLOG_TITLE :'somebody\'s blog',  //部落格標題
  YOUR_ROOT_DOMAIN :'https://this_is_your_domain.io',  //domain
  YOUR_DISQUS_SHORTNAME : 'DISQUS_shortName_need_you_to_apply', //留言功能的Disqus shortname,要啟用的話要自己去Disqus申請
  WHEN_MAX_WIDTH_LESS_THAN_THIS_WIDTH_BECOME_ONE_ROW : '750px' // 設定多少寬度以下兩欄的排版會變一欄
```


## 如果你想自己加更多功能

- `gatsby-XXX.js`這幾個檔案有修改的話，要重下`npm run develop`，因為這幾個檔案只有在devServer init的時候被讀取一次而已

- `gatsby-config.js` 設定資料要經過哪些plugins做處理，和site meta data


- `gatsby-node.js`  gatsby在這個檔案裡提供兩個hook`onCreateNode`跟`createPages`，讓人可以加資料在每一頁之後可以在`props`裡取出來

- `gatsby-ssr.js`, `gatsby-browser.js` 目前沒用到。



