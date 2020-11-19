// If the player dies, show this scene
const death = function(cause) {
  // Print their cause of death, and then a final message
  console.log(cause);
  console.log("\nGood try. Play Again?");
};
//adding player inventory and health
const inventory = ["clothes", "apple"];
const player = {health: 10};
const testArea = [];


// The final scene, the player has almost won!
const goldRoom = function() {
  // What does the scene look like?
  console.log("\nThis room has a big pile of gold.");

  // Ask for user input, then convert the answer to a number value
  const choice = Number(prompt("\nHow much do you take?\n"));

  // Choice couldn't be converted to a number, so they typed a bad answer
  if (Number.isNaN(choice)) {
    // Stop this scene and send them to the death scene
    return death("Jeeze, learn to type a number...");
  }

  // Choice was over 100, which is far too greedy
  if (choice > 100) {
    // Stop this scene and send them to the death scene
    return death("You took too much and couldn't carry it, unable to escape!");
  }

  // The player made it all the way through the game
  console.log("Hurray! You Win!!!");
};


// Uh oh, a dangerous scene. What will they do?!
const bearRoom = function() {
  // What does the scene look like?
  console.log("\nThere is a bear in here.");
  console.log("It's sitting in front of another door eating from a pot of honey.");
  console.log("\nHow are you going to move the bear?");

  // Create a boolean variable to track where the bear
  let bearMoved = false;

  // This looks like an infinite loop, but it's not because of the return statements
  while (true) {
    // Ask for input
    const choice = prompt("");

    // Create branches for each choice
    if (choice === "take honey") {
      // Stop this scene and send them to the death scene
      return death("Bad call. The angry bear slaps your face off.");
    } else if (choice === "taunt bear") {
      if (!bearMoved) {
        // First time taunting the bear
        console.log("The bear moved, you can go through the door now.");
        bearMoved = true;
      } else {
        // Second time taunting the bear
        return death("The bear get's pissed and chews your leg off.");
      }
    } else if (bearMoved && choice === "open door") {
      // Stop this scene and send them to the gold room
      return goldRoom();
    } else {
      // Unknown input, run the loop again
      console.log("I don't know what that means.");
    }
  }
};


//create function for controlRoom
const controlRoom = function() {
  //description of enviorment
  console.log("\nYou take the path into another small room.");
  console.log("Inside the room you find a bunch of monitors and a large keyboard.");
  console.log("On the monitors you can see different rooms.");
  console.log("One of them stick out as you see the statue room you were just in.");
  console.log("A chair sits in front of the keyboard its back towards you.");
  console.log("As you approach the chair it turns to reveal a dog with a headset sitting in the chair.");
  console.log("\nWhat do you do?\n");

  //get user input
  const choice = prompt("");
  //if stament for choices
  if (choice === "pet dog") {
    console.log("The dog barks happily and wags his tail.");
    console.log("The dog then presses a button  on the keyboard and a door opens.");
    console.log("You enter the door and find yourself outside.");
    console.log("The dog follows you out, and the door closes.");
    console.log("Congratulations, you have survived and made a friend!");
  }else if (choice === "hit dog") {
    console.log("The dog bites you and hits a button on the keyboard.");
    return death(`The floor disappears and you fall into acid. Never hit dogs jerk.`);
  }else if (choice === "yell at dog") {
    console.log("The dog looks mad and presses a button on the keyboard.");
    return death("The floor dissappears and you fall into acid.")
  }else {
    console.log("After some time the dog presses a button on the keyboard.");
    console.log("A door opens and you decide to enter.")
   //return to gold room
    return goldRoom();
  }
}

//create function for questionRoom
const questionRoom = function() {
  //description of surrondings
  console.log("You follow the main path and reach a small room.");
  console.log("The room appears to be empty besides a large statue on one wall.");
  console.log("As you approach the statue its mouth opens.");
  console.log(`"You've made it far. This will be your final test."`);
  console.log(`"I will give you a riddle, you will have three guesses."`);
  console.log(`"If you guess right treasure awaits, wrong and you perish."`);
  console.log(`"Your riddle is this."`);
  console.log(`"I can be smaller than a person or larger than a mountain. \nI can be found in many shapes and sizes. \nI can be all colors of the rainbow. \nI can devour 100 sheep and still be hungry. \n\nWhat am I?"`)
  //create variable for tries
  let tries = 0;
  //create variable for truthy
  let truthy = false;
  //create while loop for options
  while (true) {
    //ask for guess
    const choice = prompt("");
    //increase tries
    tries++;
    if (choice === "a carpet") {
      console.log(`"That is correct."`);
      console.log("A path opens beside the statue.");
      console.log("You walk through the path.");
      //return to the goldRoom
      return goldRoom();
      //change truthy to true for right answer
      truthy = true;
    }else if (choice === "a dragon") {
      console.log(`"Oh that was an unexpected answer."`);
      console.log(`"For that you will receive something special."`);
      console.log("A path opens next to the statue.");
      // return the controlRoom
      return controlRoom();
       //change truthy to true for right answer
      truthy = true;
    //after 3 guesses they die
    }else if (tries == 3 && truthy == false) {
      console.log(`"That was your last guess."`);
      console.log("You hear a crack and the floor falls out below you.");
      return death("You fell onto spikes and died.");
    }else {
      console.log(`"That is not correct. Try again."`);
    }
  }

}

