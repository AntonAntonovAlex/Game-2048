import './styles.css'
import { Board } from "./board.js";

const canvasBoard = document.getElementById("canvas");
let board = new Board(canvasBoard);
let mouseDownClickX;
let mouseDownClickY;
const MIN_DIFF_X_Y = 50;
const MAX_GREATEST_VALUE = 2048;
board.getInitialRandomFilledCell();
board.getInitialRandomFilledCell();
setupButtonClick();
setupMouseDownClick();
setupMouseUpClick();

function setupButtonClick() {
    window.addEventListener("keydown", handleButtonClick, {once: true})
};

function setupMouseDownClick() {
    window.addEventListener("mousedown", handleMouseDownClick)
};

function handleMouseDownClick(event) {;
    mouseDownClickX = event.clientX;
    mouseDownClickY = event.clientY;
}

function setupMouseUpClick() {
    window.addEventListener("mouseup", handleMouseUpClick)
};

function handleMouseUpClick(event) {
    let mouseUpClickX = event.clientX;
    let mouseUpClickY = event.clientY;
    if ((Math.abs(mouseDownClickX - mouseUpClickX)) > MIN_DIFF_X_Y || (Math.abs(mouseDownClickY - mouseUpClickY)) > MIN_DIFF_X_Y) {
        if ((Math.abs(mouseDownClickX - mouseUpClickX)) > (Math.abs(mouseDownClickY - mouseUpClickY))) {
            if (mouseDownClickX > mouseUpClickX) {
                moveLeft();
                board.getRandomFilledCell();
                return;
            }
            moveRight();
            board.getRandomFilledCell();
            return;
        }
        if (mouseDownClickY > mouseUpClickY) {
            moveUp();
            board.getRandomFilledCell();
            return;
        }
        moveDown();
        board.getRandomFilledCell();
    };

}

function handleButtonClick(event) {
    switch (event.key) {
        case "ArrowUp":
            moveUp();
            break;
        
        case "ArrowDown":
            moveDown();
            break;
        
        case "ArrowLeft":
            moveLeft();
            break;

        case "ArrowRight":
            moveRight();
            break;

        default:
            setupButtonClick();
            return;
    };

    if (board.getGreatestValue() >= MAX_GREATEST_VALUE) {
        alert('Уровень пройден!');
        restartGame();
    };

    board.getRandomFilledCell();
    setupButtonClick()
};

function moveUp() {
    board.moveCellsUp();
};

function moveDown() {
    board.moveCellsDown();
};

function moveLeft() {
    board.moveCellsLeft();
};

function moveRight() {
    board.moveCellsRight();
};

function restartGame() {
    canvasBoard.replaceChildren();
    board = new Board(canvasBoard);
    board.getInitialRandomFilledCell();
    board.getInitialRandomFilledCell();
};
