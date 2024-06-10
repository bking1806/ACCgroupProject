const snacks = [
    'assets/bluesweet.png',
    'assets/orangesweet.png',
    'assets/greensweet.png',
    'assets/redsweet.png',
    'assets/donut.png',
    'assets/cake.png',
    'assets/cookie.png',
    'assets/milkshake.png',
    'assets/icecream.png',
    'assets/icecream2.png',
    'assets/marshmallow.png',
];

function createSnack() {
    const img = document.createElement('img');
    img.src = snacks[Math.floor(Math.random() * snacks.length)];
    img.className = 'snack';
    img.style.left = `${Math.random() * window.innerWidth}px`;
    img.style.top = `-${img.height}px`;

    const rotations = [0, 30, 330];
    const rotation = rotations[Math.floor(Math.random() * rotations.length)];
    img.style.transform = `rotate(${rotation}deg)`;

    document.body.appendChild(img);
    return img;
}

function animateSnack(snack) {
    const speed = Math.random() * 0.25 + 1;
    function fall() {
        const top = parseFloat(snack.style.top);
        if (top < window.innerHeight) {
            snack.style.top = `${top + speed}px`;
            requestAnimationFrame(fall);
        } else {
            snack.remove();
        }
    }
    fall();
}

function createRain() {
    const snack = createSnack();
    animateSnack(snack);
}

setInterval(createRain, 300);