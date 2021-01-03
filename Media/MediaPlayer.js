function MediaPlayer(config){
    this.media = config.el;
    //esto es para instancias a los plugins
    this.plugins = config.plugins || [];
    this._initPlugins();
  };
  //esto es para los plugins
  MediaPlayer.prototype._initPlugins = function(){
    //implementacion con get y set
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value){
        this.media.muted = value;
        /* if(value === true){
          this.media.muted = true;
        }else{
          this.media.muted = false;
        } */
      }
      
    };


    this.plugins.forEach(plugin => {
        plugin.run(player);
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
  MediaPlayer.prototype.muted = function(){
    if(this.media.muted){
      this.media.muted = false;
    }else{
      this.media.muted = true;
    }
  } 
  
  export default MediaPlayer;