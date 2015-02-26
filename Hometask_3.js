var bookOne = {
	name: "Shantaram",
	amountOfPages: 500,
	author: "GD Roberts",
	genre: "fiction",
	isInteresting: true,
	look: {
		coverColor: "green",
		coverType: "hard",
		withAuthorPhoto: false
	},
	printLookBookSummary: function (){
		console.log ("The book has", this.look.coverColor, "and", this.look.coverType, "cover type");
	}
};

var bookTwo = {
	name: "Bridgit Jones Diary",
	amountOfPages: 600,
	author: "Helen Feedling",
	genre: "novel",
	isInteresting: true,
	look: {
		coverColor: "white",
		coverType: "soft",
		withAuthorPhoto: true
	},
}
	console.log ("We have following books represented:");
	console.log (bookOne.name);
	bookOne.printLookBookSummary ();
	console.log(bookTwo.name);

	function printBiggerBook () {
		if (bookOne.amountOfPages>bookTwo.amountOfPages) {
			return bookOne.name;
		}
		else {
			return bookTwo.name;
		}
			}

printBiggerBook (bookOne.amountOfPages, bookTwo.amountOfPages);

var biggerBook = "The bigger book is " + printBiggerBook (bookOne.amountOfPages, bookTwo.amountOfPages);
console.log (biggerBook);





	/*makeSound: function (){
		console.log("Beep");
	},
	useLights: function (){
		console.log("Blink");
	}
};

//console.log(car.internals.engine);
car.internals.engine++;
console.log(car.internals.engine);*/
