function MediaPlayer(config){
    this.media = config.el;
  };
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
      //this.media.mute();
    }
  } 
  
  export default MediaPlayer;