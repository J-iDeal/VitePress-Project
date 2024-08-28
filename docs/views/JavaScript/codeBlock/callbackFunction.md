# 回调函数

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
