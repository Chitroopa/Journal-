(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(name) {
  this.name = name;
}

Journal.prototype.countVowels = function(subject) {
    return subject.match(/[aeiou]/gi).length;
}

Journal.prototype.countConsonants = function(subject) {
    return subject.match(/[bcdfghjklmnpqrstvxzwy]/gi).length;
}

exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function(){
 $("#formone").submit(function(event){
   event.preventDefault();
   var titleInput = $("#title").val();
   var paraInput = $("#para").val();
   var newJournal = new Journal("test");
   var titleOutputVowels = newJournal.countVowels(titleInput);
   var paraOutputVowels = newJournal.countVowels(paraInput);
   var titleOutputConsonants = newJournal.countConsonants(titleInput);
   var paraOutputConsonants = newJournal.countConsonants(paraInput);
  $("#tvowel").text(titleOutputVowels);
  $("#tconsonants").text(titleOutputConsonants);
  $("#cvowel").text(paraOutputVowels);
  $("#cconsonants").text(paraOutputConsonants);
  $(".result").show();
 });
});

},{"./../js/journal.js":1}]},{},[2]);
