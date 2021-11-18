"use strict";
class FlowImage {
    constructor(canvas, image, particleSize, lightnessGridSize) {
        var _a;
        this.lightnessArray = [];
        this.particles = [];
        this.canvas = canvas;
        this.image = image;
        this.particleSize = particleSize;
        this.lightnessGridSize = lightnessGridSize;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.image.width;
        this.canvas.height = this.image.height;
        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.drawImage(this.image, 0, 0);
        this.fillLightnessArray();
        for (let i = 0; i < 200; i += 5) {
            for (let j = 0; j < 2; j++) {
                this.particles.push(new Particle(j * 100 * Math.random(), i));
            }
        }
        this.ctx.clearRect(0, 0, this.image.width, this.image.height);
        let ival = setInterval(() => {
            this.particles.forEach((p) => {
                p.update(this.ctx, this.lightnessArray);
            });
            //clearInterval(ival);
        }, 20);
    }
    /**
     * Get the brightness of
     */
    fillLightnessArray() {
        var _a;
        for (let y = 0; y < this.canvas.height; y += this.lightnessGridSize) {
            for (let x = 0; x < this.canvas.width; x += this.lightnessGridSize) {
                let data = (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.getImageData(x, y, this.lightnessGridSize, this.lightnessGridSize).data;
                this.lightnessArray.push(this.getAverage(data) / 255);
            }
        }
    }
    getAverage(arr) {
        let sum = arr.reduce((s, c) => s + c);
        return sum / arr.length;
    }
}
//# sourceMappingURL=FlowImage.js.map