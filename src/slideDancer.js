var MakeSlideDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // console.log(this.step);
  this.$node = $('<p class="slideDancer"></p>');
  // console.log(this.setPosition)
  this.setPosition(top, left);
};

MakeSlideDancer.prototype = Object.create(MakeDancer.prototype);
MakeSlideDancer.prototype.constructor = MakeSlideDancer;
MakeSlideDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeSlideDancer.prototype.step = function () {
  this.oldStep.call(this);
  this.$node.addClass('slideDancer');
  this.$node.slideToggle(400, "linear"); //we need it to slide differently 
  // this.$node.toggle("slide", { direction: "left" }, 1000);
  // $(this).hide("slide", { direction: "right" }, 1000);
  // setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
