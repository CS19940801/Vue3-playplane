import { createApp } from "../vue3-pixijs/runtime-canvas"
import Tem from "./src/Tem";
import { getCanvasRootCntainer } from "./src/Game";

createApp(Tem).mount(getCanvasRootCntainer);