$(document).ready(function(){var e=70,t={timer:null,state:"up",currentDownFrame:0,move_down:function(){console.log("going from ",this.state," to moving");this.state="moving";that=this;$(".volunteer-image").attr("src","/images/dude/02-dude.gif");setTimeout(function(){that.state="down";$(".volunteer-image").attr("src","/images/dude/03-dude.gif")},e*1)},go_back_up_on_inactivity:function(){clearTimeout(this.timer);that=this;this.timer=setTimeout(function(){console.log("going from ",that.state," to moving");$(".volunteer-image").attr("src","/images/dude/04-dude.gif");that.state="moving";setTimeout(function(){console.log("going from ",that.state," to up");$(".volunteer-image").attr("src","/images/dude/01-dude.gif");that.state="up"},e*4)},e*12)}},n=function(){setTimeout(function(){t.state=="up"&&t.move_down();t.go_back_up_on_inactivity()},e*5)};$(".register-name, .register-email").keypress(n)});