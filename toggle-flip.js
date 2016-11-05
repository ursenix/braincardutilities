function toggleFlip(tile){

  if(!firstClicked){
    gameStartedTime = new Date().getTime();
    firstClicked = true;
    console.log("Game started at " + gameStartedTime);
  }

  //console.log("--------------------");

  //console.log("Last clicked img data: " + lastClickedImgData);
  //console.log("last clicked img id:" + lastClickedImgId);

  if(lastClickedImgId){
    var lastClickedTile = document.getElementById(lastClickedImgId);

  }

  let isTileMatched = false;

  //console.log("Is Tile Matched");
  //console.log(isTileMatched);

  var backImgageId = tile.id.substring(0,2);
  //console.log(backImgageId);

  let backImage = document.getElementById(backImgageId);
  //console.log(backImage);

  let imgData = backImage.getAttributeNode("data-img-pair");
  //console.log("imgData: " + imgData.value);

  imgData = imgData.value.replace('.jpg', '').replace('images/', '');



  imagesOpenedCount++;

  if(isTileMatching(imgData)){
    //console.log("Tiles Matching");
    isTileMatched = true;
  }
  else {
    //console.log("Tiles NOT Matching");
    // if(imagesOpenedCount == 0){
    //   tile.src = 'images/x.jpg';
    //   if(lastClickedTile){
    //     lastClickedTile.src = 'images/x.jpg';
    //   }
    //   //hideMe(lastClickedImgData);
    // }
    isTileMatched = false;
  }

  if(backImage){
    //console.log(backImage.src);

  tile.src = backImage.src;



  // setTimeout(function(){
  //   tile.src = 'images/x.jpg';
  // }, 1000);

  //console.log("imagesOpenedCount: " + imagesOpenedCount);

  if(imagesOpenedCount == 2){
    //console.log("Images opened count is 2");
    setTimeout(function(){
    if(!isTileMatched){
      tile.src = 'images/x.jpg';
      //console.log("Last clicked image id (inside): " + lastClickedImgId);
      if(lastClickedTile){
        lastClickedTile.src = 'images/x.jpg';
      }
      lastClickedImgId = '';
    }
  }, 350);

    if(isTileMatched){
      tile.onclick = function(){return false;};
      lastClickedTile.onclick = function(){return false;};
      tilesCompleted++;

    }

    imagesOpenedCount=0;
    //lastClickedImgId = '';
  }



  if(imagesOpenedCount == 1){
    lastClickedImgId = tile.id;
  }



  }

  lastClickedImgData = imgData;

  if(tilesCompleted >= 8){
    document.dispatchEvent(gameCompletedEvent);
    console.log("Game completed event dispatched");
  }
  //console.log("Last clicked img data: " + lastClickedImgData);
  //console.log("last clicked img id:" + lastClickedImgId);

  //console.log(tile.style);
  //var style = tile.getAttribute(style);
  //tile.style.classList.toggle("flip");
  //tile.classList.toggle("flip");
  //style = "flip";
  //console.log(style);
  //document.querySelector(tileId).classList.toggle("flip");
  //var images = document.querySelectorAll("img");
}

document.addEventListener("gameCompleted", function(){
  console.log("Game Completed");
  gameCompletedTime = new Date().getTime();
  let durationOfTheGame = gameCompletedTime - gameStartedTime; // returns milli seconds

  let durationOfTheGameInMins = (durationOfTheGame / 1000) / 60;
  setTimeout(function(){
    alert("Game completed in " + durationOfTheGameInMins + " mins");
  },500)

}, false);
