module.exports = {
  // 继承其他规则
  // 是为了避免一点点写rules规则
  // rules中的规则会覆盖掉extends 中的规则
  /* 
      Eslint 官方的规则：eslint:recommended
      Vue Cli 官方的规则：plugin:vue/essential
      React Cli 官方的规则：react-app
      */
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parse: "@babel/eslint-parser",
  // 解析选项
  parserOptions: {
    // es 语法版本
    ecmaVersion: 6,
    // ES 模块化
    sourceType: "module"
    // ES 其他特性
    /*   ecamFeatures: {
              // 如果是React项目，就需要开启JSX语法
              jsx: true
          } */
  },
  // 具体检查规则
  /* 
          off 或0:关闭规则
          warn 或1：开启规则，使用警告级别的错误：warn（不会导致程序退出）
          error 或2：开启规则，使用错误级别的错误：error（当被触发的时候，程序会退出）
      */
  rules: {
    // 禁止使用分号
    // semi: 'error',
    // 禁止不必要的分号
    "no-extra-semi": "off",
    // 不能使用 var 定义变量
    "no-var": 2, //同理 'error'
    //强制使用单引号 single ，双引号 double
    quotes: ["error", "double"],
    //强制不使用分号结尾 nerver,使用双引号 always
    semi: ["error", "always"],
    // 强制数组方法回调函数中有return语句，否则警告
    "array-callback-return": "warn",
    "default-case": [
      // 要求 switch 语句中有 default 分支，否则警告
      "warn",
      {
        // 允许省略掉 default 分支，但是要写明注释以说明是故意为之，就不会有警告了
        // 代码中：// no default
        commentPattern: "^no default$"
      }
    ]
  },
  env: {
    // 启用node中全局变量
    node: true,
    // 启用浏览器中全局变量
    browser: true
  }
  // 其他规则详见：https://eslint.bootcss.com/docs/user-guide/configuring
};
