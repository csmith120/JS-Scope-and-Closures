console.group('first exercise');
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
		console.log(innerVar); // Can we access innerVar?
	}

	innerFunction();
}

outerFunction();

console.group('exercise 2');
function mainFunction() {
	// Call the hoistedFunction here
    const x = 'shales king';
	// Now, declare the hoistedFunction below
    console.log(x);
};

mainFunction();

console.group('exercice 3');
function tellerTooth(outerVariable) {
const outer2 = 'dev stuff'
    return function innerFunction(innerVariable) {
        console.log('Outer variable ' + outerVariable)
        console.log('Inner variable ' + innerVariable)
        console.log(outer2)
    }
};

const newFunction = tellerTooth('deli')
newFunction('parking lot')

console.group('exercise 4');
// Declare a global variable here
let game = 'pokemon'
function modifyGlobal() {
    // Try to modify the global variable here
    game = 'dev'
    console.log(game)
};

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
    let game = 'death'
    console.log(game)
};
// Call both functions here
localScopeTest();
modifyGlobal();

console.group('exercise 5');
param = 1
function functionFactory(param) {
    // Return a function that makes use of 'param'
    let clusterShell = param + 10
    console.log(clusterShell)
};

// Create an instance of the inner function by invoking functionFactory with a parameter
functionFactory();

console.group('exercise 6');

function hoistingTest() {
    // Try printing a variable here
    console.log(dunes)
    // Declare the variable after the console.log
    var dunes = 'rage quite'
}

hoistingTest();

console.group('exercise 7')