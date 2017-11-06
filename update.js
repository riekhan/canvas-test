function processInput(state, input) {
    for (let keycode in input) {
        let key = input[keycode]
        if (key.pressed) {
            key.action(state);
            key.pressed = false;
        }
    }
}

function processVelocity(state) {
    let v = state.velocity;
    let o = state.origin;
    o.x += v.x;
    o.y += v.y;
    state.rotation += state.rotationalVelocity;
}

export function update(state, input) {
    processInput(state, input)
    processVelocity(state)
}