# 背景

::: tip 说明
背景样式
:::

## 背景颜色渐变

**从上到下渐变：**

```js
background: linear-gradient(to bottom, #FF0000, #FFF200);
```

**从左下到右上渐变：**

```js
background: linear-gradient(to right top, #FF0000, #FFF200);
```

**重复线性渐变：**

> 0px ~ 20px 为 `#ff0000`,20px ~ 40px 为 `#FFF200`,40px ~ 50px 为 `#000000`

```js
background: repeating-linear-gradient(to bottom, #FF0000 20px, #FFF200 40px, #000000 50px);
```

**中心向四周渐变：**

> 0px ~ 20px 为 `#ff0000`,20px ~ 40px 为 `#FFF200`,40px ~ 50px 为 `#000000`

```js
background: radial-gradient(#d63c21, #e0d865);
```
