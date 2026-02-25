function createTicks() {
    const container = document.getElementById('tickContainer');
    for (let i = 0; i < 60; i++) {
        const tick = document.createElement('div');
        tick.className = i % 5 === 0 ? 'tick' : 'tick small';
        tick.style.transform = `rotate(${i * 6}deg)`;
        container.appendChild(tick);
    }
}

function updateTime() {
    const now = new Date();

    const s = now.getSeconds();
    const m = now.getMinutes();
    const h = now.getHours();

    const sDeg = (s / 60) * 360;
    const mDeg = ((m + s / 60) / 60) * 360;
    const hDeg = ((h % 12 + m / 60) / 12) * 360;

    document.getElementById('secondHand').style.transform = `translateX(-50%) rotate(${sDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
    document.getElementById('hourHand').style.transform = `translateX(-50%) rotate(${hDeg}deg)`;

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const displayHours = h % 12 || 12;
    const mins = String(m).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';

    document.getElementById('digitalClock').textContent =
        `${month} ${day} ${String(displayHours).padStart(2, '0')}:${mins} ${ampm}`;
}

createTicks();
setInterval(updateTime, 1000);
updateTime();
