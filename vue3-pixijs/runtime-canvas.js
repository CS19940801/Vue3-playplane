import { createRenderer } from '@vue/runtime-core'
import { Graphics, Text } from 'pixi.js'
// 创建渲染器
// 实现渲染接口
const renderer = createRenderer({
    // 创建节点
    createElement(type) { 
        console.log(type);
        // 基于type去创建视图 自定义tag
        let el;
        if( type === "cirele") {
            // 圆形
            el = new Graphics()
            el.beginFill(0xff0000,1);
            el.drawCircle(0,0,100);
            el.endFill()
        }

        return el
    },
    // 获取节点属性 class width
    pathProp(el, key, preValue, nextValue){
      console.log(el, key, preValue, nextValue);
      el[key] = nextValue
    },
    // 设置innerHtml text
    setElmentText(node, text){
        console.log("----text----");
        console.log(node, text);
        const canvasText = new Text(text);
        node.addChild(canvasText)
    },
    // ??
    createText(text){
        return new Text(text)
    },
    // 插入节点
    insert(el, parent){
        console.log("---insert----");
        parent.addChild(el)
    }
})

export function createApp( rootComponent ) {
    return renderer.createApp(rootComponent)
}