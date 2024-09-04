console.group('first exercise')
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

console.group('exercise 2')
function mainFunction() {
	// Call the hoistedFunction here
    const x = 'shales king';
	// Now, declare the hoistedFunction below
    console.log(x);
}

mainFunction();

console.group('exercice 3')
function tellerTooth(outerVariable) {
const outer2 = 'dev stuff'
    return function innerFunction(innerVariable) {
        console.log('Outer variable ' + outerVariable)
        console.log('Inner variable ' + innerVariable)
        console.log(outer2)
    }
}

const newFunction = tellerTooth('deli')
newFunction('parking lot')

console.group('exercise 4')
// Declare a global variable here
let monkFlip = jumpKick
function modifyGlobal() {
    // Try to modify the global variable here
    let monkFlip = 'owie'
}

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
}

// Call both functions here