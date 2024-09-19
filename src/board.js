import { Cell } from "./cell.js";

const COLUMNS_COUNT = 4;
const CELLS_COUNT = COLUMNS_COUNT * COLUMNS_COUNT;
const INIAL_VALUE = 2;
const scoreValue = document.getElementById("score-value");

export class Board {
    constructor(canvasBoard) {
        this.cells = [];
        this.isMovedCell = false;
        this.scoreValue = scoreValue;
        this.scoreValue.textContent = 0;
        this.greatestValue = 0;
        for (let i = 0; i < CELLS_COUNT; i++) {
            this.cells.push(
                new Cell(canvasBoard, i)
            );
        }
    };

    getInitialRandomFilledCell() {
        const randomIndex = Math.floor(Math.random() * this.cells.length);
        if (this.cells[randomIndex].getIsEmptyCell()) {
            this.cells[randomIndex].setColorCell(INIAL_VALUE);
            this.cells[randomIndex].setValueCell(INIAL_VALUE);
        } else {
            this.getInitialRandomFilledCell();
        }
    };

    getRandomFilledCell() {
        if (this.isMovedCell) {
            const randomIndex = Math.floor(Math.random() * this.cells.length);
                if (this.cells[randomIndex].getIsEmptyCell()) {
                    const randomValue = (Math.random() > 0.1 ? 2 : 4);
                    this.cells[randomIndex].setColorCell(randomValue);
                    this.cells[randomIndex].setValueCell(randomValue);
                } else {
                    this.getRandomFilledCell();
                }
                this.isMovedCell = false;
        }

    };

