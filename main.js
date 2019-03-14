const addRow = document.getElementById('addRow');
const rowspan = document.getElementById('rowspan');
const addColumn = document.getElementById('addColumn');
let container = document.getElementById('container');
let myTable = document.getElementById('myTable');

//добавление строки
function actionAddRow() {
	
	let rowsLength = container.rows.length;
	let row = container.insertRow(rowsLength-1);
	let cellLength = container.rows[0].cells.length;
	for(i = 0; i<2; i++) {
		row.insertCell(i);
	}
	rowspan.setAttribute('rowspan',rowsLength-1);
	row = myTable.insertRow(-1);
	cellLength = myTable.rows[0].cells.length;
	for(i = 0; i<cellLength; i++) {
		row.insertCell(i);
	}
}
//добавление колонки
function actionAddColumn() {
	let count = container.rows.length;
	for(j = 0; j<count; j++) {
		let column = container.rows[j].cells.length;
		console.log(column);
		if (column <= 3) continue;
		container.rows[j].insertCell(column-1);
	}
	let colspan = rowspan.getAttribute('colspan');
	rowspan.setAttribute('colspan',parseInt(colspan)+1);
	for(i=0;i<myTable.rows.length;i++) {
		myTable.rows[i].insertCell(-1);
	}
}

addRow.addEventListener('click', actionAddRow, false);
addColumn.addEventListener('click', actionAddColumn, false);

//появление кнопок удаления 

