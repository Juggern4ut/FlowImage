class Particle {
  private x: number;
  private y: number;
  private speed: number = 1;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getGridIndex(width: number): number {
    let cellsX = width / 5;
    return Math.round((this.y / 5) * cellsX + this.x / 5);
  }

  update(ctx: CanvasRenderingContext2D, lightnessArray: number[]) {
    this.speed = 3.5*lightnessArray[this.getGridIndex(200)];
    this.x += this.speed;    
    if (this.x > 200) this.x = 0;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(this.x, this.y, 5, 5);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(this.x - 5, this.y, 5, 5);
  }
}
