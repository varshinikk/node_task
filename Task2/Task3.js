goToHome(makeDinner);
goToHome(textMe);

function makeDinner(){
  console.log("Food is ready");
}

function textMe(){
  console.log("Sent a message to Server");
}
function goToHome(goNext){
    goNext();
}