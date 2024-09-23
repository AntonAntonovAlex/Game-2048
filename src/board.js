import { Cell } from "./cell.js";

const COLUMNS_COUNT = 4;
const CELLS_COUNT = COLUMNS_COUNT * COLUMNS_COUNT;
const INITIAL_VALUE = 2;
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
        };
    };

    getInitialRandomFilledCell() {
        const randomIndex = Math.floor(Math.random() * this.cells.length);

        if (this.cells[randomIndex].getIsEmptyCell()) {
            this.cells[randomIndex].setColorCell(INITIAL_VALUE);
            this.cells[randomIndex].setValueCell(INITIAL_VALUE);
        } else {
            this.getInitialRandomFilledCell();
        };
    };

    getRandomFilledCell() {
        if (this.isMovedCell) {
            const randomIndex = Math.floor(Math.random() * this.cells.length);

                if (this.cells[randomIndex].getIsEmptyCell()) {
                    const randomValue = (Math.random() > 0.1 ? INITIAL_VALUE : INITIAL_VALUE * INITIAL_VALUE);
                    this.cells[randomIndex].setColorCell(randomValue);
                    this.cells[randomIndex].setValueCell(randomValue);
                } else {
                    this.getRandomFilledCell();
                };

                this.isMovedCell = false;
        };
    };

    moveCellsUp() {
        for (let row = 0; row < COLUMNS_COUNT; row++) {
            for (let col = 1; col < COLUMNS_COUNT; col++) {
                if (!this.cells[(col * COLUMNS_COUNT + row)].isEmpty) {
                    let offset = col - 1;
                    let emptyCell = null;

                    if (!this.cells[(offset * COLUMNS_COUNT + row)].isEmpty) {
                        if (this.cells[(offset * COLUMNS_COUNT + row)].getValueCell() === this.cells[(col * COLUMNS_COUNT + row)].getValueCell() && !this.cells[(offset * COLUMNS_COUNT + row)].getIsMergeCell()) {
                            this.moveCellWithMergeVertically(row, col, offset);
                        }
                    } else {
                        if (col <= 2) {
                            if (this.cells[((col + 1) * COLUMNS_COUNT + row)].getValueCell() === this.cells[(col * COLUMNS_COUNT + row)].getValueCell()) {
                            this.moveCellWithMergeVertically(row, col + 1, offset + 1);
                            }
                        }
                        emptyCell = offset;
                        offset--;
                        while (offset >= 0) {
                            if (this.cells[(offset * COLUMNS_COUNT + row)].isEmpty) {
                                emptyCell = offset;
                                offset--;
                            } else break;
                        }
                    }
                    if (emptyCell !== null) {
                        this.moveCellVertically(col, row, emptyCell);
                    }
                }
            }
        }
        this.resetIsMergeCell();
    };

    moveCellsDown() {
        for (let row = 0; row < COLUMNS_COUNT; row++) {
            for (let col = 2; col >= 0; col--) {
                if (!this.cells[(col * COLUMNS_COUNT + row)].isEmpty) {
                    let offset = col + 1;
                    let emptyCell = null;

                    if (!this.cells[(offset * COLUMNS_COUNT + row)].isEmpty) {
                        if (this.cells[(offset * COLUMNS_COUNT + row)].getValueCell() === this.cells[(col * COLUMNS_COUNT + row)].getValueCell() && !this.cells[(offset * COLUMNS_COUNT + row)].getIsMergeCell()) {
                            this.moveCellWithMergeVertically(row, col, offset);
                        }
                    } else {
                        if (col >= 1) {
                            if (this.cells[((col - 1) * COLUMNS_COUNT + row)].getValueCell() === this.cells[(col * COLUMNS_COUNT + row)].getValueCell()) {
                            this.moveCellWithMergeVertically(row, col - 1, offset - 1);
                            }
                        }
                        emptyCell = offset;
                        offset++;
                        while (offset <= 3) {
                            if (this.cells[(offset * COLUMNS_COUNT + row)].isEmpty) {
                                emptyCell = offset;
                                offset++;
                            } else break;
                        }
                    }
                    if (emptyCell !== null) {
                        this.moveCellVertically(col, row, emptyCell);
                    }
                }
            }
        }
        this.resetIsMergeCell();
    };

    moveCellsLeft() {
        for (let col = 0; col < COLUMNS_COUNT; col++) {
            for (let row = 1; row < COLUMNS_COUNT; row++) {
                if (!this.cells[(col * COLUMNS_COUNT + row)].isEmpty) {
                    let offset = row - 1;
                    let emptyCell = null;

                    if (!this.cells[(col * COLUMNS_COUNT + offset)].isEmpty) {
                        if (this.cells[(col * COLUMNS_COUNT + offset)].getValueCell() === this.cells[(col * COLUMNS_COUNT + row)].getValueCell() && !this.cells[(col * COLUMNS_COUNT + offset)].getIsMergeCell()) {
                            this.moveCellWithMergeHorizontally(col, row, offset);
                        }
                    } else {
                        if (row <= 2) {
                            if (this.cells[(col * COLUMNS_COUNT + row + 1)].getValueCell() === this.cells[(col * COLUMNS_COUNT + row)].getValueCell()) {
                            this.moveCellWithMergeHorizontally(col, row + 1, offset + 1);
                            }
                        }
                        emptyCell = offset;
                        offset--;
                        while (offset >= 0) {
                            if (this.cells[(col * COLUMNS_COUNT + offset)].isEmpty) {
                                emptyCell = offset;
                                offset--;
                            } else break;
                        }
                    }
                    if (emptyCell !== null) {
                        this.moveCellHorizontally(row, col, emptyCell);
                    }
                }
            }
        }
        this.resetIsMergeCell();
    };

    moveCellsRight() {
        for (let col = 0; col < COLUMNS_COUNT; col++) {
            for (let row = 2; row >= 0; row--) {
                if (!this.cells[(col * COLUMNS_COUNT + row)].isEmpty) {
                    let offset = row + 1;
                    let emptyCell = null;

                    if (!this.cells[(col * COLUMNS_COUNT + offset)].isEmpty) {
                        if (this.cells[(col * COLUMNS_COUNT + offset)].getValueCell() === this.cells[(col * COLUMNS_COUNT + row)].getValueCell() && !this.cells[(col * COLUMNS_COUNT + offset)].getIsMergeCell()) {
                            this.moveCellWithMergeHorizontally(col, row, offset);
                        }
                    } else {
                        if (row >= 1) {
                            if (this.cells[(col * COLUMNS_COUNT + row - 1)].getValueCell() === this.cells[(col * COLUMNS_COUNT + row)].getValueCell()) {
                            this.moveCellWithMergeHorizontally(col, row - 1, offset - 1);
                            }
                        }
                        emptyCell = offset;
                        offset++;
                        while (offset < COLUMNS_COUNT) {
                            if (this.cells[(col * COLUMNS_COUNT + offset)].isEmpty) {
                                emptyCell = offset;
                                offset++;
                            } else break;
                        }
                    }
                    if (emptyCell !== null) {
                        this.moveCellHorizontally(row, col, emptyCell);
                    }
                }
            }
        }
        this.resetIsMergeCell();
    };

    moveCellHorizontally(cellValue, columnValue, emptyCell) {
        let value = this.cells[(columnValue * COLUMNS_COUNT + cellValue)].getValueCell();
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
        );
    };

    getGreatestValue() {
        return this.greatestValue;
    };

    isCellAlive(cell, index) {
        const cellCurrent = cell.value;

        if (!cellCurrent) {
            return true;
        };

        const cellBottom = this.cells[index + COLUMNS_COUNT];

        if (cellBottom && cellBottom.value === cellCurrent) {
            return true;
        };

        const cellTop = this.cells[index - COLUMNS_COUNT];

        if (cellTop && cellTop.value === cellCurrent) {
            return true;
        };

        const cellLeft = (index % COLUMNS_COUNT) && this.cells[index - 1];

        if (cellLeft && cellLeft.value === cellCurrent) {
            return true;
        };

        const cellRight = ((index + 1) % COLUMNS_COUNT) && this.cells[index + 1];

        if (cellRight && cellRight.value === cellCurrent) {
            return true;
        };
    };

    canContinueGame() {
        return this.cells.some((cell, index) => this.isCellAlive(cell, index));
    };
};
