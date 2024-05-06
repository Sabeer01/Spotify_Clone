let songIndex = 0
let audioElement = new Audio() ;
audioElement.src = 'songs/1.mp3'
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songgif = document.getElementById('songgif')
let songlist = Array.from(document.getElementsByClassName('songlist'));

let songs = [
    {songName: "First Class", filePath: "songs/1.mp3" , coverPath: "covers/song1.jfif"},
    {songName: "Chogada", filePath: "songs/2.mp3" , coverPath: "covers/song2.jfif"},
    {songName: "Chaleya", filePath: "songs/3.mp3" , coverPath: "covers/song3.jfif"},
    {songName: "Daayre", filePath: "songs/4.mp3" , coverPath: "covers/song4.jfif"},
    {songName: "Love Me Like You Do", filePath: "songs/5.mp3" , coverPath: "covers/song5.jfif"},
    {songName: "Apna bana le", filePath: "songs/6.mp3" , coverPath: "covers/song6.jfif"},
]

songlist.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByTagName("span")[0].innerText = songs[i].songName
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        songgif.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else(songIndex += 1)
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songgif.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else(songIndex -= 1)
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songgif.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})