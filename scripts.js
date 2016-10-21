$(document).ready(function(){

  console.log("Hello there.");
  var questionOne = prompt("Do you know your name? Type yes or no.");

  questionOne = questionOne.toLowerCase();

  if(questionOne==="yes"){
    var questionTwo = prompt("What is your name?");
    if(questionTwo!=null){
      alert("Hello " + questionTwo + ".");
      alert("Well, we'll just call you Project X for now.");
    }
    else if(questionOne==="no"){
      alert(x="Well, we'll just call you Project X for now.");
    }
  }

alert("I'm sure you're very confused about what's going on.");
alert("You've just awoken in the year 2050 after being in cryosleep for the past 34 years.");

var partTwo = function(){
  alert("A lot has happened in the past 34 years, Project X.");
  alert("For starters, Planet Earth has been destroyed and our civilization has moved to another planet.");
  alert("Through survival of the fittest, our people have begun to adapt to this new world.");
  alert("New forms of technology have played a pivotal role in our society.");
  alert("I know this is a lot to process all at once.")
  var questionFour = prompt(" What would you like to do? Type [1] if you'd like to explore this new planet. Type [2] if you'd like to learn about these new forms of technology. Type [3] if this is too overwhelming and you'd like to be left alone.");

  if(questionFour==="1"){
    alert("Alright, here's your space suit.");
    alert("Be careful out there.");
    self.location = "https://67.media.tumblr.com/dd24ff2ee928defcc705c19f46ffe933/tumblr_obnne3bUA21qc7q18o1_400.gif"
  }
  if(questionFour==="2"){
    alert("Wonderful.");
    alert("There is so much to teach you, but I suppose we'll start with the basics.");
    alert("Our progress as a civilization has relied heavily on things like virtual reality, IOT platforms, and machine learning.");
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
    alert("I see...");
    var questionFive = prompt("Would you like me to come back another time, Project X?");
  }
  if(questionFive==="yes"){
    alert("Alright, rest easy.");
    self.location = "https://67.media.tumblr.com/b899e9b349cdb21b5fbc1bcb142f9505/tumblr_o3f7ecqVgH1rxx1vlo1_500.gif"
  }
  if(questionFive==="no"){
    alert("Then I'm not so sure what to do with you, Project X.")
    var questionSix = prompt("Type [1] if you want to venture on your own. Type [2] if you want me to put you back into cryosleep and wake you up in a few more years.");
  }
  if(questionSix==="1"){
    alert("If you insist.");
    alert("Good luck out there.");
    window.location = "https://www.youtube.com/watch?v=vT7vD8uAGEQ"
  }
  if(questionSix==="2"){
    alert("Until next time.");
    location.reload();
  }
  return
};

var questionThree = prompt("Do you need a moment to collect yourself, Project X? Yes or no.");
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
