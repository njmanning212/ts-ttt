//constants

const winCombos: number[][] = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8], 
    [0,4,8],
    [2,4,6]
]

//variables

let board: number[], turn: number, winner: boolean, tie: boolean

//cached element references

const squareEls = document.querySelectorAll('.sqr') as NodeListOf<HTMLDivElement>
const msgEl = document.getElementById('message') as HTMLDivElement
const resetBtnEl = document.querySelector('button') as HTMLButtonElement
const boardEl = document.querySelector('.board') as HTMLDivElement

//event listeners

//functions

init()

function init(): void {
  board = [0,0,0,0,0,0,0,0,0]
  turn = 1
  winner = false
  tie = false
  render()
}

function render(): void {
  updateBoard()
}

function updateBoard(): void {
  board.forEach((square, idx) => {
    if (square === 1) {
      squareEls[idx].textContent = 'X'
    }
    if (square === -1) {
      squareEls[idx].textContent = 'O'
    }
  })
}