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

        function ballroll(){
            let time = new Date().getTime()
            if (sessionStorage.getItem('time')){
                let oldtime = sessionStorage.getItem('time')
                console.warn(`渲染频率：${ time - oldtime}ms`)
            }
            sessionStorage.setItem("time",time)
            
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
        // setInterval By setTimout
        function Interval(fn,time){
            if ('function' != typeof fn) {
                console.warn(typeof fn,'fn must be function！！！！！');
                return false
            }
            function go(){
                fn()
                setTimeout(go, time)
            }
            // console.log(`Interval`, Interval);
            setTimeout(go,time)
        }
        // ticker.add By requestAnimationFrame
        function requestAnimationFrameInterval(fn){
            if ('function' != typeof fn) {
                console.warn(typeof fn,'fn must be function！！！！！');
                return false
            }
            function go(){
                fn()
                requestAnimationFrame(go)
            }
            requestAnimationFrame(go)
        }

        // setInterval(ballroll, 100); // 老方法
        // Interval(ballroll, 100); // setTimeout实现setInterval
        
        // requestAnimationFrame 根据浏览器渲染重绘时间（通常1000/60 一秒六十帧） 调用 效果 》 setTimout setInterval 
        // PIXI循环 getGame().ticker.add()
        // getGame().ticker.add(ballroll)
        // requestAnimationFrameInterval(ballroll) // requestAnimationFrame实现setInterval
   
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