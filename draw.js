function drawShape(ctx, ship, origin, rotation) {
    let points = ship.points;
    let center = ship.center;

    ctx.clearRect(0, 0, 1000, 1000);
    ctx.save();
    ctx.beginPath();
    ctx.translate(origin.x + center.x, origin.y + center.y);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.translate(-center.x, -center.y);
    let curPos = { x: 0, y: 0 };
    for (let p of points) {
        let nextPos = { x: curPos.x + p.x, y: curPos.y + p.y }
        ctx.lineTo(nextPos.x, nextPos.y);
        curPos = nextPos;
    }
    ctx.fillStyle = '#4D4E53';
    ctx.fill();
    ctx.restore();
}

function getShip() {
    return {
        center: { x: 0, y: 50 },
        points: [{ x: -30, y: 100 },
        { x: 27, y: 0 },
        { x: 0, y: -20 },
        { x: 6, y: 0 },
        { x: 0, y: 20 },
        { x: 27, y: 0 },
        { x: -30, y: -100 }],
    };
}