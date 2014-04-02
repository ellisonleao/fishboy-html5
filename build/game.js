var game = {
  data: {
    score: 0
  },

  "onload": function() {
    if (!me.video.init("screen", 480, 320, true, 'auto')) {
      alert("Your browser does not support HTML5 canvas.");
      return;
    }

    me.audio.init("mp3,ogg");
    me.loader.onload = this.loaded.bind(this);
    me.loader.preload(game.resources);
    me.state.change(me.state.LOADING);
  },

  "loaded": function() {
    me.state.set(me.state.PLAY, new game.PlayScreen());

    // in melonJS 1.0.0, viewport size is set to Infinity by default
    me.game.viewport.setBounds(0, 0, 480, 320);
    me.state.change(me.state.PLAY);
  }
};

game.resources = [

	 {name: "bg", type:"image", src: "data/img/bg.png"},
	 {name: "bggameover", type:"image", src: "data/img/bggameover.png"},
	 {name: "background", type:"image", src: "data/img/background.png"},

	 {name: "theme", type: "audio", src: "data/sounds/"},
	 {name: "menu", type: "audio", src: "data/sounds/"},
	 {name: "dead", type: "audio", src: "data/sounds/"},

];
game.PlayScreen = me.ScreenObject.extend({
  onResetEvent: function() {
    var bgImage = me.loader.getImage('bg');

    this.bg = new me.SpriteObject(0, 0, bgImage);
    me.game.world.addChild(this.bg, 1);
   
  },

  onDestroyEvent: function() {
  }
});
