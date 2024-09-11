function timeToWalk(steps, footprintInM, speedKmH) {
    let distance = steps * footprintInM;
    let speedMSec = speedKmH / 3.6;
    let time = distance / speedMSec;
    
    let restTime = Math.floor(distance / 500) * 60;
    time += restTime;

    let sec = Math.round(time % 60);
    let min = Math.floor(time / 60);
    let hour = Math.floor(time / 3600);

    let secToPrint = sec < 10 ? `0${sec}`:`${sec}`;
    let minToPrint = min < 10 ? `0${min}`:`${min}`;
    let hoursToPrint = hour < 10 ? `0${hour}`:`${hour}`;

    console.log(`${hoursToPrint}:${minToPrint}:${secToPrint}`);
}