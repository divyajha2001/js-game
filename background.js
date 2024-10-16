class Background {
    constructor(game) {
        this.game = game;
        this.image = document.getElementById('background');
        this.image2 = document.getElementById('background2');
        this.width = 2400;
        this.height = this.game.baseHeight;
        this.scaleWidth;
        this.scaleHeight;
        this.x;
    }
    update() {
        this.x -= this.game.speed;
        if (this.x <= -this.scalewidth) this.x = 0;

    }
    draw() {
        this.game.ctx.drawImage(this.image, this.x, 0, this.scaleWidth, this.scaleHeight);
        this.game.ctx.drawImage(this.image, this.x + this.scaleWidth, 0, this.scaleWidth, this.scaleHeight);
    }
    resize() {
        this.scaleWidth = this.width * this.game.ratio;
        this.scaleHeight = this.height * this.game.ratio;
        this.x = 0;
    }
}