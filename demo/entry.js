import { createApp } from "../vue3-pixijs/runtime-canvas"
import Ball from "./src/component/Ball";
import { getCanvasRootContainer } from "./src/Game";
// new Vue().mount('#app')
// 创建实例挂载到页面元素 createApp = new Vue()
createApp(Ball).mount(getCanvasRootContainer());