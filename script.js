

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Salam-e-Ishq", filePath: " songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Bhula dena -Salam-e-Ishq", filePath: " songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Chidiya -Salam-e-Ishq", filePath: " songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Man-mast-magan-Salam-e-Ishq", filePath: " songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "mai tumhara-Salam-e-Ishq", filePath: " songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "maajhi baay go-Salam-e-Ishq", filePath: " songs/6.mp3", coverPath: "covers/6.jpg"}
]
songItems.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;

})

//audioElement.play();
//Handle play or paused
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }

})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
 
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index+1}.mp3`;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('previous')