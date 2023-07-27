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

boardEl.addEventListener('click', handleClick)

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
  checkForWinner()
  checkForTie()
  updateMessage()
  turn *= -1
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

function updateMessage (): void {
  if (!winner && !tie) {
    msgEl.innerText = `Player ${turn === 1 ? "X" : "O"}'s turn`
  }
  if (winner) {
    msgEl.innerText = `Player ${turn === 1 ? "X" : "O"} wins!`
  }
  if (tie) {
    msgEl.innerText = `Tie Game!`
  }
}

function handleClick(evt: MouseEvent): void {
  if (!evt.target) return
  const target = evt.target as HTMLDivElement
  const targetID = parseInt(target.id)
  if (board[targetID] !== 0 || winner) return
  board[targetID] = turn
  render()
}

function checkForWinner (): void {
  winCombos.forEach(combo => {
    let total = 0
    combo.forEach(idx => {
      total += board[idx]
    })
    if (Math.abs(total) === 3) winner = true
  })
}

function checkForTie (): void {
  if (board.includes(0)) return
  tie = true
}