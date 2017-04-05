$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     // debugger;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
    $('.dancer').on("mouseenter", function() { 
      $(this).removeClass('getDown');
    });
  });

  $('.lineUpDancers').on('click', function(event) {
    var width = 10;
    for (var i = 0; i < window.dancers.length; i++) {
      width += 100;
      window.dancers[i].setPosition('10%', width);
      // if (window.dancers[i].name === 'rotateDancer') {
      // }
    }
    //when we click
    //iterate over dancers array
    //for each dancer, create a variable that has height and width
    //change each dancers css height and width
  });

  $('.interact').on('click', function(event) {
    var distance;
    for (var i = 0; i < window.dancers.length; i++) {
      for (var j = 0; j < window.dancers.length; j++){
        var y1 = window.dancers[i].coordinates.top;
        var y2 = window.dancers[j].coordinates.top;
        var x1 = window.dancers[i].coordinates.left;
        var x2 = window.dancers[j].coordinates.left;
        distance = Math.pow((y1 - y2), 2) + Math.pow((x1 - x2), 2);
        if (distance < 30000 && distance !== 0) {
          window.dancers[i].getDown();
          // window.dancers[j].getDown();
        }
      }
      //find out if they are close

        //
      //if they are close (distance less than 200px), 
        //boarders turn off or they do a diff dance move

        //[dancer1, dancer2, dancer3]
        //we need to comapare dancer1 to dancer2, save this val
        //then dancer 1 to dancer3, save this va
        //compare all vals to see which is smallest

    }
  });

  // $('.dancer').on('mouseenter', function(event) {
  //    console.log('hi'); 
  //  });
//when a dancer is instantiated, then do this:

});

//iterate over array
  //at each index, set position starting with whatever position we want
  //increase left and right by 10px
  //then they pop out