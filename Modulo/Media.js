      import MediaPlayer from './MediaPlayer.js';
      
      const video = document.querySelector("video");
      const btnplay = document.querySelector("#playButton");
      const btnmute = document.querySelector("#muteButton");
/*       function MediaPlayer(config){
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
        }
      }  */
      //atributos en el video
      const player = new MediaPlayer({el: video});
      //btn play
      btnplay.onclick = () => player.playtoggle();
      //btn mute
      btnmute.onclick = () => player.mutetoggle();
