# 数组 Array

::: tip 数组：
一种将一组数据存储在单个变量名下的优雅方式。
:::

## 获取指定元素

### 获取指定元素在数组中第一次出现的索引位置

::: details 参数和返回值

> 参数：
>
> - arr：必选，要查找的数组。
> - target：必选，要查找的元素。
> - fromIndex（可选）：可选，开始查找的索引位置，默认为 0。
>
> 返回值：
>
> - 如果找到了 target，返回 target 在数组中的索引位置，否则返回 -1。

:::

```js
function findFirstIndex(arr, target, fromIndex = 0) {
  return arr.indexOf(target);
}
```

### 获取指定元素在数组中最后一次出现的索引位置

::: details 参数和返回值

> 参数：
>
> - arr：必选，要查找的数组。
> - target：必选，要查找的元素。
> - fromIndex（可选）：可选，开始查找的索引位置，默认为 0。
>
> 返回值：
>
> - 如果找到了 target，返回 target 在数组中的索引位置，否则返回 -1。

:::

```js
function findLastIndex(arr, target, fromIndex = 0) {
  return arr.lastIndexOf(target);
}
```

### 判断数组是否包含某个元素

::: details 参数和返回值

> 参数：
>
> - arr：要找的数组。
> - value：要找的元素。
>
> 返回值：
>
> - value 在不在 arr 中。

:::

```js
function contains(arr, value) {
  return arr.includes(value);
}
```

### 判断数组是否包含某个对象

::: details 参数和返回值

> 参数：
>
> - array：要找的数组。
> - row：要找的元素。根据 ID 查找
>
> 返回值：
>
> - value 在不在 arr 中。

:::

```js
function containsObjectById(array, row) {
  return array.some((obj) => obj.id === row.id);
}
```

### 获取数组中指定元素出现的次数

::: details 参数和返回值

> 参数：
>
> - arr：要统计的数组。
> - value：要计算出现次数的目标值。
>
> 返回值：
>
> - value 在 arr 中出现的总次数（数字）。

:::

```js
function countOccurrences(arr, value) {
  return arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
}
```

### 获取数组的最大值

::: code-group

```js [简单写法]
/**
 * @param {number[]} arr - 要查找的数组
 * @returns {number} 数组中的最大值，如果数组为空则返回 undefined
 */

function getArrayMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return Math.max(...arr);
}
```

```js [循环遍历]
/**
 * @param {number[]} arr - 要查找的数组
 * @returns {number|undefined} 数组中的最大值
 */

function getArrayMaxLarge(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

:::

### 获取数组的最小值

::: code-group

```js [简单写法]
/**
 * 获取数组中的最小值
 * @param {number[]} arr - 要查找的数组
 * @returns {number|undefined} 数组中的最小值，如果数组为空则返回 undefined
 */

function getArrayMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return Math.min(...arr);
}
```

```js [循环遍历]
/**
 * @param {number[]} arr - 要查找的数组
 * @returns {number|undefined} 数组中的最小值
 */
