document.getElementById("input_Button").addEventListener("click", function(e) {
	let valid = true;

	let namefield = String(document.getElementById("input_Name").value);
	if (/\d/.test(namefield)) {
		alert("Text only for the name!!")
		valid = false;
	}
		
	let surnamefield = String(document.getElementById("input_Surname").value);
	if (/\d/.test(surnamefield)) {
		alert("Text only for the surname!!")
		valid = false;
	}
		
	let emailfield = document.getElementById("input_Email").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailfield)) {
        alert("Please enter a valid email address.");
	}
	
	let servicefield = String(document.getElementById("fieldservice").value);
	if (/\d/.test(servicefield)) {
		alert("Text only for the service!!")
		valid = false;
	}
			
if(!valid) {
e.preventDefault();
}
	
});
