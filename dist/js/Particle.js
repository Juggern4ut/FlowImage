"use strict";
class Particle {
    constructor(x, y, size) {
        this.speed = 1;
        this.x = x;
        this.y = y;
        this.size = size;
    }
    getGridIndex(width) {
        let cellsX = width / this.size;
        return Math.round((this.y / this.size) * cellsX + this.x / this.size);
    }
    update(ctx, lightnessArray) {
        this.speed = 3.5 * lightnessArray[this.getGridIndex(200)];
        this.x += this.speed;
        if (this.x > 200)
            this.x = 0;
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
        ctx.fillRect(this.x - 5, this.y, this.size, this.size);
    }
}
//# sourceMappingURL=Particle.js.map