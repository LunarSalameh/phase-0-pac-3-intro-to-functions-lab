function shout(nameToUpper) {
    return nameToUpper.toUpperCase();
}

function whisper(nameToLower) {
    return nameToLower.toLowerCase();
}
function logShout(logToUpper) {
    return console.log(shout(logToUpper));
}
function logWhisper(logToLower) {
    return console.log(whisper(logToLower));
}

function sayHiToHeadphonedRoommate(string) {

    if (string == whisper(string))
        return "I can't hear you!";
    else if (string == shout(string))
        return "YES INDEED!";
    else if (string == "Let's have dinner together!")
        return "I would love to!";

}

shout("Hello");
whisper("HELLO");
logShout("Hello");
logWhisper("HELLO");
sayHiToHeadphonedRoommate("hello");
sayHiToHeadphonedRoommate("HELLO");
sayHiToHeadphonedRoommate("Let's have dinner together!");