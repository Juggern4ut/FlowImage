"use strict";
window.onload = (e) => {
    const canvas = document.getElementById("image");
    const img = document.createElement("img");
    img.src = "./img/trunk.jpg";
    img.onload = () => {
        new FlowImage(canvas, img, 5, 5);
    };
};
//# sourceMappingURL=main.js.map