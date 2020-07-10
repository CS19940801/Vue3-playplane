// template -> render
import { defineComponent, h ,ref} from "@vue/runtime-core";
import { getGame } from "../Game";
// defineComponent 定义组件
// h 虚拟dom
export default defineComponent({
    setup(){
        const limitRight = 750;
        const limitLeft = 0;
        const ballx = ref(200);
        const sign = "Vue3 NB"
        let direction = "r" // r ++ l --
        
        const speed = 5

        const ballroll = function(){
            switch (direction) {
                case "r":
                    ballx.value += speed
                    break;
                case "l":
                    ballx.value -= speed
                    break;            
                default:
                    break;
            }
            // ballx.value += speed
            if (ballx.value >= limitRight) {
                direction = "l" 
            }
            if (ballx.value <= limitLeft) {
                direction = "r"
            }
            console.log(ballx.value);
        }
        // setInterval(ballroll, 100); // 老方法
        
        // requestAnimationFrame 根据浏览器渲染 循环 效果>setInterval
        // PIXI循环 getGame().ticker.add()
        
        // getGame().ticker.add(ballroll)
        
        return {
            ballx,
            sign
        }
    },
    render(ctx){
        // 创建虚拟节点
        // 目标 <div x="20" y="20">KKB NB</div>
        console.log(`---vnode---`);
        console.log(`ballx:${ctx.ballx}`);
        let vnode = [
            h("circle", { x: ctx.ballx, y: 200 },[
                ctx.sign
            ]), 
            // h("circle", { x: 100, y: 100 }, [
            //     h("circle", { x: 400, y: 200 }),
            //     "Vue3 NB"
            // ])
        ]
        console.log(vnode);
        return vnode
    }
})