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
Tick Marks

JavaScript creates 60 ticks around the watch face:

for (let i = 0; i < 60; i++) {
    const tick = document.createElement('div');
    tick.className = i % 5 === 0 ? 'tick' : 'tick small';
    tick.style.transform = `rotate(${i * 6}deg)`;
    container.appendChild(tick);
}
Clock Hands

The time is converted into rotation angles:

const sDeg = (s / 60) * 360;
const mDeg = ((m + s / 60) / 60) * 360;
const hDeg = ((h % 12 + m / 60) / 12) * 360;
Digital Clock

Shows the date, hour, minutes, and AM/PM.

Project Structure
project-folder/
└── index.html
└──style.css
└──script.js

All code (HTML, CSS, and JavaScript) is inside one file.

How to Use

Download or clone the project.

Open the file named index.html in any web browser.

The watch will start running automatically.

## Customization

You can change the following parts easily:

Colors and background

Animation speed

Hand sizes and shapes

Digital clock style

Watch size and layout

Preview
6
## License

This project uses the MIT License.
You may use it for personal or commercial purposes.