    moveCellsUp() {
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                if (!this.cells[(j * 4 + i)].isEmpty) {
                    let s = j - 1;
                    let emptyCell = null;

                    if (!this.cells[(s * 4 + i)].isEmpty) {
                        if (this.cells[(s * 4 + i)].getValueCell() === this.cells[(j * 4 + i)].getValueCell() && !this.cells[(s * 4 + i)].getIsMergeCell()) {
                            this.moveCellWithMergeVertically(i, j, s);
                        }
                    } else {
                        if (j <= 2) {
                            if (this.cells[((j + 1) * 4 + i)].getValueCell() === this.cells[(j * 4 + i)].getValueCell()) {
                            this.moveCellWithMergeVertically(i, j + 1, s + 1);
                            }
                        }
                        emptyCell = s;
                        s--;
                        while (s >= 0) {
                            if (this.cells[(s * 4 + i)].isEmpty) {
                                emptyCell = s;
                                s--;
                            } else break;
                        }
                    }
                    if (emptyCell !== null) {
                        this.moveCellVertically(j, i, emptyCell);
                    }
                }
            }
        }
        this.resetIsMergeCell();
    };

    moveCellsDown() {
        for (let i = 0; i < 4; i++) {
            for (let j = 2; j >= 0; j--) {
                if (!this.cells[(j * 4 + i)].isEmpty) {
                    let s = j + 1;
                    let emptyCell = null;

                    if (!this.cells[(s * 4 + i)].isEmpty) {
                        if (this.cells[(s * 4 + i)].getValueCell() === this.cells[(j * 4 + i)].getValueCell() && !this.cells[(s * 4 + i)].getIsMergeCell()) {
                            this.moveCellWithMergeVertically(i, j, s);
                        }
                    } else {
                        if (j >= 1) {
                            if (this.cells[((j - 1) * 4 + i)].getValueCell() === this.cells[(j * 4 + i)].getValueCell()) {
                            this.moveCellWithMergeVertically(i, j - 1, s - 1);
                            }
                        }
                        emptyCell = s;
                        s++;
                        while (s <= 3) {
                            if (this.cells[(s * 4 + i)].isEmpty) {
                                emptyCell = s;
                                s++;
                            } else break;
                        }
                    }
                    if (emptyCell !== null) {
                        this.moveCellVertically(j, i, emptyCell);
                    }
                }
            }
        }
        this.resetIsMergeCell();
    };

    moveCellsLeft() {
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                if (!this.cells[(i * 4 + j)].isEmpty) {
                    let s = j - 1;
                    let emptyCell = null;

                    if (!this.cells[(i * 4 + s)].isEmpty) {
                        if (this.cells[(i * 4 + s)].getValueCell() === this.cells[(i * 4 + j)].getValueCell() && !this.cells[(i * 4 + s)].getIsMergeCell()) {
                            this.moveCellWithMergeHorizontally(i, j, s);
                        }
                    } else {
                        if (j <= 2) {
                            if (this.cells[(i * 4 + j + 1)].getValueCell() === this.cells[(i * 4 + j)].getValueCell()) {
                            this.moveCellWithMergeHorizontally(i, j + 1, s + 1);
                            }
                        }
                        emptyCell = s;
                        s--;
                        while (s >= 0) {
                            if (this.cells[(i * 4 + s)].isEmpty) {
                                emptyCell = s;
                                s--;
                            } else break;
                        }
                    }
                    if (emptyCell !== null) {
                        this.moveCellHorizontally(j, i, emptyCell);
                    }
                }
            }
        }
        this.resetIsMergeCell();
    };

    moveCellsRight() {
        for (let i = 0; i < 4; i++) {
            for (let j = 2; j >= 0; j--) {
                if (!this.cells[(i * 4 + j)].isEmpty) {
                    let s = j + 1;
                    let emptyCell = null;

                    if (!this.cells[(i * 4 + s)].isEmpty) {
                        if (this.cells[(i * 4 + s)].getValueCell() === this.cells[(i * 4 + j)].getValueCell() && !this.cells[(i * 4 + s)].getIsMergeCell()) {
                            this.moveCellWithMergeHorizontally(i, j, s);
                        }
                    } else {
                        if (j >= 1) {
                            if (this.cells[(i * 4 + j - 1)].getValueCell() === this.cells[(i * 4 + j)].getValueCell()) {
                            this.moveCellWithMergeHorizontally(i, j - 1, s - 1);
                            }
                        }
                        emptyCell = s;
                        s++;
                        while (s < 4) {
                            if (this.cells[(i * 4 + s)].isEmpty) {
                                emptyCell = s;
                                s++;
                            } else break;
                        }
                    }
                    if (emptyCell !== null) {
                        this.moveCellHorizontally(j, i, emptyCell);
                    }
                }
            }
        }
        this.resetIsMergeCell();
    };

    moveCellHorizontally(cellValue, columnValue, emptyCell) {
        let value = this.cells[(columnValue * 4 + cellValue)].getValueCell();
        this.cells[(columnValue * COLUMNS_COUNT + cellValue)].setClearCell();
        this.cells[columnValue * COLUMNS_COUNT + emptyCell].setColorCell(value);
        this.cells[columnValue * COLUMNS_COUNT + emptyCell].setValueCell(value);
        this.isMovedCell = true;
    };

    moveCellVertically(cellValue, columnValue, emptyCell) {
        let value = this.cells[(cellValue * COLUMNS_COUNT + columnValue)].getValueCell();
        this.cells[(cellValue * COLUMNS_COUNT + columnValue)].setClearCell();
        this.cells[emptyCell * COLUMNS_COUNT + columnValue].setColorCell(value);
        this.cells[emptyCell * COLUMNS_COUNT + columnValue].setValueCell(value);
        this.isMovedCell = true;
    };

    moveCellWithMergeHorizontally(columnValue, cellValue, emptyCell) {
        let value = (this.cells[(columnValue * COLUMNS_COUNT + cellValue)].getValueCell()) * 2;
        this.cells[(columnValue * COLUMNS_COUNT + cellValue)].setClearCell();
        this.cells[(columnValue * COLUMNS_COUNT + emptyCell)].setColorCell(value);
        this.cells[(columnValue * COLUMNS_COUNT + emptyCell)].setValueCell(value);
        this.cells[(columnValue * COLUMNS_COUNT + emptyCell)].setIsMergeCell();
        this.isMovedCell = true;
        this.greatestValue = this.greatestValue > value ? this.greatestValue : value;
        this.scoreValue.textContent = +this.scoreValue.textContent + value;
    };

    moveCellWithMergeVertically(columnValue, cellValue, emptyCell) {
        let value = (this.cells[(cellValue * COLUMNS_COUNT + columnValue)].getValueCell()) * 2;
        this.cells[(cellValue * COLUMNS_COUNT + columnValue)].setClearCell();
        this.cells[(emptyCell * COLUMNS_COUNT + columnValue)].setColorCell(value);
        this.cells[(emptyCell * COLUMNS_COUNT + columnValue)].setValueCell(value);
        this.cells[(emptyCell * COLUMNS_COUNT + columnValue)].setIsMergeCell();
        this.cells[(emptyCell * COLUMNS_COUNT + columnValue)].setIsMovedCell();
        this.greatestValue = this.greatestValue > value ? this.greatestValue : value;
        this.isMovedCell = true;
        this.scoreValue.textContent = +this.scoreValue.textContent + value;
    };

    resetIsMergeCell() {
        this.cells.forEach((cell) => {
            cell.isMerge = false;
            cell.isMoved = false;
        }
    )
    };

    getGreatestValue() {
        return this.greatestValue;
    };

};
