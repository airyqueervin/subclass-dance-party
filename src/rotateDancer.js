var MakeRotateDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // console.log(this.step);
  //this.$node = $('<img class="rotate" src="https://media4.giphy.com/media/YGIpIZjgxL68w/200w.webp#2"></img>');
  // console.log(this.setPosition)
  this.setPosition(top, left);
  this.name = 'rotateDancer';
};

MakeRotateDancer.prototype = Object.create(MakeDancer.prototype);
MakeRotateDancer.prototype.constructor = MakeRotateDancer;
MakeRotateDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeRotateDancer.prototype.step = function (rotation) {
  this.oldStep.call(this);
  this.$node.removeClass('dancer');
  this.$node.addClass('rotateDancer');
  var random = Math.floor(Math.random() * 100) + 'px';
  this.$node.animate({
    margin: random,
    //height: 'toggle'
  }, 130, function() {
    // Animation complete.
  });
  // setTimeout(this.step, 500);
  // this.$node.slideToggle(400, "linear"); //we need it to slide differently 

};

MakeRotateDancer.prototype.lineUp = function() {
  
};



