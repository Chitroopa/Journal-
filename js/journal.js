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
