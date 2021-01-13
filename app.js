var buttonColours=["red", "blue", "green", "yellow"]
var gamePattern=[];
var userClickedPattern=[]; 
var level=0,clicks=-1;  
var userChosenColour;

$("h1").text("press A to start");

$(document).keypress(function(event)
{   
    if(level===0 &&( event.key === "A" || event.key === "a"))
        nextSequece();
});

function checkAnswer()
{
    if(gamePattern[clicks]!=userChosenColour)
 {
    
    $(document).css("background-color","red");
    playSound("wrong");
    setTimeout(function () 
    {
        $(document).css("background-color","blue");
    },200);
    level=0;
    gamePattern.length=0;
    setTimeout(function () 
    {
        $("h1").text("press A to start");
        clicks=0;
    },1000);
 }
 else
 {
     clicks++;
 }
 if(clicks==level)
 {
     setTimeout(nextSequece(),1000);
 }

}

$(".btn").click(function()
{
    if(level!=0 && level>clicks)
 {userChosenColour=$(this).attr("id");
 userClickedPattern.push(userChosenColour);
 playSound(userChosenColour);
 animatePress(userChosenColour);
 checkAnswer();
//  $("#"+userChosenColour).fadeOut(100).fadeIn(100);
 }
});

function nextSequece()
{
    level++;
    clicks=0;
    $("h1").text("Level "+level);
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour=buttonColours[randomNumber];
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
}


function playSound(name)
{
    var p=new Audio("sounds/"+name+".mp3");
    p.play();
}

function animatePress(currentColor)
{
    
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}
