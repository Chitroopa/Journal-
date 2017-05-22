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
   console.log("titleOutputVowels", titleOutputVowels);
   console.log("paraOutputVowels", paraOutputVowels);
   console.log("titleOutputConsonants", titleOutputConsonants);
   console.log("paraOutputConsonants", paraOutputConsonants);

 });
});
