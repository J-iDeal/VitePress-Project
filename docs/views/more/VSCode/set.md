# 设置

::: tip 说明
VS Code ：宇宙级编辑器
:::

### **vscode 的分隔符**

```js
"editor.wordSeparators": "`~#!@$%^&\*()-=+[{]}\\|;:'\",<>/?."
```

### **鼠标控制文字大小 Ctrl + 鼠标滚轮**

```js
"editor.mouseWheelZoom": true,
```

### **Vue3 自动补全 .value 和缺失属性提醒**

```js
"vue.inlayHints.missingProps": true,
```

### **index 替换成 目录名**

```js
"workbench.editor.customLabels.patterns": {
"**/index.vue": "${dirname}.vue",
"**/index.js": "${dirname}.js",
"**/index.ts": "${dirname}.ts",
"**/index.jsx": "${dirname}.jsx",
"**/index.tsx": "${dirname}.tsx"
},
```

### **行内样式代码补全**

```js
"editor.quickSuggestions": {
"other": true,
"comments": true,
"strings": true,
},
```

### **导入文件时是否携带文件的拓展名**

```js
"path-autocomplete.extensionOnImport": true,
```

### **配置@的路径提示**

```js
"path-autocomplete.pathMappings": {
"@": "${folder}/src"
},
```

### **彩虹括号与作用域块线条提示**

```js
"editor.guides.bracketPairs": true,
```

### **光标、打字丝滑动画效果**

```js
"editor.smoothScrolling": true,
"editor.cursorBlinking": "expand",
"editor.cursorSmoothCaretAnimation": "on",
"workbench.list.smoothScrolling": true,
```

### **控制资源管理器是否应以紧凑形式呈现文件夹。在此形式中，单个子文件夹将被压缩在组合的树元素中。**

```js
"explorer.compactFolders": false,
```

### **控制在编辑器中是否允许通过拖放来移动选中内容。**

```js
"editor.dragAndDrop": true,
```

### **代码自动保存**

```js
"files.autoSave": "afterDelay",
```

### **控制是否在编辑器中预览建议结果**

```js
"editor.suggest.preview": true,
```

### **控制是否在编辑器中显示 CodeLens。**

```js
"editor.codeLens": false
```
