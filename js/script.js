"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')

    $("#pig-latin-form").submit(function(event){

      var sentenceInput = $("#sentence-input").val();
      var newSentence = translate(sentenceInput);

      $("#result h4").text(newSentence);

      event.preventDefault()
    });



});

//raw js
var foo = function(bar) {
  return false;
};

var translate = function(text) {
  var sentanceArray = text.split(" ");
  var returnArray = [];
  sentanceArray.forEach(function(word) {
    var newWord = addAy(word);
    returnArray.push(newWord);
  });
  return returnArray.join(" ");
}

var startsWithVowel = function(text){
  var regex = new RegExp("[aeiouAEIOU]");
  var temp = text.substring(0, 1).match(regex);
  return (temp !== null && temp.length === 1);
};

var addAy = function(text) {
  if (startsWithVowel(text)){
    return text = text + "ay";
  } else {
    return consAddAy(text)
  }
}

var consAddAy = function(text) {
  var regex = new RegExp("^(qu|[bcdfghjklmnpqrstvwxz])*");

  if (text.slice(0,1).toLowerCase() === 'y') {
    regex = new RegExp("^(qu|[bcdfghjklmnpqrstvwxyz])*");
  }

  var cons = text.match(regex)[0];
  text = text.slice(cons.length);
  return text + cons + 'ay';
}
