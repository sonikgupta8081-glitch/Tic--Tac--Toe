let boxes = document.querySelectorAll(".Box");
let resetbtn = document.querySelector("#Resetbutton");
let newGamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let tern0 = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  tern0 = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};
boxes.forEach((Box) => {
  Box.addEventListener("click", () => {
    console.log("box was clicked");
    if (tern0 === true) {
      Box.innerText = "0";
      tern0 = false;
    } else {
      Box.innerText = "x";
      tern0 = true;
    }
    Box.disabled = true;
    checkWinner();
  });
});
const dishableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `congratulation,winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  dishableBoxes();
};

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


