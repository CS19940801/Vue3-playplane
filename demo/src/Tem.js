// template -> render
import { defineComponent, h } from "@vue/runtime-core";
export default defineComponent({
    setup(){

    },
    render(){
        // 创建虚拟节点
        // 目标 <div x="20" y="20">KKB NB</div>
        const vnode = h("circle", { x: 200, y: 200},[
            h("circle", { x: 400, y: 200}),
            "KKB NB"
        ])
        console.log(vnode);
        
        return vnode;
    }
})