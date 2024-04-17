const progress=document.querySelector('#progress');
const song=document.querySelector('#song');
const playBtn=document.querySelector('#playBtn');

song.onloadedmetadata =function (){
    progress.max=song.duration;
    progress.value=song.currentTime;
}

function playPause(){
    if(playBtn.classList.contains("fa-pause")){
        song.pause();
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
    }
    else{
        song.play();
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500)
}

progress.onchange=function(e){
    e.preventDefault();
    song.play();
    song.currentTime=progress.value;
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");

}