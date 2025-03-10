import { createRouter, createWebHistory } from "vue-router";
import StartScreen from "../views/StartScreen.vue";
import WarningScreen from "../views/WarningScreen.vue"; // 追加
import GameScreen from "../views/GameScreen.vue";
import GameOverScreen from "../views/GameOverScreen.vue";
import ClearScreen from "../views/ClearScreen.vue";
import FinalStageScreen from "../views/FinalStageScreen.vue";

const routes = [
  { path: "/", component: StartScreen },
  { path: "/warning", component: WarningScreen }, // 警告画面
  { path: "/game", component: GameScreen },
  { path: "/gameover", component: GameOverScreen },
  { path: "/clear", component: ClearScreen },
  { path: "/final", component: FinalStageScreen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;