import { Button } from "./button";

export class ResetButton extends Button {
    constructor(x: number, y: number, onClick: Function) {
        super("images/button-reset.png", x, y, 150, 60, onClick);
    }
}