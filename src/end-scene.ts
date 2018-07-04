import { ResetButton } from "./reset-button";
import { gameOptions } from "./util";
import { State } from "./interface";

export class EndScene {
    private resetBtn: ResetButton;
    private state: State;
    constructor(state: State) {
        this.state = state;
        // center start button in middle of screen
        this.resetBtn = new ResetButton(gameOptions.centerWidth - 100, gameOptions.centerHeight, this.onStartClick.bind(this));

    }

    onStartClick() {
        this.state.currentScene = "start";
        this.state.points = 0;
        console.log("restart game")
    }

    draw(app: PIXI.Application) {
        app.stage.addChild(this.resetBtn.getForStage())
    }
}