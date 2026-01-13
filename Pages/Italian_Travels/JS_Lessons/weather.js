var names = ["James", "Gilbert", "Gemma", "Duffy"];
//// array with 4 names in it

console.log(names[0]);  // James
console.log(names[2]);  // Kevin
console.log(names[4]);  // Undefined

names[3] = "Duff";
console.log(names);

names[4] = "last_one";
console.log(names);

/// Properties

console.log(names.length);

console.log(names.sort());

var arrayLength = names.length;

/// Last elemnt in the array
console.log(names[arrayLength -1]);

/// adding a loop
for (var i = 0; i < names.length ; i++) {
	console.log("the Array element at position" + 1 + " is: " + names[i]);
}

/// Methods

var stringNames = ["Mark", "Brandon", "Justin"];
console.log(stringNames.toString());

console.log(stringNames.join(" and "));

names.pop();
console.log(names);    /// pop always removes the last element: removed last_one

names.push("new_one"); /// push adds an element to the array... added in the last position
console.log(names);
console.log(arrayLength);

names.shift();
console.log(names);    /// removed Duff

names.unshift();
console.log(names);

var temps = [27.1, 26, 32, 40.3, 19];
temps.forEach(myFunction);                             

function myFunction(value, index, array) {             /// passing the value / index and array lenght
	console.log(index + " => " + value);               /// => makes it neater
}

/// making it anonymous... removing the function whilst passing the values inthe forEach
var temps = [27.1, 26, 32, 40.3, 19];

temps.forEach((value, index) => {             
console.log(index + " => " + value);               
});

var mappedTemps = temps.map((value, index) => {
	return value -2;
});

console.log(mappedTemps);
console.log(temps);





