import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const btnplay = document.querySelector("#playButton");
const btnmute = document.querySelector("#muteButton");
//atributos en el video
const player = new MediaPlayer({el: video, plugins:[
        //esto sera una clase
        new AutoPlay()
    ]
});
//btn play
btnplay.onclick = () => player.playtoggle();
//btn mute
btnmute.onclick = () => player.mutetoggle();
