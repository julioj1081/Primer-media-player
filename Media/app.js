import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector("video");
const btnplay = document.querySelector("#playButton");
const btnmute = document.querySelector("#muteButton");
//atributos en el video
const player = new MediaPlayer({el: video});
//btn play
btnplay.onclick = () => player.playtoggle();
//btn mute
btnmute.onclick = () => player.mutetoggle();
