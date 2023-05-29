

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');

let songs = [
    {songName: "Salam-e-Ishq", filePath: " songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: " songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: " songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: " songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: " songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: " songs/1.mp3", coverPath: "covers/1.jpg"}
]

//audioElement.play();
//Handle play or paused
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }

})

//Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seek bar
})