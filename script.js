console.log("wellcome to Binge Music");
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay= document.getElementById("masterPlay")
let myProgressBar=document.getElementById('myProgressBar')
let masterSongName = document.getElementById('masterSongName')
let gif=document.getElementById('gif')
let songItem=Array.from(document.getElementsByClassName('songItem'))
let songs=[
    {songName: "AAGE CHAL", filePath:"songs/1.mp3", coverPath: "covers/1.jpg",singer:" - Raftar"},
    {songName: "KOHINOOR", filePath:"songs/2.mp3", coverPath: "covers/2.jpg",singer:" - Divine"},
    {songName: "VYANJAN", filePath:"songs/3.mp3", coverPath: "covers/3.jpg",singer:" - Kr$na"},
    {songName: "36", filePath:"songs/4.mp3", coverPath: "covers/4.jpg",singer:" - Karma and Raftar"},
    {songName: "LOST", filePath:"songs/5.mp3", coverPath: "covers/5.jpg",singer:" - Dino James"},
    {songName: "VO KEHTI THI", filePath:"songs/6.mp3", coverPath: "covers/6.jpg",singer:" - Gaush"},
    {songName: "ERA", filePath:"songs/7.mp3", coverPath: "covers/7.jpg",singer:" - King"},
    {songName: "DUCH", filePath:"songs/8.mp3", coverPath: "covers/8.jpg",singer:" - Spectra"}
]
function makeThatPause(index){
    makeAllPlays();
    document.getElementById(index).classList.remove('fa-play-circle')
    document.getElementById(index).classList.add('fa-pause-circle')
}
masterPlay.addEventListener('click',(element)=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        element.target.classList.remove('fa-play-circle')
        element.target.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
        if(masterSongName.innerText==""){
            index=1
            masterSongName.innerText = songs[0].songName+songs[0].singer;
            document.getElementById('1').classList.remove('fa-play-circle')
            document.getElementById('1').classList.add('fa-pause-circle')
            gif.style.opacity=1
        }
        else{
            for (let i=0;i<songs.length;i++){
                if(songs[i].songName+songs[i].singer==masterSongName.innerText){
                    let l= (i+1).toString();
                    document.getElementById(l).classList.remove('fa-play-circle')
                    document.getElementById(l).classList.add('fa-pause-circle')
                }
            }
        }
}
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0
        makeAllPlays();

    }
})
function next(){
    if(index==8){
        index=1;
    }
    else{
        index += 1;
    }
    audioElement.src=`songs/${index}.mp3`
    masterSongName.innerText = songs[index-1].songName+songs[index-1].singer;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1
    makeThatPause(index);
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
}
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    if(parseInt(audioElement.duration)===parseInt(audioElement.currentTime)){
        next()
    }
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add("fa-play-circle")
    })
}
let temp=0
let l = 0
let c=0
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(e.target.classList=='far songItemPlay fa-2x fa-play-circle'){
            makeAllPlays();
            index=parseInt(e.target.id)
            e.target.classList.remove('fa-play-circle')
            e.target.classList.add('fa-pause-circle')
            audioElement.src=`songs/${index}.mp3`
            makeThatPause(index);
            audioElement.play();
            if(temp==0 || index!=index1){
                audioElement.currentTime=0;
            }
            else{
                audioElement.currentTime=temp;
            }
            gif.style.opacity=1
            masterPlay.classList.remove('fa-play-circle')
            masterPlay.classList.add('fa-pause-circle')
            masterSongName.innerText = songs[index-1].songName+songs[index-1].singer;
        }
        else{
            makeAllPlays();
            index1=parseInt(e.target.id)
            audioElement.pause();
            gif.style.opacity=0;
            temp=audioElement.currentTime
            masterPlay.classList.remove('fa-pause-circle')
            masterPlay.classList.add('fa-play-circle')
        }
    })  
})
document.getElementById('next').addEventListener('click', ()=>{
    if(index==8){
        index=1;
    }
    else{
        index += 1;
    }
    audioElement.src=`songs/${index}.mp3`
    masterSongName.innerText = songs[index-1].songName+songs[index-1].singer;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1
    makeThatPause(index);
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(index==1){
        index=8;
    }
    else{
        index -= 1;
    }
    audioElement.src=`songs/${index}.mp3`
    masterSongName.innerText = songs[index-1].songName+songs[index-1].singer;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1
    makeThatPause(index);
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})
