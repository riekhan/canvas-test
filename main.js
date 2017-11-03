function game() {
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    let ship = getShip();
    update()
    drawShape(ctx, ship, gamestate.origin, gamestate.rotation);
    requestAnimationFrame(game)
}