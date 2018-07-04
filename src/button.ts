export class Button {
    private button: PIXI.Sprite;
    constructor(path: string, 
        x: number, 
        y: number, 
        w: number, 
        h: number,
        onClick: Function) {
        var texture = PIXI.Texture.fromImage(path);
        this.button = new PIXI.Sprite(texture);

        this.button.buttonMode = true;
        this.button.x = x;
        this.button.y = y;
        this.button.width = w;
        this.button.height = h;
        this.button.interactive = true;

        this.button.on("pointerdown", () => {
            onClick();
        })
    }

    getForStage() {
        return this.button;
    }
}