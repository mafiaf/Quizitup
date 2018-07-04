import { StartScene } from "./start-scene";
import { QuestionScene } from "./question-scene";
import { EndScene } from "./end-scene";
import { gameOptions } from "./util";
import { State } from "./interface";

export class Game {

  private app: PIXI.Application;

  private scenes: {};
  private score: PIXI.Text;

  private state: State = {
    currentScene: "start",
    points: 0,
  }

  constructor() {
    this.app = new PIXI.Application({
      width: gameOptions.width,
      height: gameOptions.height,
      backgroundColor: 0xcfd9df
    });

    this.scenes = {
      "start": new StartScene(this.state),
      "questions": new QuestionScene(this.state),
      "end": new EndScene(this.state)
    }

    this.score = new PIXI.Text("score: 0", { fontSize: 25})
    this.score.x = gameOptions.width - 200;
  }

  start() {
    document.body.appendChild(this.app.view);
    this.render();
  }

  render() {
    this.app.stage.removeChildren();
    let scene = this.scenes[this.state.currentScene];

    // only show score when game starts, not on start scene
    if (this.state.currentScene !== "start") {
      this.score.text = "score: " + this.state.points;
      this.app.stage.addChild(this.score);
    }

    scene.draw(this.app);
    requestAnimationFrame(this.render.bind(this))
  }
}

var game = new Game();
game.start();