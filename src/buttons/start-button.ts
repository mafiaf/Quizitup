import { Button } from "./button";

export class StartButton extends Button {
    constructor(x: number, y: number, onClick: Function) {
        super("images/button-start.png", x, y, 150, 60, onClick);
    }
}