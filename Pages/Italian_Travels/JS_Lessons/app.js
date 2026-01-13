// JavaScript Document

document.getElementById('readings-form').addEventListener('submit', addReading, false);

const readings = [];
let errorText = "";			/// empty string

showReadings();

function isValid(readingDate, readingMax, readingMin) {
	let valid = true;
	errorText = "";
	
	if(readingDate === "") {
		valid = false;
		errorText = "Date is required! <br>";
	}
	
	if(readingMax === "") {
		valid = false;
		errorText += "The maximum temperature is invalid! <br>";
	}
	
	if(readingMin === "") {
		valid = false;
		errorText += "The minimum temperature is invalid! <br>";
	}
	
	if(Number(readingMin) > Number(readingMax)) {
		valid = false;
		errorText += "The temperatires were not entered correctly! <br>";
	}
	
	document.getElementById('error-area').innerHTML = errorText;
	return valid;
}

function addReading(e) {
	e.preventDefault();
	
	const readingDate = document.getElementById('reading-date').value;
	const readingMax = document.getElementById('reading-max').value;
	const readingMin = document.getElementById('reading-min').value;
	
	if(isValid(readingDate, readingMax, readingMin)) {
		document.getElementById('error-area').style.display = "none";
		
		readings.push([readingDate, readingMax, readingMin]);
		
		showReadings();
		
		clearForm();
	} else {
		document.getElementById('error-area').style.display = "block";
	}
}

function showReadings() {
	const readingsArea = document.getElementById('readings-area');
	
	let result = "";
	if(readings.length === 0) {
		result = "There are no readings yet!";
	} else {
		result += "<table><thead><tr><th>Date</th><th>Max Temp</th><th>Min Temp</th></tr></thead>";
		result += "<tbody>";
		
		readings.map(reading => {
			result += "<tr>";
			
			result += "<td>" + reading[0] + "</td>";
			result += "<td>" + reading[1] + "</td>";
			result += "<td>" + reading[2] + "</td>";
			
			result += "</tr>";
			
		});
		
		result += "</tbody></table>";
	}
	
	readingsArea.innerHTML = result;
}

function clearForm() {
	document.getElementById('reading-date').value = "";
	document.getElementById('reading-max').value = "";
	document.getElementById('reading-min').value = "";
}
