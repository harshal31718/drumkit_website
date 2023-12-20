//buttonPress
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playSoundOnKey(this.innerHTML);
    addAnimation(this.innerHTML);
  });
}

//keyboardPress
document.addEventListener("keydown", function (event) {
  playSoundOnKey(event.key);
  addAnimation(event.key);
});

function playSoundOnKey(key) {
    switch (key) {
      case "w":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
  
      default:
        console.log(text);
    }
  }
  
  function addAnimation(key){
    var currKey=document.querySelector("."+key);
    currKey.classList.add("pressed");
    setTimeout(function (){
        currKey.classList.remove("pressed");
    },100)
  }
  
