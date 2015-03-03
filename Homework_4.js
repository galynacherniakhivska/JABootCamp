var SATATE_TITLE = 1;
var STATE_NUM_PAGES = 2;
var STATE_IS_INTERESTING = 3;
var STATE_AUTHOR = 4;
var STATE_YEAR_PUBLISHED = 5;

var state = 1;
var favBook = {

	attributes: {},
 
 };

function openUserInput() {
	process.stdin.setEncoding('utf-8');
	process.stdin.resume();
	process.stdin.on('data', onUserInput);	
}

function printBanner() {console.log ("\n****************************");
	console.log ("Hello, welcome to Book Worm!");
	console.log ("****************************");
	console.log ("\nFeel free to type 'exit' to quit",
				"\nTo continue, please, type a title of your favorite book",
				"\nDo not forget to press ENTER to proceed after each answer given");
}

function onUserInput(input) {

	input = normalizeInput (input)
	
	if (input == "exit") {
		process.exit();
	} 
	
	switch (state) {
		case SATATE_TITLE:
			favBook.title = input;
			state = STATE_NUM_PAGES;
			console.log("Please, enter the number of pages");
		break;
		case STATE_NUM_PAGES:
			favBook.numPages = +input;
			state = STATE_IS_INTERESTING;
			//console.log(favBook.title, favBook.numPages);
			console.log ("Is this book interesting? (Yes/No)");
		break;
		case STATE_IS_INTERESTING: 
		favBook.isInteresting = input.toLowerCase ();
		state = STATE_AUTHOR;
		//console.log(favBook.isInteresting);
		console.log ("Please, name the Author of the book");
		break;
		case STATE_AUTHOR:
		favBook.attributes.author = input.toLowerCase ();
		state = STATE_YEAR_PUBLISHED;
		//console.log (favBook.attributes.author);
		console.log ("Please, specify the year book was published");
		break;
		case STATE_YEAR_PUBLISHED:
		favBook.attributes.yearPublished = +input;
		//console.log (favBook.attributes.yearPublished);
		console.log ("Well done! Please, check if all the information about the book is stored correctly:", 
			"\n The Book Title Is:", favBook.title, 
			"\n The Number Of Pages is:", favBook.numPages, 
			"\n The Book Is Interesting:", favBook.isInteresting, 
			"\n The Book Author is:", favBook.attributes.author,
			"\n The Book was bublished in:", favBook.attributes.yearPublished + " year");
		
		}	
}
function normalizeInput(input) {
	return input.trim();
}

openUserInput();
printBanner();
