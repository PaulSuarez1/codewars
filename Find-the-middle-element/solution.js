

var gimme = function (inputArray) {
    if (inputArray[0] < inputArray[1] && inputArray[1] < inputArray[2]) {
    return 1;
    
    } else if (inputArray[1] < inputArray[2] && inputArray[2] < inputArray[0]) {
    return 2;
    
    } else if (inputArray[2] < inputArray[0] && inputArray[0] < inputArray[1]) {
    return 0;
    
    } else if (inputArray[0] > inputArray[1] && inputArray[1] > inputArray[2]) {
    return 1;
    
    } else if (inputArray[1] > inputArray[2] && inputArray[2] > inputArray[0]) {
    return 2;
    
    } else if (inputArray[2] > inputArray[0] && inputArray[0] > inputArray[1]) {
    return 0;
    
    }
  };

  // lol