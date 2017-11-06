function translateShipToAbsolute(state, dir){
    let radians = Math.PI * (state.rotation - 90) / 180;
    let quarter = Math.PI * (90) / 180;
    let speed = 1;
    let x = dir.x * Math.cos(radians) + dir.y * Math.cos(radians + quarter);
    let y = dir.x * Math.sin(radians) + dir.y * Math.sin(radians + quarter);
    return {x,y};
}

export var input = {
    KeyW: {
        pressed: false,
        timestamp: null,
        action: function (state) {
            let {x,y} = translateShipToAbsolute(state, {x:1,y:0});
            state.velocity.x += x;
            state.velocity.y += y;
        }
    },
    KeyS: {
        pressed: false,
        timestamp: null,
        action: function (state) {
            let {x,y} = translateShipToAbsolute(state, {x:-1,y:0});
            state.velocity.x += x;
            state.velocity.y += y;
        }
    },
    KeyA: {
        pressed: false,
        timestamp: null,
        action: function (state) {
            let {x,y} = translateShipToAbsolute(state, {x:0,y:-1});
            state.velocity.x += x;
            state.velocity.y += y;
        }
    },
    KeyD: {
        pressed: false,
        timestamp: null,
        action: function (state) {
            let {x,y} = translateShipToAbsolute(state, {x:0,y:1});
            state.velocity.x += x;
            state.velocity.y += y;
        }
    },
    KeyQ: {
        pressed: false,
        timestamp: null,
        action: function (state) {
            state.rotationalVelocity -= 1;
        }
    },
    KeyE: {
        pressed: false,
        timestamp: null,
        action: function (state) {
            state.rotationalVelocity += 1;
        }
    },
    Space: {
        pressed: false,
        timestamp: null,
        action: function (state) {
            state.rotationalVelocity = state.rotationalVelocity < 0.2 ? 0 : state.rotationalVelocity * 0.8;
            state.velocity.x = state.velocity.x < 0.2 ? 0 : state.velocity.x * 0.8;
            state.velocity.y = state.velocity.y < 0.2 ? 0 : state.velocity.y * 0.8;
        }
    }
}
