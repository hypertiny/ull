$(document).ready(function() {

  // frame length
  var frameLength = 70;

  var Hand = {
    timer: null,

    // initial hand state is up
    state: 'up',

    // initial down moving frame is 0
    currentDownFrame: 0,

    move_down: function(){
      // set the state to moving
      this.state = 'moving';

      // curry 'this' to the setTimeout anonymous function
      that = this;
      $(".volunteer-image").attr("src", "/images/dude/02-dude.gif");

      // after 3 frames, set the state to 'down'
      setTimeout(function(){
        that.state = 'down';
        $(".volunteer-image").attr("src", "/images/dude/03-dude.gif");
      }, frameLength*1)
    },

    go_back_up_on_inactivity: function(){
      // clear the timer
      clearTimeout(this.timer)
      // after 1 seconds of no typing, move the hand back up
      that = this;
      this.timer = setTimeout(function(){
        
        $(".volunteer-image").attr("src", "/images/dude/04-dude.gif");
        that.state = 'moving'

        // after the length of the moving back up animation, set the state back to up
        setTimeout(function(){
          $(".volunteer-image").attr("src", "/images/dude/01-dude.gif")
          that.state = 'up'
        }, frameLength*4)
      }, frameLength*12)
    }
  }

  // a function to move the hand
  // set the hand to 'down' if it's up
  // loop through the 'down' states if it's down
  // don't do anything if it's moving
  var moveTheHand = function(){
    setTimeout(function(){
      // if the hand is up, move it down
      if(Hand.state == 'up')
      {
        Hand.move_down()
      }
      Hand.go_back_up_on_inactivity()
    }, frameLength*5)
    
  }

  $( ".register-name, .register-email" ).keypress(moveTheHand)
});
