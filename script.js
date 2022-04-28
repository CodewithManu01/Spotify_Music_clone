console.log("Welcome to spotify");
// initialze the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mpeg');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName: "Birugali Madhura_pisumathige_song", filePath: "songs/1.mpeg", coverPath: 'cover/1.jpeg'},
    {songName: "Orange mv song", filePath: "songs/2.mpeg", coverPath: 'cover/2.jpeg'},
    {songName: "Munjane belkali song", filePath: "songs/3.mpeg", coverPath: 'cover/3.jpeg'},
    {songName: "Rajakumara Gombe yelu thaythe Rajakumara song", filePath: "songs/4.mpeg", coverPath: 'cover/4.jpeg'},
    {songName: " KGF-2 Mehabooba song", filePath: "songs/5.mpeg", coverPath: 'cover/5.jpeg'},
    {songName: "KGF-2 Dheera Sulthana song", filePath: "songs/6.mpeg", coverPath: 'cover/6.jpeg'},
    {songName: "Dil-Rangeela Nilu song", filePath: "songs/7.mpeg", coverPath: 'cover/7.jpeg'},
    {songName: "KGF-1 Dheera song", filePath: "songs/8.mpeg", coverPath: 'cover/8.jpeg'},
   
    {songName: "Just Math mathali", filePath: "songs/9.mpeg", coverPath: 'cover/9.jpeg'},
    {songName: "Birugali Madhura_pisumathige_song", filePath: "songs/10.mpeg", coverPath: 'cover/10.jpg'},
    

]
 
songItems.forEach((element, i)=>{
   
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


})



<!--//audioElement.play();-->



//handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
       

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       gif.style.opacity = 0;
    
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);

myProgressBar.value = progress;



})


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
 
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
   
    })
}

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${index+1}.mpeg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

})

document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    } else {
    songIndex += 1;
}
     audioElement.src = `songs/${songIndex+1}.mpeg`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})

document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    } else {
    songIndex -= 1;
}
     audioElement.src = `songs/${songIndex+1}.mpeg`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})
