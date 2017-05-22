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
