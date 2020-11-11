const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 5],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
let circleTurn;

startGame();

function startGame() {
	circleTurn = false;
	cellElements.forEach((cell) => {
		cell.addEventListener("click", handleClick, { once: true });
	});

	setBoardHoverClass();
}

function handleClick(e) {
	const cell = e.target;
	const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

	//place Mark
	placeMark(cell, currentClass);
	//Check for Win
	//Check for Draw
	//Change Turns
	swapTurns();
	setBoardHoverClass();
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass);
}

function swapTurns() {
	circleTurn = !circleTurn;
}

function setBoardHoverClass() {
	board.classList.remove(X_CLASS);
	board.classList.remove(CIRCLE_CLASS);

	if (circleTurn) {
		board.classList.add(CIRCLE_CLASS);
	} else {
		board.classList.add(X_CLASS);
	}
}
