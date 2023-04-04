/* 
babel 在转译的过程中，对 syntax(语法) 的处理可能会使用到 helper 函数，对 api 的处理会引入 polyfill。
默认情况下，babel 在每个需要使用 helper 的地方都会定义一个 helper，导致最终的产物里有大量重复的 helper；引入 polyfill 时会直接修改全局变量及其原型，造成原型污染。
@babel/plugin-transform-runtime 的作用是将 helper 和 polyfill 都改为从一个统一的地方引入，并且引入的对象和全局变量是完全隔离的，这样解决了上面的两个问题。
*/
/* 
是的，其实这是两种解决方案：
方案一：preset-env + polyfill，在 usebuildins 设置
方案二：preset-env + transform-runtime + runtime + runtime-corejs3
仅供参考

*/
module.exports = {
  // 智能预设：能够编译ES6语法
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions", "ie >= 9"]
        },
        /*
          主要用于指定babel如何从core-js中提取合适的ES6新特性的实现，有两种模式：
          usage：我们不需要在入口处导入core-js，babel会根据代码中使用的ES6 API来决定提取哪些。
          entry：我们通过import在入口引入core-js，babel会根据引入的core-js模块来识别和拆分更细的导入，
        */
        // 按需加载 此选项配置如何@babel/preset-env处理 polyfill。
        // https://babel.docschina.org/docs/en/babel-preset-env/
        useBuiltIns: "usage",
        // 指定corejs版本 按需加载
        corejs: { version: "3", proposals: true }
      }
    ]
  ],
  plugins: ["@babel/plugin-transform-runtime"] // 减少代码体积
};
