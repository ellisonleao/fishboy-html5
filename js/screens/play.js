game.PlayScreen = me.ScreenObject.extend({
  onResetEvent: function() {
    var bgImage = me.loader.getImage('bg');

    this.bg = new me.SpriteObject(0, 0, bgImage);
    me.game.world.addChild(this.bg, 1);
   
  },

  onDestroyEvent: function() {
  }
});