//create function for sandRoom
const sandRoom = function() {
  //description of whats happening
  console.log("You follow the branch and end up at an opening.");
  console.log("Looking out you see a square room full of sand.");
  console.log("With no room to turn around you decide to drop down into the room.");
  console.log("What will you do now?");

  //create variable time, to track loop
  let time = 0;
  //loop to allow for answers
  while(time < 5) {
    //ask user for input
    const choice = prompt("");
    //increase time
    time++;
    //different choice and corresponding messages
    if (choice === "check walls") {
      console.log("There doesn't appear to be anything on the walls.");
    }else if (choice === "check floor") {
      console.log("There is a floor of sand beneath you.");
      console.log("But nothing is out of the ordinary.");
    }else if (choice === "dig sand") {
      console.log("You try to dig but more sand just fills the hole.");
    }else if (choice === "wait") {
      console.log("Nothing happens. Are you even trying.");
    }else if (choice === "enter passageway") {
      console.log("It's too high to reach.");
    }else if (choice === "make ramp") {
      return death("\nYou spend so long pushing the sand around you die from dehydration.");
    }else
      console.log("I don't know what that means.");
  }
  //there is no escape return death eventually
  return death("\nYou've taken too long, you died from dehydration.");
}


//create function for passageway
const passageway = function() {
  console.log("You pull yourself into the passageway.");
  console.log("The passageway is just big enough to crawl through.");
  console.log("With nowhere else to go and you start to crawl.");
  console.log("After a short time you find a branch in the path.");
  console.log("\nDo you follow the branching path?\n");
  //while loop to allow for some wrong answers
  while (true) {
    //prompt user for choice
    const choice = prompt("");
    //choice for yes, no, go back, and whatever else
    if (choice === "yes") {
      //if yes return to sandRoom
      return sandRoom();
    }else if (choice === "no") {
      //if no return to questionRoom
      return questionRoom();
    }else if (choice === "go back") {
      //if go back output message and allow for retry
      console.log("There's not enough room to turn around.");
    }else {
      //if anything else, berate the player and allow for retry
      console.log("You're thinking too much, it's a yes or no question.");
    }
  }
}

//create function for ledgeGrab
const ledgeGrab = function() {
  //description of situation
  console.log("You quickly grab at the wall and stop your fall.");
  console.log("You are now hanging from a ledge.");
  console.log("You can't see where you fell from or the floor.");
  console.log("There seems to be a small passageway at the ledge.");
  console.log("\nWhat are you going to do?\n");
  //create variable for how many tries
  let tries = 0;
  //loop to allow for 3 wrong answer
  while (tries <3) {//choices based on answer
    //user prompt for choice
    const choice = prompt("")
    //if else statments for probable answers
    if (choice === "enter passageway") {
      return passageway();
    }else if (choice === "climb to top") {
      return death("You try to climb out, get tired and fall to your death.")
    }else if (choice === "jump") {
      return death("Well that was stupid, your dead now.")
    }else {
      console.log("\nI don't know what that means.\n")
      //increase try with no/wrong answer
      tries++;
    }
  }
  //guessing wrong 3 times results in death
  return death("You took too long and fall due to exhaustion. You're dead.")
}

// Shouldn't have taken the left door...
const pitTrap = function() {
  // What does the scene look like?
  console.log("\nThe door swings open to utter darkness.");
  console.log("You step through, but your foot can't find the floor.");
  console.log("It's a big pit. And you're falling.");
  //leave oppurtunity to stop fall
  const choice = prompt("\nWhat do you do?\n");
    //branches for choices
    if (choice === "grab wall") {
      //player had some quick thinking and continues
      return ledgeGrab();
    } else {
      //too slow and dies
      return death("You hesitate and end up falling to your death.");
    }
};


// The player starts here
const start = function() {
  // What does this scene look like?
  console.log("You awake in a dimly lit room.");
  console.log("There are doors to your left and right.");

  // Ask for input
  const choice = prompt("\nWhich door do you pick?\n");

  // Create branches for each choice
  if (choice === "left") {
    return bearRoom();
  } else if (choice === "right") {
    return pitTrap();
  } else {
    return death("You stumble around the room for days and die of starvation");
  }
};


// Start The Game!
start();
