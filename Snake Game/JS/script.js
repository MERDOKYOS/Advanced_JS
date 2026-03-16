const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake = [];

ctx.fillStyle="#fff";
ctx.strokeStyle = "pink";
ctx.fillRect(10,10,scale,scale);
ctx.strokeRect(10,10,scale,scale);