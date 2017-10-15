'use strict';
/*1.1.*/
const getObject = (name = 'User', age = 25) => ({name, age});

/*1.2.*/
const obj = {
  str: 'Some string lololo',
  getStrLength() {
    return this.str.length;
  },
  getReversStr() {
    return this.str.split('').reverse().join('');
  }
}

/*1.3.*/
const getOneObject = (...objs) => Object.assign({}, ...objs);

/*2.1.*/

/*2.2.*/
class Component {
  constructor(tagName = 'div') {
    this.tagName = tagName;
    this.node = document.createElement(this.tagName);
  }

  setText(text) {
    this.node.textContent = text;
  }
}

const comp = new Component('span');

/*2.3.*/
class InputComponent extends Component {
  constructor(tagName) {
    super(tagName);
    this.node.placeholder = 'Enter text';
  }

  setText(text) {
    this.node.value = text;
  }
}

const input = new InputComponent('p');

/*2.4.*/
class Figure {
  constructor(angles = 1) {
    this.angles = angles;
    this.abstract = true;
  }

  getInfo() {
    return {
      angles: this.angles,
      abstract: this.abstract
    }
  }
}

const f = new Figure();

class Triangle extends Figure {
  constructor(angles = 3, name = 'triangle') {
    super(angles);
    this.name = name;
    this.abstract = false;
  }

  getInfo() {
    const props = super.getInfo();
    props.name = this.name;
    return props;
  }
}

const t = new Triangle();

/*2.5.*/

class Table {
  constructor(rows = 3, cols = 3) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = this.initMatrix(this.rows, this.cols);
  }

  static countCells(rows, cols) {
    return rows * cols;
  }

  initMatrix(rows, cols) {
    const cell = new Array(rows);
    for (let i = 0; i < rows; i++) {
      cell[i] = new Array(cols);
    }
    return cell;
  }

  getAllCells() {
    return this.rows * this.cols;
  }

  putTextToCell(numRow, numCol, text) {
    return this.matrix[numRow - 1][numCol - 1] = text;
  }

  getTextFromCell(numRow, numCol) {
    return this.matrix[numRow - 1][numCol - 1] || 'empty cell';
  }

  getTableInfo() {
    return {
      cells: this.getAllCells(),
      rows: this.rows,
      cols: this.cols
    }
  }
}

const table = new Table(6, 7);

/*2.6.*/
class NewTable extends Table {
  constructor(rows, cols, title = 'table') {
    super(rows, cols);
    this.title = title;
  }

  getTableInfo() {
    return Object.assign(super.getTableInfo(), {title: this.title});
  }

  set tableName(value) {
    if (value) {
      this.title = value;
    }
  }
}

const newTable = new NewTable();
