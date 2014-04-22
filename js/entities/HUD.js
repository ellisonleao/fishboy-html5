game.HUD = game.HUD || {};

game.HUD.Container = me.ObjectContainer.extend({

  init: function() {
    // call the constructor
    this.parent();

    // persistent across level change
    this.isPersistent = true;

    // non collidable
    this.collidable = false;

    // make sure our object is always draw first
    this.z = Infinity;

    // give a name
    this.name = "HUD";

    // add our child score object at the top left corner
    this.addChild(new game.HUD.ScoreItem(5, 5));
  }
});

game.HUD.Lifes = me.GUI_Object.extend({
  init: function(x, y) {
    var settings = {};
    settings.image = "heart";
    settings.spritewidth = 27;
    settings.spriteheight= 28;


    // call the parent constructor
    this.parent(x, y, settings);
  },

  draw: function (context) {
    if (game.data.start && me.state.isCurrent(me.state.PLAY))
      this.draw(context, game.data.steps, me.video.getWidth()/2, 10);
  }

});
