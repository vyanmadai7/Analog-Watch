## Analog Digital Watch UI

This project is a modern analog and digital watch built using only HTML, CSS, and JavaScript.<br>
It includes smooth animation, a moving sunray effect, and a clear date and time display.

## 6
## Features

Animated hour, minute, and second hands

Digital display showing month, day, time, and AM/PM

Rotating sunray effect on the dial

Sixty tick marks created automatically with JavaScript

Watch body includes bezel, crown, straps, and center pin

Works on any browser without any external library

Fully written in a single HTML file

## How It Works
Tick Marks<br>

JavaScript creates 60 ticks around the watch face:<br>

for (let i = 0; i < 60; i++) {<br>
    const tick = document.createElement('div');<br>
    tick.className = i % 5 === 0 ? 'tick' : 'tick small';<br>
    tick.style.transform = `rotate(${i * 6}deg)`;<br>
    container.appendChild(tick);<br>
}<br>

Clock Hands<br>

The time is converted into rotation angles:<br>

const sDeg = (s / 60) * 360;<br>
const mDeg = ((m + s / 60) / 60) * 360;<br>
const hDeg = ((h % 12 + m / 60) / 12) * 360;<br>
Digital Clock<br>

Shows the date, hour, minutes, and AM/PM.<br>

Project Structure<br>
project-folder/<br>
└──index.html<br>
└──style.css<br>
└──script.js<br>

All code (HTML, CSS, and JavaScript) is inside one file.<br>

## How to Use

Download or clone the project.<br>

Open the file named index.html in any web browser.<br>

The watch will start running automatically.<br>

## Customization

You can change the following parts easily:<br>

Colors and background<br>

Animation speed<br>

Hand sizes and shapes<br>

Digital clock style<br>

Watch size and layout<br>

Preview<br>
6<br>
## License

This project uses the MIT License.
You may use it for personal or commercial purposes.
