'use strict';

let lastClickedTileId = '';

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


function toggleFlip(tile){

  console.log(tile);

  if(lastClickedTileId != ''){
    hideMe(lastClickedTileId);
  }

  var backImgageId = tile.id.substring(0,2);
  console.log(backImgageId);

  let backImage = document.getElementById(backImgageId);
  console.log(backImage);

  //let imgSrc = tile.getAttributeNode("data-img-src");
  //console.log(imgSrc);

  if(backImage){
    console.log(backImage.src);

    tile.src = backImage.src;

    setTimeout(function(){
      tile.src = 'images/x.jpg';
    }, 1000);

  }

  lastClickedTileId = tile.id;


  //console.log(tile.style);
  //var style = tile.getAttribute(style);
  //tile.style.classList.toggle("flip");
  //tile.classList.toggle("flip");
  //style = "flip";
  //console.log(style);
  //document.querySelector(tileId).classList.toggle("flip");
  //var images = document.querySelectorAll("img");
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

      console.log(img);

      if(img){
        img.src = matrixArray[i][j];
        img.width = 150;
        img.height = 150;
        img.style = 'display: none;';
        //img.addEventListener("click", toggleFlip(img));
        img.onclick = function(img){toggleFlip(this)};
        //console.log(window.addEventListener);
        // if(window.addEventListener){
        //
        // }
        // else {
        //   img.attachEvent("onclick", toggleFlip(img));
        // }
        //img[window.addEventListener ? 'addEventListener' : 'attachEvent']( window.addEventListener ? 'click' : 'onclick', toggleFlip(img), false);
        //console.log(img);


      }

      var xImageId = i.toString() + j.toString() + 'x';
      var xImg = document.getElementById(xImageId);

      console.log(xImg);

      if(xImg){
        xImg.src = 'images/x.jpg';
        xImg.width = 150;
        xImg.height = 150;
        //xImg.addEventListener("click", toggleFlip(xImg));
        xImg.onclick = function(xImg){toggleFlip(this);}
        //xImg.addEventListener("onclick", toggleFlip(xImg));
        // if(window.addEventListener){
        //
        //   console.log(xImg);
        // }
        // else {
        //   xImg.attachEvent("onclick", toggleFlip(xImg));
        // }
        //xImg[window.addEventListener ? 'addEventListener' : 'attachEvent']( window.addEventListener ? 'click' : 'onclick', toggleFlip(xImg), false);

        /*
        let imgSrcAttribute = document.createAttribute("data-img-pair");
        imgSrcAttribute.value = matrixArray[i][j];
        img.setAttributeNode(imgSrcAttribute);
        console.log(img);
        */

      }


    }
  }

}

function hideMe(id){
  if(id){
    var tile = document.getElementById(id);

    if(tile){
      tile.src = 'images/x.jpg';
    }
  }
}

function isTileMatching(id){
  if(id){
    if(id == getParing(lastClickedTileId)){
      return true;
    }
    else {
      return false;
    }
  }
}


function getParing(id){
  let pairedId = '';
  switch(id){
    case '00':
      pairedId = '08';
      break;
    case '01':
      pairedId = '09';
      break;
    case '02':
      pairedId = '10';
      break;
    case '03':
      pairedId = '11';
      break;
    case '04':
      pairedId = '12';
      break;
    case '05':
      pairedId = '13';
      break;
    case '06':
      pairedId = '14';
      break;
    case '07':
        pairedId = '15';
        break;
    default:
        pairedId = '';
  }

  return pairedId;
}
