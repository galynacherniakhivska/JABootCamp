var text = "It was a hard days night";

var counter = 0;
var letterCount = 0;
var threeOrLessLettersWordCounter = 0;
var fourLettersWordCounter = 0;
var fiveOrMoreLettersWordCounter = 0;

while (counter < text.length) {

	if (text[counter] != " ") {
        letterCount++; 
       
        if (letterCount >= 5) {
     		fiveOrMoreLettersWordCounter++;
     	}        
     }

    if (text[counter] == " ") {    	
   		 
   		if (letterCount <= 3) {
     		threeOrLessLettersWordCounter++;
     	}

     	if (letterCount == 4) {
     		fourLettersWordCounter++;
     	}     	
     	
     	letterCount = 0;
     	
     }
    
    counter++;
}    	
  	    	

console.log (threeOrLessLettersWordCounter, "word(s) with 3 or less letters");
console.log (fourLettersWordCounter, "word(s) with 4 or less letters");
console.log (fiveOrMoreLettersWordCounter, "word(s) with 5 or more letters");

