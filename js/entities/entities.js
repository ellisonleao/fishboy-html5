var BoyEntity = me.ObjectEntity.extend({
  init: function(x, y) {
    var settings = {};
    settings.image = me.loader.getImage('boy');
    settings.width = 35;
    settings.height = 135;

    this.parent(x, y, settings);
    this.alwaysUpdate = true;
    this.gravity = 0;
    //this.renderable.addAnimation("running", [0, 1, 2]);
    this.renderable.addAnimation("idle", [0]);
    this.renderable.setCurrentAnimation("idle");
    this.setVelocity(4, 0);
    this.setFriction(1, 0);
    this.setMaxVelocity(10, 0);
  },

  update: function(dt) {
    // mechanics
    if (me.input.isKeyPressed('left')){
        this.renderable.flipX(true);
        //move left
        this.pos.x -= this.accel.x * me.timer.tick;  
    }

    if (me.input.isKeyPressed('right')){
        this.renderable.flipX(false);
        //move right
        this.pos.x += this.accel.x * me.timer.tick;  
    }

    // clamp
    var vp = me.game.viewport;
    this.pos.x = this.pos.x.clamp(vp.left, vp.right - this.width);

    return this.parent(dt);
  },

});
