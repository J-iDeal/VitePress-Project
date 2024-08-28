# Dialog 对话框

Dialog 的属性和配置

## 全局属性配置

- **点击遮罩层不关闭对话框**

```main.js
const app = createApp(App)
app.use(ElementPlus, {})
app._context.components.ElDialog['props'].closeOnClickModal.default = false
```

## More

查看Element-Plus框架 [官方文档](https://element-plus.org/zh-CN/component/dialog.html).
