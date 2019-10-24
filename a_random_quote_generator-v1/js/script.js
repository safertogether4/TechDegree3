/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {quote: "Cant heal what you don't reveal", source: "Jay-Z", year: 2018, citation: "4:44"},
  {quote: "He didn't work a double, he spent the night at her house", source: "Joe Budden", year: 2019, citation: "JB Podcast"},
  {quote: "Be a lighthouse to the harbor of ships", source: "Michelle DeSimone", year: 2018},
  {quote: "If you are silent about your pain, they will kill you and say that you enjoyed it", source: "Zora Neal Hurston"},
  {quote: "I saw things, I imagined", source: "Solange"}
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
var ranNumber;
var ranQuote;
function getRandomQuote(){
  ranNumber = Math.floor(Math.random() * 5);
  ranQuote = quotes[ranNumber]
  return ;
  }
getRandomQuote()





/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

var HTMLq = '';

function printQuote(){
// Add the quote to the string  
HTMLq = '<p class="quote">' + ranQuote.quote + '</p>';
// Add the Source to the quote HTML variable
HTMLq += '<p class="source"> ' + ranQuote.source ;
// Add the year  to the quote HTML variable
HTMLq += '<span class="year"> ' + ranQuote.year + ' </span>' ;
// Add the citation  to the quote HTML variable    
HTMLq += '<span class="citation"> ' + ranQuote.citation + ' </span>' ;
// Add the closing HTML tag   
HTMLq += ' </p>';
//Print the quote on the screen as it asscoiates to the index tag
document.getElementById('quote-box').innerHTML= HTMLq
        }    

//prints the quote
printQuote();







/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.