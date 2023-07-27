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
