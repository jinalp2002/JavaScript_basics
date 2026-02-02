// const changecolor = ["orange", "green", "blue", "purple"];

// function changebgColor() {
//   const bg = document.getElementById("start");
  

//   //let intervalId = null; // to store interval

//   bg.addEventListener("click", () => {
//     // Prevent multiple intervals if button clicked again
//     //if (intervalId) return;

//     setInterval(() => {
//        if (index === changecolor.length) {
//     index = 0;
//   }
//     }, 1000);

//     // setInterval(() => {
//     //   let hex = "#";
//     //   for (let i = 0; i < 6; i++) {
//     //     //hex += changecolor[Math.floor(Math.random() * 16)];
//     //   }
//     //   document.body.style.backgroundColor = hex;
//     // }, 1000); // changes color every 1 second
//   });
// }

// changebgColor();




const changecolor = [
  "#C43216",
  "#C4A416",
  "#42C416",
  "#16C49B",
  "#1661C4",
  "#7616C4",
  "#C416AA",
  "#663535",
];

let index = 0;
let intervalId = null;

function changebgColor() {
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");

  start.addEventListener("click", () => {
    if (!intervalId) {
      intervalId = setInterval(() => {
        document.body.style.backgroundColor = changecolor[index];
        index++;

        if (index === changecolor.length) {
          index = 0;
        }
      }, 1000);
    }
  });

  stop.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
  });
}

changebgColor();
