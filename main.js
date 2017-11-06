import {state} from "./gamestate";
import {update} from './update'
import {input} from "./input";
import {getShip, drawShape} from "./draw";

function keydown(event) {
    console.log(event.code);
    if (input[event.code]) {
        let key = input[event.code];
        key.pressed = true;
        key.timestamp = event.timeStamp;
    }
}

function keyup(event) {
    if (input[event.code]) {
        let key = input[event.code];
        key.pressed = false;
        key.timestamp = event.timeStamp;
    }
}

var foo = {};

function game(){
    window.addEventListener('keydown', keydown);
    window.addEventListener('keyup', keyup);

    foo.canvas = document.getElementById('game');
    foo.ctx = foo.canvas.getContext('2d');
    foo.ship = getShip();

    animate();
}

function animate() {
    update(state,input)
    drawShape(foo.ctx, foo.ship, state.origin, state.rotation);
    requestAnimationFrame(animate)
}

window.game = game;