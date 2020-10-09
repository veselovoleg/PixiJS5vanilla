let width, height, app;

document.addEventListener('DOMContentLoaded', () => {
    width = window.innerWidth
    height = window.innerHeight


    app = new PIXI.Application(
        {
            backgroundColor: 0x1099bb,
            width,
            height
        }
    );

    document.body.appendChild(app.view);
    
    // Listen for animate update
    app.ticker.add((delta) => update(farBackground, midBackground));
});

function update() {
    console.log('Update');
}


