'use strict';

function GetRandomNumberArray() {

  var generatedNumbers = [];
  var canContinue = true;

  for(var i = 0; canContinue ; i++){

    var randomNo = GetRandomNumber(1, 17);
    var foundValue = (generatedNumbers.indexOf(randomNo) != -1);

    if(!foundValue)
      generatedNumbers.push(randomNo);

    if(generatedNumbers.length == 16)
      canContinue = false;
  }

  return generatedNumbers;
}

function GetRandomNumber(min, max) {
  var randomNo = Math.random() * (max - min) + min;
  return Math.floor(randomNo);
}

function GetMatrixArray(matrixSize){

    //Dirty check
    if(matrixSize == 0)
      return false;

    // Limiting the max size
    if(matrixSize != 4)
      return false;

    //var twoDimensionArray = [[],[]];
    var twoDimensionArray = [];

    for(var k = 0; k < matrixSize; k++){
      twoDimensionArray[k] = [];
    }

    var incrementer = 0;

    var generatedRandomNumbers = GetRandomNumberArray();

    for(var i = 0; i < matrixSize; i++){

      for(var j = 0; j < matrixSize; j++){

        twoDimensionArray[i][j] = 'images/' + generatedRandomNumbers[incrementer] + '.jpg'; // GetRandomImage();

        if(incrementer <= 16)
          incrementer++;
      }
    }

    return twoDimensionArray;
}


function DisplayTheImages(matrixArray){

  if(matrixArray === undefined)
    return false;

  if(matrixArray.length != 4)
    return false;

  for(var i = 0; i < matrixArray.length; i++){
    for(var j = 0; j < matrixArray.length; j++){

      var imageName = i.toString() + j.toString();

      var img = document.getElementById(imageName);

      if(img !== undefined){
        img.src = matrixArray[i][j];
        img.width = 150;
        img.height = 150;
      }

    }
  }

}
