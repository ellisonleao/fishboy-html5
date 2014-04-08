game.PlayScreen = me.ScreenObject.extend({
  onResetEvent: function() {
    // bg
    var bgImage = me.loader.getImage('bg');
    this.bg = new me.SpriteObject(0, 0, bgImage);
    me.game.world.addChild(this.bg, 1);

    // boy
    this.boy = me.pool.pull("boy", me.game.viewport.width/2, 30);
    me.game.world.addChild(this.boy, 2);   
  },

  onDestroyEvent: function() {
    this.boy = null; 
    this.bg = null;
  }
});
