// JavaScript Document

document.getElementById("dateToday").innerHTML = Date();

let bilanc = 3000;

document.getElementById("send_it").addEventListener("click", function(event) {
	event.preventDefault();
	
	const persuna = document.getElementById("username").value;
	const kelma = document.getElementById("password").value;
	
	const validUsername = "gilbert";
	const validPassword = "123456";

	if (persuna === "") {
		alert ("Enter a username!")
	} else if (kelma === "") {
		alert ("Enter a password!")
	} else if (persuna === kelma) {
		alert ("Username and password CANNOT be the same!")
	} else if (kelma.length < 6) {
		alert ("Password cannot be less than 6 characters!")	
	} else if (persuna === validUsername && kelma === validPassword) {
		
		document.getElementById("welcome").innerHTML = "Welcome, " + persuna + "!";
		document.getElementById("login_area").style.display = "none";
		
		document.getElementById("withdraw").disabled = false;
		document.getElementById("deposit").disabled = false;
		document.getElementById("balance").disabled = false;
		document.getElementById("transfer").disabled = false;
		document.getElementById("logout").disabled = false;
		document.getElementById("toDo").hidden = false;
		
	} else {
        alert ("Invalid username or password. Try again!");
    }
});

document.getElementById("withdraw").addEventListener("click", function() {
	document.getElementById("working_area").innerHTML = "Your balance is € " + bilanc.toLocaleString();
	
	setTimeout(function() {
	let withdrawAmount = prompt("How much do you want to withdraw? €");
	withdrawAmount = parseFloat(withdrawAmount);
	
	if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount < bilanc) {
		bilanc -= withdrawAmount;
		console.log(bilanc);
		document.getElementById("working_area").innerHTML = "Your updated balance is € " + bilanc.toLocaleString();
	} else if (withdrawAmount > bilanc) {
		alert("Cannot withdraw more than you own!");
	} else {
		alert("Invalid amount. Please enter a positive number.");
	}
	}, 500);
});

document.getElementById("deposit").addEventListener("click", function() {
			
	let depositAmount = prompt("How much do you want to deposit? €");
	depositAmount = parseFloat(depositAmount);
	
	if (!isNaN(depositAmount) && depositAmount > 0 ) {
		bilanc += depositAmount;
		console.log(bilanc);
		document.getElementById("working_area").innerHTML = "Your updated balance is € " + bilanc.toLocaleString();
	} else {
		alert("Invalid amount. Please enter a positive number.");
	}
});

document.getElementById("balance").addEventListener("click", function() {
	console.log(bilanc);
	document.getElementById("working_area").innerHTML = "Your balance is € " + bilanc.toLocaleString();
});

document.getElementById("transfer").addEventListener("click", function() {
	document.getElementById("working_area").innerHTML = "Service currently unavailable!"
});

document.getElementById("logout").addEventListener("click", function() {
	location.reload();
});
