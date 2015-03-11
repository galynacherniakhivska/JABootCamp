var STATE_NULL = 0;
var STATE_TITLE = 1;
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
				"\nDo not forget to press ENTER to proceed after each answer given\n");
}

function onUserInput(input) {

	input = normalizeInput (input);

	if (input == 'exit') {
		process.exit();
	} 

	if (input == 'restart') {
		console.log ('Please, type a title of your favorite book');
		state = STATE_NULL;
	}
	
	switch (state) {
		case STATE_NULL:
			//favBook.title = input;
			//console.log (favBook.title); // 
			state = STATE_TITLE; 
			break;
		case STATE_TITLE:
			favBook.title = input;
			//console.log (favBook.title);
			state = STATE_NUM_PAGES;
			console.log("Please, enter the number of pages");
		break;
		case STATE_NUM_PAGES:
			favBook.numPages = +input;
			//console.log(favBook.title, favBook.numPages);
			console.log ("Is this book interesting? (Yes/No)");
			state = STATE_IS_INTERESTING;			
		break;
		case STATE_IS_INTERESTING: 
			favBook.isInteresting = input.toLowerCase ();
			if (favBook.isInteresting == 'yes' || favBook.isInteresting == 'no') {
			state = STATE_AUTHOR;
			console.log ("Please, name the Author of the book");}
			// possibly break does not fit
			else {
			console.log ('Opps! Seems we are not able to recognize your input. Just answer a qusestion: Is this book interesting? (Yes/No)"');
			return favBook.isInteresting = input.toLowerCase ();					
		} 
		break
			//console.log(favBook.isInteresting);
		
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
			"\n The Book was bublished in:", favBook.attributes.yearPublished + " year",
			"\n\n If you want to re-enter the information or add information about another book - please type 'restart'");
		    break;	

		}
}


function normalizeInput(input) {
	return input.trim();
}

openUserInput();
printBanner();
