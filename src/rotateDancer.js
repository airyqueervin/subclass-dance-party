var MakeRotateDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // console.log(this.step);
  this.$node = $('<p class="rotate"></p>');
  // console.log(this.setPosition)
  this.setPosition(top, left);
  this.rotation = 0;
};

MakeRotateDancer.prototype = Object.create(MakeDancer.prototype);
MakeRotateDancer.prototype.constructor = MakeRotateDancer;
MakeRotateDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeRotateDancer.prototype.step = function (rotation) {
  rotation = rotation || 0;
  this.oldStep.call(this);
  this.$node.addClass('rotateDancer');
  rotation += 10;
  this.rotate(rotation);
  // setTimeout(this.step, 500);
  // this.$node.slideToggle(400, "linear"); //we need it to slide differently 

};

MakeRotateDancer.prototype.rotate = function(degrees) {
  this.$node.css({'transform' : 'rotate('+ degrees +'deg)'});
};

