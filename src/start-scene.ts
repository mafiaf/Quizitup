import { StartButton } from "./start-button";
import { gameOptions } from "./util";
import { State } from "./interface";

export class StartScene {
    private startBtn: StartButton;
    private state: State;
    constructor(state: State) {
        this.state = state;
        // center start button in middle of screen
        this.startBtn = new StartButton(gameOptions.centerWidth - 100, gameOptions.centerHeight, this.onStartClick.bind(this));

    }

    onStartClick() {
        this.state.currentScene = "questions";
        console.log("start game")
    }

    draw(app: PIXI.Application) {
        app.stage.addChild(this.startBtn.getForStage())
    }
}