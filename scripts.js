console.group('exercise 1');
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
console.groupEnd();

console.group('exercise 2');
function mainFunction() {
	// Call the hoistedFunction here
    const x = 'shales king';
	// Now, declare the hoistedFunction below
    console.log(x);
};

mainFunction();
console.groupEnd();

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
console.groupEnd();

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
console.groupEnd();

console.group('exercise 5');
param = 1
function functionFactory(param) {
    // Return a function that makes use of 'param'
    let clusterShell = param + 10
    console.log(clusterShell)
};

// Create an instance of the inner function by invoking functionFactory with a parameter
functionFactory();
console.groupEnd();

console.group('exercise 6');

function hoistingTest() {
    // Try printing a variable here
    console.log(dunes)
    // Declare the variable after the console.log
    var dunes = 'rage quite'
}

hoistingTest();
console.groupEnd();

console.group('exercise 7')

function setupCounter() {
    // Define a count variable here
    let berryKing = 0;

    return {
        // Increment and print the count
        increment: function() {
            berryKing++;
            return berryKing;
        }
    };
}

// Create a counter instance and invoke it to test
let dummy = setupCounter();
console.log(dummy.increment()); // This will print 1
console.log(dummy.increment()); // This will print 2
console.groupEnd();

console.group('exercise 8')

function goldBoy() {
    let cheese = 0
    console.log(cheese)
    
    return {
        increment: function() {
            cheese++;
            if (cheese >= 10) {
                cheese = 0; // Reset the counter
            }
            console.log(cheese); // Print the current value of the counter
            return cheese;
        }
    };
}

const counter = goldBoy(); // Initialize the counter
counter.increment(); // Call the increment method
counter.increment(); // Call the increment method again
console.groupEnd();

console.group('exercise 9');



x = 32;

function hollowMoon() {
    let x = 23;
    console.log(x);

    function locoMod() {
        massForm = 56;
        console.log(massForm);

        // let massForm = 65; // This line is commented out as it is not needed
        return {
            x
        };
    }

    return locoMod; // Return the locoMod function
}

const myFunction = hollowMoon(); // Call hollowMoon and store the returned function
console.log(myFunction()); // Call the returned function and log its return value