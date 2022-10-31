const stopButton = document.getElementById("stop-button");
const restartButton = document.getElementById("restart-button");
const totalEl = document.querySelector(".total");
const stepEl = document.querySelector(".step");
const deceEl = document.querySelector("main h1");
const startBtn = document.querySelector(".start-btn");
const canvas = document.getElementById("canvas");
const win = document.getElementById("win");
const tas = document.querySelector(".tas");
const tasValue = document.querySelector(".tas-value");

// const ctx = canvas.getContext("2d");
// canvas.width = 500;
// canvas.height = 500;
// var tasValues = [1, 2, 3, 4, 5, 6];
// let total = 0;
// let diceSides = 6;
// let myNumber = Math.floor(Math.random() * diceSides + 1);
// var anim;

// function main() {
//   anim = requestAnimationFrame(main);
// }
// // main();
// var values = {
//   x: 10,
//   y: 50,
//   ctxWidth: 500,
//   ctxHeight: 500,
//   width: 200,
//   height: 200,
// };
// // canvas.width = values.ctxHeight;
// // canvas.height = values.ctxHeight;

// // canvas.innerText = 22;

// startBtn.addEventListener("click", async (e) => {
//   win.innerHTML = null;
//   let isWon = false;

//   const tasVal = Math.ceil(Math.random() * diceSides);
//   stepEl.textContent = tasVal;
//   tas.innerHTML = "";
//   tasValue.textContent = myNumber;
//   if (total < 6) {
//     total++;

//     var myArr = new Array(tasVal).fill(2);
//     myArr.map((res) => {
//       const ee = document.createElement("div");
//       ee.className = "tas-item";
//       tas.insertAdjacentElement("afterbegin", ee);
//     });
//   } else {
//     // tas.removeChild();
//     myNumber = Math.floor(Math.random() * diceSides + 1);
//     startBtn.textContent = "tas";
//     total = 0;
//     tasValue.textContent = myNumber;
//     alert("Game over");
//   }

//   if (tasVal === myNumber) {
//     isWon = true;
//     total = 0;
//     let emi = false;
//     const oldNumber = myNumber;
//     myNumber = Math.floor(Math.random() * diceSides + 1);
//     tasValue.textContent = oldNumber;
//     win.innerHTML = `<span style="color:red;">OBS! You won. Your win number is ${oldNumber}</span>`;
//     emi = true;
//     startBtn.disabled = true;
//     startBtn.textContent = "Loading...";
//     tasValue.textContent = "waiting";
//     setTimeout(() => {
//       startBtn.disabled = false;
//       startBtn.textContent = "Tas";
//     }, 3000);
//   }

//   // ctx.clearRect(0, 0, values.ctxWidth, values.ctxHeight);
//   // values.x += 10;
//   // ctx.fillStyle = "green";
//   // ctx.fillText("Hello world", 10, 50);
//   // canvas.innerText = "kkk";
//   // canvas.style.color = "red";
//   // ctx.fillRect(values.x, values.y, values.width, values.height);
// });
// if (stopButton) {
//   stopButton.addEventListener("click", () => {
//     cancelAnimationFrame(anim);
//   });
// }
// if (restartButton)
//   restartButton.addEventListener("click", () => {
//     requestAnimationFrame(main);
//   });

// const suits = [
//   { type: "klover", icon: "❤️" },
//   { type: "ruter", icon: "♦" },
//   { type: "klover", icon: "♣" },
//   { type: "klover", icon: "♤" },
// ];
// const cards = document.getElementById("carts");
// cards.innerHTML = "";
// const deck = [];
// for (let i = 0; i < suits.length; i++) {
//   for (let j = 0; j <= 14; j++) {
//     deck.push({ type: suits[i].type, icon: suits[i].icon });
//   }
// }

// let chosedNumber = 0;
// const config = { attributes: true, childList: true, subtree: true };
// deck.sort().forEach((val, i) => {
//   const li = document.createElement("li");

//   li.innerHTML = `<div><div class="cards-icon1">${val.icon}</div><div>${val.type}</div><div class="cards-icon2">${val.icon}</div></div>`;

//   const sp = document.createElement("div");
//   let j = (i + 1) % 14;

//   sp.textContent = j === 0 ? 14 : j;
//   li.setAttribute("number", j === 0 ? 14 : j);

//   let chosen = 0;
//   cards.insertAdjacentElement("afterbegin", li);
//   li.insertAdjacentElement("afterbegin", sp);
// });

// let i = 0;
// let chosen = [];
// let j = 0;

// let clickIndex = 0;
// const controller = new AbortController();
// const obji = {
//   prev: { index: "", value: "" },
//   current: { index: "", value: "" },
// };
// let clickRepeatNumber = 2;
// const rr = cards.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.nodeName !== "LI") {
//       return;
//     }

//     chosen.push(e.target);
//     chosen[clickIndex].classList.add("chosen-cart");
//     // chosen[clickIndex].classList.add("chosen-cart");
//     const oldColor = e.target.style.getPropertyValue("backgroundColor");

//     if (chosen[clickIndex - 1]) {
//       chosen[clickIndex - 1].classList.remove("chosen-cart");
//       if (
//         chosen[clickIndex - 1].getAttribute("number") ===
//         e.target.getAttribute("number")
//       ) {
//         clickRepeatNumber += 1;
//       } else {
//         clickRepeatNumber = 2;
//       }
//       if (clickRepeatNumber % 2) {
//         chosen[clickIndex].classList.remove("chosen-cart");
//       } else {
//         chosen[clickIndex].classList.add("chosen-cart");
//       }
//     }
//     clickIndex += 1;
//     // console.log(
//     //   chosen.map((res) => res.textContent),
//     //   e.target.textContent
//     // );
//     // e.target.style.color = "blue";
//     // chosen.forEach((rr, j) => {
//     //   if (j !== i - 1) {
//     //     rr.style.color = "initial";
//     //   }
//     // });
//   },
//   { signal: controller.signal }
// );

// var observer = new MutationObserver(function (mutations) {
//   mutations.forEach(function (mutation) {
//     if (mutation.type === "attributes") {
//     }
//   });
// });

// observer.observe(cards, config);

// const state = {
//   name: "",
//   cardNumber: "",
//   id: 0,
// };
