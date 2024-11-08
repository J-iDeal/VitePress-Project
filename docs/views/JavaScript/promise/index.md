# Promise

Promise 是一种异步编程解决方案。

它主要有以下几个特点和作用：

1.表示一个异步操作的最终结果：可以是成功的结果（通常用 resolve 来表示完成并传递成功值）或失败的结果（用 reject 来表示并传递错误信息）。

2.提供了一种更清晰、更结构化的方式来处理异步流程：让异步代码的编写和理解变得更有条理，避免了回调地狱等复杂情况。

3.可以进行链式调用：通过 then 方法可以依次对不同阶段（成功或失败）进行处理，并且后续的 Promise 可以基于前一个 Promise 的结果进行构建和操作。

4.有助于代码的组织和维护：使得异步逻辑更加清晰和可管理。
