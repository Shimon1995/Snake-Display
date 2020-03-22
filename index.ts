import { Game } from "snake";
import { Display } from "./display";

const game = Game.new();
const canvas = document.getElementById("snake") as HTMLCanvasElement;
const score = document.getElementById("score");
const display = new Display(game, canvas, score);

display.start();