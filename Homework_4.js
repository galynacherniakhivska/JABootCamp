var favBook = {

};

var state = 1;

function openUserInput () {
process.stdin.setEncoding ('utf-8');
process.stdin.resume();
process.stdin.on ('data', onUserInput)
}

function printBanner () {
console.log ("****************************");
console.log ("Hello, welcome to Book Worm!");
console.log ("****************************");
console.log ("Feel free to type 'exit' to quit");
console.log ("To continue, please, type a title of your favorite book");
}

function onUserInput (input) {
	input = normalizeInput(input);

	if (input=="exit") {
		console.log ("should exit");
	} else {
		if (state == 1) {//title
			favBook.title = input;
			state = 2;
			console.log ("Please, enter the number of pages");
			}
			else if (state == 2) {//# of pages
				favBook.numPages = +input;
			}
		}		
		
		console.log (favBook.title, favBook.numPages);
	}	
}

function normalizeInput (input) {
	return input.trim ();
}
 onUserInput ();
 printBanner ();
