input = {
    KeyW: {
        pressed: false,
        timestamp: null,
        action: function () {
            let radians = Math.PI * (gamestate.rotation - 90) / 180;
            let speed = 1;
            let x = speed * Math.cos(radians);
            let y = speed * Math.sin(radians);
            gamestate.velocity.x += x;
            gamestate.velocity.y += y;
        }
    },
    KeyS: {
        pressed: false,
        timestamp: null,
        action: function () {
            let radians = Math.PI * (gamestate.rotation - 90) / 180;
            let speed = -1;
            let x = speed * Math.cos(radians);
            let y = speed * Math.sin(radians);
            gamestate.velocity.x += x;
            gamestate.velocity.y += y;
        }
    },
    KeyA: {
        pressed: false,
        timestamp: null,
        action: function () {
            gamestate.velocity.x -= 1;
        }
    },
    KeyD: {
        pressed: false,
        timestamp: null,
        action: function () {
            gamestate.velocity.x += 1;
        }
    },
    KeyQ: {
        pressed: false,
        timestamp: null,
        action: function () {
            gamestate.rotationalVelocity -= 1;
        }
    },
    KeyE: {
        pressed: false,
        timestamp: null,
        action: function () {
            gamestate.rotationalVelocity += 1;
        }
    }
}

function keydown(event) {
    if (gamestate.input[event.code]) {
        let key = gamestate.input[event.code];
        key.pressed = true;
        key.timestamp = event.timeStamp;
    }
}

function keyup(event) {
    if (gamestate.input[event.code]) {
        let key = gamestate.input[event.code];
        key.pressed = false;
        key.timestamp = event.timeStamp;
    }
}

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);d