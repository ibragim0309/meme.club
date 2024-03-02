const play = document.getElementById("play")
const vid = document.getElementById("video-miamur")
const mute = document.getElementById("mute")
const playlist = ["терария веши", "1", "2"]
let pev = 0

function next(){
    if (pev < playlist.length -1 ){
        pev = pev +1
    }
    else {
        pev = 0
    }
    vid.src = `Video/${playlist[pev]}.mp4`
}
function prev(){
    if (pev !=0){
        pev = pev -1
    }else{
        pev = playlist.length -1
    }
    console.log(pev)
    vid.src = `Video/${playlist[pev]}.mp4`
}

function played(){
    if (vid.paused ) {
        vid.play()
        play.innerHTML = 'pause'
    } else {
        vid.pause()
        play.innerHTML = 'play'
    }
}


function muted(){
    if (vid.muted ) {
    vid.muted = false
   } else {
   vid.muted = true
   }
}


