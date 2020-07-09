import { createApp } from "../vue3-pixijs/runtime-canvas"
import Tem from "./src/Tem";
import { getCanvasRootContainer } from "./src/Game";

createApp(Tem).mount(getCanvasRootContainer);