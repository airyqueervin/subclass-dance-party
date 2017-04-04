var MakeRotateDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // console.log(this.step);
  this.$node = $('<img class="rotate" src="https://media4.giphy.com/media/YGIpIZjgxL68w/200w.webp#2"></img>');
  // console.log(this.setPosition)
  this.setPosition(top, left);
  this.rotation = 0;
};

MakeRotateDancer.prototype = Object.create(MakeDancer.prototype);
MakeRotateDancer.prototype.constructor = MakeRotateDancer;
MakeRotateDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeRotateDancer.prototype.step = function (rotation) {
  this.oldStep.call(this);
  this.$node.addClass('rotateDancer');
  this.$node.animate({
    left: "+=50"             //we took out height toggle
  }, 5000, function() {
    // Animation complete.
  });

  // setTimeout(this.step, 500);
  // this.$node.slideToggle(400, "linear"); //we need it to slide differently 

};



