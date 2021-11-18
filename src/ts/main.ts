window.onload = (e: Event) => {
  const canvas = document.getElementById("image") as HTMLCanvasElement;
  const img = document.createElement("img") as HTMLImageElement;
  img.src = "./img/trunk.jpg";
  img.onload = () => {
    new FlowImage(canvas, img, 5, 5);
  };
};
