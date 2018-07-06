import { StartButton } from "../buttons/start-button";
import { gameOptions } from "../util";
import { State } from "../interface";

export class StartScene {
    private welcometext: PIXI.Text;
    private startBtn: StartButton;
    private state: State;
    constructor(state: State) {
        this.welcometext = new PIXI.Text("Quiz it up", {fontSize:40});
        this.welcometext.x = gameOptions.centerWidth - 100;
        this.welcometext.y = gameOptions.centerHeight - 150;
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
        app.stage.addChild(this.welcometext)
    }
}