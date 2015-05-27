"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var foo = function(bar) {
  return false;
};

var startsWithVowel = function(text){
  var regex = new RegExp("[aeiouAEIOU]");
  var temp = text.substring(0, 1).match(regex);
  return (temp !== null && temp.length === 1);
};

var addAy = function(text) {
  if (startsWithVowel(text)){
    return text = text + "ay";
  } else {
    consAddAy(text)
  }
}

var consAddAy = function(text) {
  var regex = new RegExp("^[^aeiou]*");
  var cons = text.match(regex)[0];
  text = text.slice(cons.length);
  return text + cons + 'ay';
}
