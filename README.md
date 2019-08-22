# wx-trend

> 微信小程序原生项目

## 注意：
安装vant-weapp:
```
1. npm init
2. npm i vant-weapp -S --production
3. 打开微信开发者工具，点击 工具 -> 构建 npm，并勾选 使用 npm 模块 选项
4. 在index.json中配置使用的组件
{
  "usingComponents": {
    "van-button": "vant-weapp/button"
  }
}
5. 如果报错，重新启动微信开发者工具。
6. 在 wxml 中直接使用组件
<van-button type="primary">按钮</van-button>
```
## Build Setup


