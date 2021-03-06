module.exports = {
  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    // extract: true,//打包时改成true   注销这一行，即可css修改热更新
    extract: process.env.NODE_ENV === "production" ?true:false,//打包时改成true   注销这一行，即可css修改热更新

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/global.scss";
                 @import "@/assets/styles/elementui-style.scss";
                 @import "@/assets/styles/media.scss";`
      }
    },

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  },
};