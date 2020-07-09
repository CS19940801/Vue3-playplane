// template -> render
import { defineComponent, h } from "@vue/runtime-core";
export default defineComponent({
  setup(){

  },
  render() {
    // 创建虚拟节点
    // <div x="20" y="20">开课吧nb</div>
    // const vnode = h("circle", { x: 200, y: 200 },"开课吧nb");
    const vnode = h("circle", { x: 200, y: 200 }, [
      h("circle", { x: 400, y: 200 }),
      "开课吧nb"
    ]);
    console.log(vnode);
    return vnode;
  },
});
