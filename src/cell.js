export class Cell {
    constructor(canvasBoard, elementNumber) {
        this.elementNumber = elementNumber;
        const cell = document.createElement("canvas");
        this.cell = cell;
        this.value = null;
        this.isEmpty = true;
        this.isMerge = false;
        cell.classList.add("canvas");
        cell.setAttribute('id', `canvas-${this.elementNumber}`)
        this.ctx = cell.getContext("2d");
        canvasBoard.append(cell);
    }

    getIsEmptyCell() {
        return this.isEmpty;
    }

    getIsMergeCell() {
        return this.isMerge;
    }

    setIsMergeCell() {
        this.isMerge = true;
    }

    getValueCell() {
        return this.value;
    }

    setColorCell(value) {
        this.ctx.fillStyle = `rgb(${Math.floor(255 - value / 9)}, ${Math.floor(255 - value / 9)}, 0)`;
        this.ctx.fillRect(0, 0, 300, 150);
    };

    setValueCell(value) {
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 56px sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(value, this.cell.height, this.cell.width/4)
        this.value = value;
        this.isEmpty = false;
    };

    setClearCell() {
        this.ctx.clearRect(0, 0, 300, 150);
        this.value = null;
        this.isEmpty = true;
        this.isMerge = false;
    };
}