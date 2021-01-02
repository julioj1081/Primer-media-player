function MediaPlayer(config){
    this.media = config.el;
    //esto es para instancias a los plugins
    this.plugins = config.plugins || [];
    this._initPlugins();
  };
  //esto es para los plugins
  MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
  };
  //

  MediaPlayer.prototype.play = function(){
    this.media.play();
  }
  MediaPlayer.prototype.pause = function(){
    this.media.pause();
  }
  MediaPlayer.prototype.playtoggle = function(){
    if(this.media.paused){
      this.media.play();
    }else{
      this.media.pause();
    }
  }
  MediaPlayer.prototype.mutetoggle = function(){
    if(this.media.muted){
      this.media.muted = false;
    }else{
      this.media.muted = true;
    }
  } 
  
  export default MediaPlayer;