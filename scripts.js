$(document).ready(function(){

  console.log("Hello there.");
  var questionOne = prompt("Do you like spam? Type yes or no.");

  questionOne = questionOne.toLowerCase();

  if(questionOne==="yes"){
    var questionTwo = prompt("What do you like on your spam?");
    if(questionTwo!=null){
      alert("Wow i like spam and " + questionTwo + " too!");
    }
    else if(questionOne==="no"){
      alert(x="Well, you're really missing out.");
    }
  }

alert("Anyhow, i love spam with everything, however i don't actually have any with me at the moment");
alert("I'm going to give you chicken instead");
alert("You look quite shaken")
alert("I know it was quite overwhelming how i just appeared and offered you a variety of meat");
alert("But aye, when life gives you lemons you take them right?")

var partTwo = function(){
  alert("Chicken meat gives me wings");
  alert("You'd think redbull does the same...");
  alert("But it's just a rumour, you actually need to eat chicken first");
  var questionFour = prompt(" Would you like to see if you could fly after eating my Chicken and chasing it down with some redbull? Type [1] If yes Type [2] If no Type [3] If you don't trust me.");

  if(questionFour==="1"){
    alert("Alright, here's some freshly fried chicken, redbull... eat and drink them together");
    alert("You should grow some wings any secon...");
    self.location = "http://orig07.deviantart.net/ad66/f/2013/330/f/2/red_bull_gives_you_wings_by_allygal123-d6vs4hw.gif"
  }
  if(questionFour==="2"){
    alert("What why?");
    alert("You only like spam? Common, just try some of my chicken");
    alert("Flying is really fun, you'll learn how your wings work in no time");
    var questionSeven = prompt("What would you like to learn more about? Type [1] for Virtual Reality, [2] for IOT, and [3] for Machine Learning.");
  }
  if(questionSeven==="1"){
    alert("Virtual Reality is a computer-generated 3D environment that surrounds a user and responds to that individual’s actions in a natural way, usually through immersive head-mounted displays and motion tracking.")
    alert("Sounds interesting, huh?")
    alert("The options are truly endless, especially when thinking about how we can use VR to drive our civilization forward.")
    alert("That's why we need you, Project X.")
    alert("Maybe you could help us understand the true potential of this technology.")
    alert("In the meantime, here's a resource so you can understand Virtual Reality even better.")
    window.location = "https://www.youtube.com/watch?v=i4Zt3JZejbg"
  }
  if(questionSeven==="2"){
    alert("The Internet of Things is an entire suite of resources that are connected, controlled, and analyzed on one network. These platforms exist within a carefully integrated relationship between hardware and software.")
    alert("We're not in Kansas anymore, Project X, so it's important that we find innovative ways to manage our devices here on this new planet.")
    alert("Here's a helpful resource to understand the possibilities of IOT.")
    window.location = "https://www.youtube.com/watch?v=QSIPNhOiMoE"
  }
  if(questionSeven==="3"){
    alert("Machine Learning is artificial intelligence that provides computers with the ability to learn without being explicitly programmed. It focuses on the development of computer programs that can teach themselves to grow and change when exposed to new data.")
    alert("While being on this new planet is an accomplishment in itself, the human race still has limitations.")
    alert("If we properly utilize Machine Learning, we could we could unlock a whole world of possibilities.")
    window.location = "https://www.youtube.com/watch?v=WXHM_i-fgGo"
  }

  if(questionFour==="3"){
    alert("I see... Well i'd be lying if i said i wasn't hurt; i'm an honest man");
    var questionFive = prompt("Would you like me to come back with spam another time?");
  }
  if(questionFive==="yes"){
    alert("Alright, until then, enjoy your day.");
    self.location = "http://graphics.desivalley.com/wp-content/uploads/2010/09/enjoy-commentsdesivalleycom-2.gif"
  }
  if(questionFive==="no"){
    alert("Then I'm not so sure what to do with you.")
    var questionSix = prompt("Type [1] if you think you already can fly. Type [2] if you want me to leave you alone.");
  }
  if(questionSix==="1"){
    alert("If you insist.");
    alert("Good luck.");
    window.location = "https://neatspartan.files.wordpress.com/2015/05/stick-man-jumping-over-drop1.gif"
  }
  if(questionSix==="2"){
    alert("Until next time.");
    location.reload();
  }
  return
};

var questionThree = prompt("Do you need a moment to collect yourself? Yes or no.");
questionThree = questionThree.toLowerCase();
if(questionThree==="yes"){
  setTimeout(function(){
    alert("Alright, are you ready to proceed now?");
    partTwo();
  }, 2000);
}
else{
  partTwo();
}

});
