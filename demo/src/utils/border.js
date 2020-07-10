// 写碰撞
export function ballBorder(el, area) {
    return (
        objA.x + objA.width >= objB.x &&
        objB.x + objB.width >= objA.x &&
        objA.y + objA.height >= objB.y &&
        objB.y + objB.height >= objA.y
    );
}
