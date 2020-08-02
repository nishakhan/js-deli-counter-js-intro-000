function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + currentLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var callNames = "The line is currently: "
      for (let i=0; i < deliLine.length; i++) {
        callNames += ++i + ". " + deliLine[--i] + ", ";
      }
    return callNames
    }
}
