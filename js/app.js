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
