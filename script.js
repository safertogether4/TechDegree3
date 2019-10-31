/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Below is an Array of quote
***/
var quotes = [
  {quote: "Cant heal what you don't reveal", source: "Jay-Z", year: 2018, citation: "4:44"},
  {quote: "He didn't work a double, he spent the night at her house", source: "Joe Budden", year: 2019, citation: "JB Podcast"},
  {quote: "Be a lighthouse to the harbor of ships", source: "Michelle DeSimone", year: 2018},
  {quote: "If you are silent about your pain, they will kill you and say that you enjoyed it", source: "Zora Neal Hurston"},
  {quote: "I saw things, I imagined", source: "Solange"}
];



/***
  A Random number dictates the randome quote selection
***/
var ranQuote; 
function getRandomQuote(){
  var ranNumber;
  ranNumber = Math.floor(Math.random() * 5);
  ranQuote = quotes[ranNumber];
  console.log(ranQuote)
  return ranQuote;
  
  }







/***
  The Random Quote is generated and store in a variable. That variable then displays the quote, and source, 
  but conditionally displays the year and citation.
***/



function printQuote(){
var HTMLq = getRandomQuote();  
// Add the quote to the string  
HTMLq = '<p class="quote">' + ranQuote.quote + '</p>';
// Add the Source to the quote HTML variable
HTMLq += '<p class="source"> ' + ranQuote.source ;
// Add the year  to the quote HTML variable
if (ranQuote.year){
  HTMLq += '<span class="year"> ' + ranQuote.year + ' </span>' ;
}{} // Add the citation  to the quote HTML variable
if (ranQuote.citation)
  {HTMLq += '<span class="citation"> ' + ranQuote.citation + ' </span>' ;
}{}
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