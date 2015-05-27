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

var add_ay = function(text) {
  var regex = new RegExp("[aeiouAEIOU]");
  var temp = text.substring(0, 1).match(regex);
  if (temp !== null && temp.length === 1) {
    return text = text + "ay";
  } else {
    return text;
  }
}
