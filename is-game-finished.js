
function IsGameFinished(){
  console.log("Tiles Completed: " + tilesCompleted);
  if(tilesCompleted >= 8){
    document.dispatchEvent(gameCompletedEvent);
    console.log("Game completed event dispatched");
  }
}
