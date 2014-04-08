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
    this.maxPos = me.game.viewport.width - settings.width;
    this.minPos = settings.width;
  },

  update: function(dt) {
    // mechanics
    if (me.input.isKeyPressed('left')){
        this.renderable.flipX(true);
        //move left
        this.pos.x -= dt;  
        if (this.pos.x < this.minPos){
            this.pos.x = this.renderable.width;
        }
    }

    if (me.input.isKeyPressed('right')){
        this.renderable.flipX(false);
        //move right
        this.pos.x +=  dt;  
        if (this.pos.x > this.maxPos){
            this.pos.x = this.maxPos;
        }
    }

    return this.parent(dt);
  },

});
