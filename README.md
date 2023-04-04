# vue2-happyfri

- 目的，熟悉 vue2 vuex3 vue-router3 webpack eslint husky 使用

## 踩坑

- vue-loader vue2 需要用@15 的版本
- webpack-merge @5 的版本需要用{ merge }来接受值
- ## 低级错误：
  - es6 代码编写错误报错。误认为是 babel 的问题，花了几个小时才也没有发现，第二天早上一看代码就知道问题原因了。

## 项目运行（nodejs 6.0+）

```bash

# 进入文件夹
cd vue2-happyfri

# 安装依赖
npm install 或 yarn(推荐)

# 开启本地服务器localhost:8088
npm run dev

# 发布环境
npm run build

# 提交代码(不熟悉前缀)
npm run commit
```

# 参考文献

- [vue2-happyfri](https://github.com/bailicangdu/vue2-happyfri)
- [VUE2-HAPPYFRI 开源项目分析](https://www.freesion.com/article/5283951969/)
