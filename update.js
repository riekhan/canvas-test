function processInput() {
    for (keycode in gamestate.input) {
        let key = gamestate.input[keycode]
        if (key.pressed) {
            key.action();
            key.pressed = false;
        }
    }
}

function processVelocity() {
    v = gamestate.velocity;
    o = gamestate.origin;
    o.x += v.x;
    o.y += v.y;
    gamestate.rotation += gamestate.rotationalVelocity;
}

function update() {
    processInput()
    processVelocity()
}