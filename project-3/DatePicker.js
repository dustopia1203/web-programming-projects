function DatePicker(id) {
	this.id = id;
}

DatePicker.prototype.render = function(date) {
	const week_days = ['sun','mon','tue','wed','thu','fri','sat'];
	const tbl = document.createElement('table');
	tbl.style.width = '100px';
	tbl.style.border = '1px solid black';

	const tr = tbl.insertRow();
    for (let j = 0; j < 7; j++) {
    	const td = tr.insertCell();
	    td.appendChild(document.createTextNode(week_days[j]));
	    td.style.border = '1px solid black';
    }

	for (let i = 0; i < 5; i++) {
		const tr = tbl.insertRow();
		for (let j = 1; j < 8; j++) {
		    const td = tr.insertCell();
		    td.appendChild(document.createTextNode(7*i+j));
		    td.style.border = '1px solid black';
		}
	}

	var elem = document.getElementById(this.id);
	elem.appendChild(tbl);
}

