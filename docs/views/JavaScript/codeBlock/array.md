# 数组 Array

**数组：** 一种将一组数据存储在单个变量名下的优雅方式。

## 查找指定元素

<br />

**返回元素在数组的指定位置**

> indexOf()
>
> indexOf() 方法可返回数组中某个指定的元素位置。开始位置的索引为 0。
>
> param：查找的元素
>
> 如果在数组中没找到指定元素则返回 -1。

```js
let arr = [1, 2, 5, 6, 3];
console.log(arr.indexOf(2)); // 1
```

**返回数组的最大值**

```js
let returnMax = () => {
  let arr = [10, 20, 345, 51, 68999, 10, 5];
  return Math.max(...arr); // 68999
};
```

**返回数组的最小值**

```js
let returnMin = () => {
  let arr = [10, 20, 345, 51, 68999, 10, 5];
  return Math.min(...arr); // 5
};
```

## 数组排序

<br />

**数组倒序**

> reverse()
>
> 返回倒序后的数组
>
> param：无
>
> 原数组改变

```js
var arr = ["q", "w", "e"];
console.log(arr.reverse()); // ['e', 'w', 'q']
```
