/**
 * 博客参考 https://www.yuque.com/cuggz/feplus/bkdb91
 * config-conventional规则如下
 * git commit -m <type>[optional scope]: <description>
 *  这里面有三个参数：
 *   type ：必须，表示提交的改动类型；
 *  optional scope ：可选，表示提交的修改范围，需要使用括号包裹；
 *  description ：必须，表示提交的内容描述。
 *  常见的 type 类型如下：
 *  build: 影响构建组件的更改，如构建工具、依赖项、项目版本等；
 *   chore: 比如构建流程、辅助工具等的更改。
 *   ci: 持续集成的更改；
 *   docs: 影响文档的更改。
 *  feat: 引入新功能的更改。
 *   fix: 修补错误的更改。
 *  perf: 优化相关，比如提升性能、体验。
 *  refactor: 代码重构的更改。
 *  revert: 还原先前提交的更改。
 *  style: 代码格式的更改空格、格式、缺少分号
 */

module.exports = {
  extends: ["@commitlint/config-conventional"],
  // 校验规则
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore", "revert", "build"]],
    "type-case": [0],
    "type-empty": [0],
    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
    "header-max-length": [0, "always", 72],
  },
};
