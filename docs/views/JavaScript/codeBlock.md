# JS 代码块

::: tip 说明
代码块-方便 copy 和在最短的时间内检索到期望的代码
:::

<br />

### **文本复制到剪贴板**

```js
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
copyToClipboard("Hello World");
```

### **回调函数**

```js
const fun2 = (callback) => {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 10);
};

const fun3 = () => {
  console.log(2);
};

const fun1 = () => {
  fun2(() => {
    fun3();
  });
};
fun1();
```

### 获取滚动条位置

```js
function getScrollPosition(el = window) {
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
  };
}
```

### 获取当前网页地址

```js
function currentURL() {
  return window.location.href;
}
```

### 获取网页 URL 参数

```js
function getURLParameters(url) {
  return url
    .match(/([^?=&]+)(=([^&]*))/g)
    .reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
      ),
      {}
    );
}
```

### 时间戳转时间

::: details 参数和返回值

> 参数：
>
> - timestamp（默认值 Date.parse(new Date())）：
>   - 可以传入 10 位（秒级）或 13 位（毫秒级）时间戳。
>   - 如果不传，默认使用当前时间的时间戳（Date.parse(new Date()) 返回毫秒级时间戳）。
>
> 返回值：
>
> - 返回一个格式化后的日期时间字符串，格式为：YYYY-MM-DD HH:mm:ss

:::

```js
function timestampToTime(timestamp = Date.now(), isMs = true) {
  const date = new Date(isMs ? timestamp : timestamp * 1000);
  const padZero = (num) => (num < 10 ? `0${num}` : num);
  return `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(
    date.getDate()
  )} ${padZero(date.getHours())}:${padZero(date.getMinutes())}:${padZero(
    date.getSeconds()
  )}`;
}
```

### 数字千分位

::: code-group

```js [正则写法]
const thousandsNum = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
```

```js [正则写法]
const thousandsNum = (number) => {
  let parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};
```

```js [简单写法]
// 强制保留3位小数
const thousandsNum = (number) => {
  return number.toLocaleString();
};
```

```js [简单写法]
// 强制保留3位小数
const thousandsNum = (number) => {
  let formatter = new Intl.NumberFormat("en-US");
  return formatter.format(number);
};
```

```js [手动实现]
const thousandsNum = (number) => {
  let parts = number.toString().split(".");
  let str = parts[0];
  let result = "";
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0 && str[i - 1] !== "-") {
      result = "," + result;
    }
  }
  let fractionalPart = parts.length > 1 ? parts[1] : "";
  return `${result}.${fractionalPart}`;
};
```

:::

### 生成随机数

::: code-group

```js [随机整数]
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

```js [随机整数]
function randomNum(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10);
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10);
    default:
      return 0;
  }
}
```

```js [随机浮点数]
function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}
```

```js [随机数]
function randomNum() {
  return Math.random();
}
```

:::

### 生成随机 HEX 颜色

```js
console.log(
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`
);
```

### 控制台打印对象，自动缩进

::: details 参数和返回值

> 参数：
>
> - `obj`：要序列化的 JavaScript 对象。
>
> - `null`（第二个参数）：替换函数（replacer），null 表示不对属性进行筛选或转换。
>
> - `2`（第三个参数）：缩进空格数，这里设置为 2 个空格，使 JSON 字符串格式化更清晰。
>   - 如果不传或 0 或 null：无缩进（单行输出）。
>   - 数字：指定缩进空格数（如 2 或 4）。
>   - 字符串：使用该字符串作为缩进（如 "\t" 用制表符缩进）。

:::

```js
const obj = { name: "Alice", age: 25, hobbies: ["coding", "reading"] };

const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString); // 自动缩进

const filteredJson = JSON.stringify(obj, ["name", "hobbies"], 2); // 只保留 name 和 hobbies
console.log(filteredJson); // 筛选属性
```

### 判断数字奇偶

::: code-group

```js [偶数]
const isEven = (num) => {
  return num % 2 === 0;
};
```

```js [奇数]
const isOdd = (num) => {
  return num % 2 === 1;
};
```

:::

### 将 RGB 转换为十六进制

```js
const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

console.log(rgbToHex(255, 255, 255)); // #ffffff
```

### 英文字母处理

**首字母转大写**

```js
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(capitalize("lorem ipsum dolor sit amet"));
```

**字母转大写**

```js
const capitalize = (str) => {
  return str.toUpperCase();
};
console.log(capitalize("follow  for more"));
```

**字母转小写**

```js
const lowercase = (str) => {
  return str.toLowerCase();
};
console.log(lowercase("FOLLOW  FOR MORE"));
```

### 计算两天之间相差的天数

```js
const dayDif = (date1, date2) => {
  return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
};
console.log(dayDif(new Date("2025-04-23"), new Date("2025-03-23"))); // 31
```

### 反转字符串

```js
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello world")); // Result: 'dlrow olleh'
```

### 类型判断

::: code-group

```js [对象判断]
const isObject = (variable) => {
  return variable === Object(variable);
};

console.log(isObject({ a: 1 })); // true
console.log(isObject([1, 2, 3])); // true
console.log(isObject("")); // false
console.log(isObject(1)); // false
console.log(isObject(null)); // false
console.log(isObject(undefined)); // false
console.log(isObject(true)); // false
console.log(isObject(false)); // false
console.log(isObject(NaN)); // false
```

```js [数组判断]
const isArray = (variable) => {
  return Array.isArray(variable);
};

console.log(isArray([1, 2, 3])); // true
console.log(isArray({ a: 1 })); // false
console.log(isArray("")); // false
console.log(isArray(1)); // false
console.log(isArray(null)); // false
console.log(isArray(undefined)); // false
console.log(isArray(true)); // false
console.log(isArray(false)); // false
console.log(isArray(NaN)); // false
```

```js [字符串判断]
const isString = (variable) => {
  return typeof variable === "string";
};

console.log(isString("")); // true
console.log(isString([1, 2, 3])); // false
console.log(isString({ a: 1 })); // false
console.log(isString(1)); // false
console.log(isString(null)); // false
console.log(isString(undefined)); // false
console.log(isString(true)); // false
console.log(isString(false)); // false
console.log(isString(NaN)); // false
```

```js [布尔值判断]
const isBoolean = (variable) => {
  return typeof variable === "boolean";
};

console.log(isBoolean(true)); // true
console.log(isBoolean(false)); // true
console.log(isBoolean("")); // false
console.log(isBoolean([1, 2, 3])); // false
console.log(isBoolean({ a: 1 })); // false
console.log(isBoolean(1)); // false
console.log(isBoolean(null)); // false
console.log(isBoolean(undefined)); // false
console.log(isBoolean(NaN)); // false
```

```js [数字判断]
const isNumber = (variable) => {
  return typeof variable === "number";
};

console.log(isNumber(1)); // true
console.log(isNumber(NaN)); // true
console.log(isNumber(1.5)); // true
console.log(isNumber(Infinity)); // true
console.log(isNumber(true)); // false
console.log(isNumber(false)); // false
console.log(isNumber("")); // false
console.log(isNumber([1, 2, 3])); // false
console.log(isNumber({ a: 1 })); // false
console.log(isNumber(null)); // false
console.log(isNumber(undefined)); // false
```

:::
