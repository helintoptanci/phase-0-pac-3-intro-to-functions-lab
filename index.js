function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout (string) {
    console.log(string.toUpperCase( ));
}
function logWhisper (string) {
    console.log(string.toLowerCase( ));
  }
  
  
  function sayHiToHeadphonedRoommate (string) {
  let cantAnswer = "I can't hear you!";
  let yesAnswer = "YES INDEED!";
  let lovAnswer = "I would love to!";
   if (string.toLowerCase(string) === string) {
    console.log(cantAnswer)
      return cantAnswer;
    } else if (string.toUpperCase(string) === string) {
      console.log(yesAnswer)
      return yesAnswer;
    } else if ("Let's have dinner together!" === string) {
      console.log(lovAnswer)
      return lovAnswer;
    }
  }
  sayHiToHeadphonedRoommate("hello");