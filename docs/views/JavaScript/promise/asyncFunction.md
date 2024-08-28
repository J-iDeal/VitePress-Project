# Promise 控制异步事件执行顺序

当代码调用中有异步事件时

由于 setTimeout 是异步操作，所以`fun3()`会先执行完成

```js
const fun2 = () => {
  setTimeout(() => {
    // setTimeout模拟异步请求操作
    console.log(1);
  }, 10);
};

const fun3 = () => {
  console.log(2);
};

const fun1 = async () => {
  fun2();
  fun3();
};

fun1(); // 先打印2 再打印1
```

使用 Promise 控制执行顺序

```js
const fun2 = () => {
  // 定义一个Promise
  return new Promise((resolve) => {
    // setTimeout模拟异步请求操作
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 10);
  });
};

const fun3 = () => {
  console.log(2);
};

const fun1 = async () => {
  await fun2(); // 等待fun2执行完成（resolve执行）
  fun3();
};

fun1(); // 先打印1 再打印2
```
