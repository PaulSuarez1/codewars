function capitalize(s){

    var evenArray = s.split('');
    var oddArray = s.split('');
    
    for (var i in evenArray) {
      if (i % 2 === 0) {
      var letter = evenArray[i];
      var evenArrayUpperCase = letter.toUpperCase();
      evenArray.splice(i, 1, evenArrayUpperCase);
      
      } else {
      var letter = oddArray[i];
      var oddArrayUpperCase = letter.toUpperCase();
      oddArray.splice(i, 1, oddArrayUpperCase);
      }
    }
    var array = [];
    array.push(evenArray.join(''));
    array.push(oddArray.join(''));
      return array;
    };