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
  });

  $('.lineUpDancers').on('click', function(event) {
    var width = 10;
    for(var i = 0; i < window.dancers.length; i++) {
      width += 100;
      window.dancers[i].setPosition('10%', width);
      if (window.dancers[i].name === 'rotateDancer') {
        
      }
    }
    //when we click
    //iterate over dancers array
    //for each dancer, create a variable that has height and width
    //change each dancers css height and width
  })
});

//iterate over array
  //at each index, set position starting with whatever position we want
  //increase left and right by 10px
  //then they pop out