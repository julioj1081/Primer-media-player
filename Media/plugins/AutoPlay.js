function AutoPlay(){
}
AutoPlay.prototype.run = function(player){
    player.mutetoggle();
    player.play();
}
export default AutoPlay;