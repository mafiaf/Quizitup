import { State } from "./interface";

export class QuestionScene {
    private question: PIXI.Text;
    private state: State;
    constructor(state: State) {
        this.state = state;
        // center start button in middle of screen
        this.question = new PIXI.Text("What movie has the quote 'this is sparta'", {
            align: "center"
        });
    }
    
    draw(app: PIXI.Application) {
        app.stage.addChild(this.question)
    }
}