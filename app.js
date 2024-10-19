let boxes = document.querySelectorAll('.box');
let text = document.querySelector('.text');
let resets = document.querySelector('.reset-btn');
let count = 0


let winnerPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

let turnO = true;

boxes.forEach((box) => {
  box.addEventListener(('click'), () => {
    if (turnO) {
      box.innerText = 'O';
      turnO = false;
    } else {
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkCondition();

    if (count === 9 && !isWinner) {
      gameDraw();
    }

    checkCondition();
  });
});

const gameDraw = () => {
  text.innerText = `Game was a Draw.`;
  text.classList.remove('hidden');
  disabledBox();
};

const winnerPlayer = (winner) => {
  text.innerText = `Congratulation! ${winner}`;
  text.classList.remove('hidden');
  disabledBox();
  
};

const checkCondition = () => {
  for (let pattern of winnerPattern) {
    let posValue1 = boxes[pattern[0]].innerText;
    let posValue2 = boxes[pattern[1]].innerText;
    let posValue3 = boxes[pattern[2]].innerText;

    if (posValue1 != '' && posValue2 != '' && posValue3 != '') {
      if (posValue1 === posValue2 && posValue2 === posValue3) {
        winnerPlayer(posValue1);
        return true;
      }
    }
  }
};

let disabledBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let enabledBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = '';
  }
};

resets.addEventListener(('click'), () => {
  resetBtn();
  text.classList.add('hidden');
});


let resetBtn = () => {
  count = 0;
  turnO = true;
  enabledBox();
}

