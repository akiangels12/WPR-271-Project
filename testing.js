let keyframes = '@keyframes waveLight {\n';
for (let i = 0; i <= 300; i++) {
    let percentage = (i / 300) * 100;
    let position = (i / 300) * 100;
    keyframes += `    ${percentage.toFixed(2)}% { background: radial-gradient(circle at ${position.toFixed(2)}% ${50 + Math.sin((i / 300) * 2 * Math.PI) * 2.5}%, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)); }\n`;
}
keyframes += '}';

console.log(keyframes);