function getArrayMinLarge(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
```

:::

## 数组排序

### 数组倒序

::: code-group

```js [简单写法]
function reverseArray(arr) {
  return arr.reverse();
}
```

```js [进阶写法]
function reverseArray(arr) {
  return [...arr].reverse();
}
```

```js [循环遍历]
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
```

:::

### 数组乱排

```js
function shuffle(arr) {
  let array = arr;
  let index = array.length;

  while (index) {
    index -= 1;
    let randomInedx = Math.floor(Math.random() * index);
    let middleware = array[index];
    array[index] = array[randomInedx];
    array[randomInedx] = middleware;
  }

  return array;
}
```

## 数组操作

### 数组新增

::: details 解释

> - 末尾新增
>
>   - arr：原数组
>   - value：新增元素 支持多个值
>
> - 头部新增
>
>   - arr：原数组
>   - value：新增元素 支持多个值
>
> - 中间新增
>
>   - arr：原数组
>   - value：新增元素 支持多个值
>   - index：新增元素的索引位置
>
> - 扩展运算符头部新增
>
>   - arr：原数组
>   - value：新增元素 支持多个值
>
> - 合并方法末尾新增
>
>   - arr：原数组
>   - value：新增元素 数组类型可以合并多个元素

:::

::: code-group

```js [末尾新增]
function addToArray(arr, value) {
  return arr.push(value);
}
```

```js [头部新增]
function addToArray(arr, value) {
  arr.unshift(value);
}
```

```js [中间新增]
function addToArray(arr, value, index) {
  arr.splice(index, 0, value);
}
```

```js [扩展运算符头部新增]
function addToArray(arr, value) {
  return [value, ...arr];
}
```

```js [合并方法末尾新增]
function removeFromEnd(arr, value) {
  return arr.concat(value);
}
```

:::

### 数组删除

::: details 解释

> - 末尾删除
>
>   - arr：原数组
>   - n：要删除的元素数量，默认为 1。
>
> - 头部删除
>
>   - arr：原数组
>   - n：要删除的元素数量，默认为 1。
>
> - 中间删除
>
>   - arr：原数组
>   - index：要删除的元素索引。
>
> - 根据索引删除
>
>   - arr：原数组
>   - index：要删除的元素索引。
>
> - 删除索引为 0 的元素
>
>   - arr：原数组

:::

::: code-group

```js [末尾删除]
function removeFromEnd(arr, n = 1) {
  return arr.slice(0, -n);
}
```

```js [头部删除]
function removeFromEnd(arr, n = 1) {
  return arr.slice(n);
}
```

```js [根据索引删除]
function removeFromEnd(arr, index = 0) {
  return arr.filter((_, i) => i !== index);
}
```

```js [删除索引为0的元素]
function removeFromEnd(arr) {
  arr.shift();
  return arr;
}
```

```js [扩展运算符删除头部]
function removeFromEnd(arr) {
  let [one, two, ...rest] = arr;
  return rest;
}
```

:::

### 从数组的末尾移除 n 个元素，返回剩余的部分

::: details 参数和返回值

> 参数：
>
> - arr：要操作的数组。
> - n：要移除的元素数量 默认为 0。
>
> 返回值：
>
> - 处理后的数组

:::

::: code-group

```js [简单写法]
function removeFromEnd(arr, n) {
  return arr.slice(0, -n);
}
```

```js [进阶写法]
function removeFromEnd(arr, n) {
  const newArr = [...arr]; // 创建副本以避免修改原数组
  newArr.splice(-n, n);
  return newArr;
}
```

```js [高级写法]
function removeFromEnd(arr, n = 0) {
  return n < arr.length ? arr.slice(0, arr.length - n) : [];
}
```

```js [计算长度]
function removeFromEnd(arr, n) {
  const newArr = [...arr]; // 创建副本以避免修改原数组
  newArr.length = Math.max(newArr.length - n, 0);
  return newArr;
}
```

:::

### 数组去重

::: code-group

```js [简单写法]
// 无法处理对象引用去重（如 [ {a:1}, {a:1} ]）
function removeRepeat(arr) {
  return [...new Set(arr)];
}
```

```js [简单写法2]
function removeRepeat(arr) {
  return Array.from(new Set(arr));
}
```

```js [兼容ES5]
function removeRepeat(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
```

```js [高级写法]
function removeRepeat(arr) {
  return arr.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
    []
  );
}
```

```js [根据特定属性去重]
/**
 * @param {object[]} arr - 要去重的数组
 * @param {string} key - 要去重的属性
 * @returns {object[]} 去重后的数组
 */
function removeRepeat(arr, key) {
  if (key) {
    return Array.from(new Map(arr.map((item) => [item[key], item])).values());
  }
  return [...new Set(arr)];
}
```

:::

### 遍历方法

::: details 解释

- forEach(callback)
  - 遍历数组，对每个元素执行一次回调函数。
- map(callback)
  - 遍历数组，对每个元素执行一次回调函数，返回一个新的数组。
- filter(callback)
  - 遍历数组，对每个元素执行一次回调函数，返回一个包含所有符合条件的元素的新数组。
- reduce(callback, initialValue)
  - 遍历数组，对每个元素执行一次回调函数，将其结果汇总为单个值。
- reduceRight(callback, initialValue)
  - 与 reduce() 类似，但从右到左遍历数组。
- some(callback)
  - 遍历数组，对每个元素执行一次回调函数，直到找到一个符合条件的元素。
- every(callback)
  - 遍历数组，对每个元素执行一次回调函数，直到所有元素都符合条件。
- find(callback)
  - 遍历数组，对每个元素执行一次回调函数，返回第一个符合条件的元素。
- findIndex(callback)
  - 遍历数组，对每个元素执行一次回调函数，返回第一个符合条件的元素的索引。
- findLast(callback)
  - 与 find() 类似，但从右到左遍历数组。
- findLastIndex(callback)
  - 与 findIndex() 类似，但从右到左遍历数组。

:::

::: code-group

```js [forEach()]
[1, 2, 3].forEach((x) => console.log(x));
```

```js [map()]
[1, 2, 3].map((x) => x * 2); // [2, 4, 6]
```

```js [filter()]
[1, 2, 3].filter((x) => x > 1); // [2, 3]
```

```js [reduce()]
[1, 2, 3].reduce((sum, x) => sum + x, 0); // 6
```

```js [reduceRight()]
[1, 2, 3].reduceRight((sum, x) => sum + x, 0); // 6
```

```js [some()]
[1, 2, 3].some((x) => x > 2); // true
```

```js [every()]
[1, 2, 3].every((x) => x > 0); // true
```

```js [find()]
[1, 2, 3].find((x) => x > 1); // 2
```

```js [findIndex()]
[1, 2, 3].findIndex((x) => x > 1); // 1
```

```js [findLast()]
[1, 2, 3].findLast((x) => x > 1); // 3
```

```js [findLastIndex()]
[1, 2, 3].findLastIndex((x) => x > 1); // 2
```

:::

## 迭代器方法

::: details 解释

- keys()
  - 返回一个新的迭代器对象，该对象包含数组中每个索引的键。
- values()
  - 返回一个新的迭代器对象，该对象包含数组中每个元素的值。
- entries()
  - 返回一个新的迭代器对象，该对象包含数组中每个索引的键值对。

:::

::: code-group

```js [keys()]
let arr = ["a", "b", "c"];
let iterator = arr.keys(); // [0, 1, 2]
```

```js [values()]
let arr = ["a", "b", "c"];
let iterator = arr.values(); // ['a', 'b', 'c']
```

```js [entries()]
let arr = ["a", "b", "c"];
let iterator = arr.entries();
console.log(iterator); // [[0, 'a'], [1, 'b'], [2, 'c']]
```

:::

## 其他方法

### 判断对象是否为数组

```js
Array.isArray([1, 2]); // true
Array.isArray("123"); // false
```

### 将类似数组的对象转换为数组

```js
Array.from("123", (x) => parseInt(x)); // [1, 2, 3]
```

### 类似数组的 splice() 方法，返回一个新数组

```js
let arr = [1, 2, 3];
arr.toSpliced(1, 1, "a"); // [1, 'a', 3]
```
