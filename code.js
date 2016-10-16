'use strict';

function GetRandomNumberArray() {

  var generatedNumbers = [];
  var canContinue = true;

  for(var i = 0; canContinue ; i++){

    var randomNo = GetRandomNumber(0, 16);
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



        if(generatedRandomNumbers[incrementer] <= 9){
            twoDimensionArray[i][j] = 'images/0' + generatedRandomNumbers[incrementer] + '.jpg'; // GetRandomImage();
        }
        else {
          twoDimensionArray[i][j] = 'images/' + generatedRandomNumbers[incrementer] + '.jpg'; // GetRandomImage();
        }


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
        img.style = 'visibility: hidden;';
      }

    }
  }

}


function toggleFlip(tile){
  console.log(tile);
  console.log(tile.id);

  var backImgageId = tile.id.substring(0,2);
  console.log(tile.id.substring(0,2));
  tile.src = 'images/' + backImgageId + '.jpg';

  setTimeout(function(){
    tile.src = 'images/x.jpg';
  }, 700);

  //console.log(tile.style);
  //var style = tile.getAttribute(style);
  //tile.style.classList.toggle("flip");
  //tile.classList.toggle("flip");
  //style = "flip";
  //console.log(style);
  //document.querySelector(tileId).classList.toggle("flip");
  //var images = document.querySelectorAll("img");
}
