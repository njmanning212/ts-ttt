"use strict";
//constants
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//variables
let board, turn, winner, tie;
//cached element references
const squareEls = document.querySelectorAll('.sqr');
const msgEl = document.getElementById('message');
const resetBtnEl = document.querySelector('button');
const boardEl = document.querySelector('.board');
//event listeners
boardEl.addEventListener('click', handleClick);
//functions
init();
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = false;
    tie = false;
    render();
}
function render() {
    updateBoard();
    updateMessage();
}
function updateBoard() {
    board.forEach((square, idx) => {
        if (square === 1) {
            squareEls[idx].textContent = 'X';
        }
        if (square === -1) {
            squareEls[idx].textContent = 'O';
        }
    });
}
function updateMessage() {
    if (!winner && !tie) {
        msgEl.innerText = `Player ${turn === 1 ? "X" : "O"}'s turn`;
    }
    if (winner) {
        msgEl.innerText = `Player ${turn === 1 ? "X" : "O"} wins!`;
    }
    if (tie) {
        msgEl.innerText = `Tie Game!`;
    }
}
function handleClick(evt) {
    if (!evt.target)
        return;
    const target = evt.target;
    const targetID = parseInt(target.id);
    if (board[targetID] !== 0 || winner)
        return;
    board[targetID] = turn;
    checkForWinner();
    checkForTie();
    render();
    turn *= -1;
}
function checkForWinner() {
    winCombos.forEach(combo => {
        let total = 0;
        combo.forEach(idx => {
            total += board[idx];
        });
        if (Math.abs(total) === 3)
            winner = true;
    });
}
function checkForTie() {
    if (board.includes(0))
        return;
    tie = true;
}
