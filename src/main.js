// import messageLog from './utils/messageLog';

const main = () => {
    const canvas = document.getElementById('canvas');

    if (!canvas.getContext) return console.error(messageLog.error);

    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

    console.log(ctx);
};

main();
