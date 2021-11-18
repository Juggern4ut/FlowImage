class FlowImage {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private image: HTMLImageElement;
  private lightnessArray: number[] = [];
  private particleSize: number;
  private lightnessGridSize: number;
  private particles: Particle[] = [];

  constructor(
    canvas: HTMLCanvasElement,
    image: HTMLImageElement,
    particleSize: number,
    lightnessGridSize: number
  ) {
    this.canvas = canvas;
    this.image = image;
    this.particleSize = particleSize;
    this.lightnessGridSize = lightnessGridSize;

    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvas.width = this.image.width;
    this.canvas.height = this.image.height;
    this.ctx?.drawImage(this.image, 0, 0);
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
  private fillLightnessArray(): void {
    for (let y = 0; y < this.canvas.height; y += this.lightnessGridSize) {
      for (let x = 0; x < this.canvas.width; x += this.lightnessGridSize) {
        let data = this.ctx?.getImageData(
          x,
          y,
          this.lightnessGridSize,
          this.lightnessGridSize
        ).data as Uint8ClampedArray;
        this.lightnessArray.push(this.getAverage(data) / 255);
      }
    }
  }

  private getAverage(arr: Uint8ClampedArray): number {
    let sum = arr.reduce((s, c) => s + c);
    return sum / arr.length;
  }
}
