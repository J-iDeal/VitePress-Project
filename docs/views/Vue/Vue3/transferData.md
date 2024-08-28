# 组件通信

在 Vue 中，组件通信是指组件之间的数据交互，也就是把一个组件里面的数据传递到另一个组件，并能够让接收数据的组件根据这个数据更新界面。

![父子通信示意图](/public/images/vue/父子通信示意图.png)

## 父子组件通信

**父子组件通信：** 父组件通过属性绑定向子组件传递数据，子组件通过`props`接收父组件传递的数据，子组件通过`$emit`向父组件发送事件，父组件通过监听子组件发送的事件来更新数据。

**父组件：**

```vue
<script setup>
// 在父组件内注册子组件
import SonComponent from "./sonComponent.vue";
const data = ref({
  // 父组件内创建数据
  name: "父组件数据",
});
</script>
<template>
  <div class="app">
    <!-- 在子组件标签上使用属性绑定的方式绑定父组件数据 -->
    <SonComponent :data="data" />
  </div>
</template>
```

**子组件：**

```vue
<script setup>
// 子组件使用props接收父组件传递的数据
const props = defineProps({
  data: Object,
});
console.log("子组件输出父组件数据", props.data);
</script>
<template>
  <div class="app">{{ props.data.name }}</div>
</template>
```

<br />

## 子父组件通信

**子父组件通信：** 子组件通过`$emit`向父组件发送事件，父组件通过监听子组件发送的事件来更新数据。

**父组件：**

```vue
<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";
const messageFromChild = ref("");
const receiveMessageFromChild = (message) => {
  messageFromChild.value = message;
};
<template>
  <ChildComponent @message-to-parent="receiveMessageFromChild" />
</template>
</script>
```

**子组件：**

```vue
<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["message-to-parent"]);

const sendMessageToParent = () => {
  emit("message-to-parent", "Hello from Child!");
};
</script>
<template>
  <button @click="sendMessageToParent">Send Message to Parent</button>
</template>
```

<br />

## 爷孙组件通信

**爷孙组件通信：** 在顶层组件中使用`provide`函数来提供一个状态和一个方法，以便子孙组件能够访问和修改这个状态。在子组件中使用`inject`函数来注入在 App 组件中提供的状态和方法。
[使用 provide/inject 实现跨组件通信](https://juejin.cn/post/7341720847881748507)

**父组件：**

```vue
<script setup>
import { reactive, provide } from "vue";
import TaskList from "./components/TaskList.vue";
const appState = reactive({
  selectedTask: null,
});
const selectTask = (task) => {
  appState.selectedTask = task;
};
// 使用 provide 提供状态和方法
provide("appState", appState);
provide("selectTask", selectTask);
</script>
<template>
  <TaskList />
</template>
```

**子组件：**

```vue
<script setup>
import { inject } from "vue";
// 使用 inject 注入状态和方法
const appState = inject("appState");
const selectTask = inject("selectTask");
const handleSelect = () => {
  selectTask("当前任务");
};
</script>
<template>
  <div @click="handleSelect">选中任务：{{ appState.selectedTask }}</div>
</template>
```
