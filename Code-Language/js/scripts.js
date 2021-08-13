$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age > 21) {
    $('#drinks').show();
  } else if (age === 21) {
    alert("Now don't go wild!");
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }
});