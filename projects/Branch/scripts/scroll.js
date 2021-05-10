    let currentPixel = window.pageYOffset
    const main = document.querySelector('main');

    const looper = function () {
        const newPixel = window.pageYOffset;
        const diff = newPixel - currentPixel
        const maxSpeed = 7;
        const intensity = 2;
        // implementing the logistic equasion to control the skew min and max values
        const speed = maxSpeed * ((2 / (1 + Math.exp(-1 * intensity * diff))) - 1)
        main.style.transform = "skewY(" + speed + "deg)";
        currentPixel = newPixel;
        requestAnimationFrame(looper)
    }
    looper();