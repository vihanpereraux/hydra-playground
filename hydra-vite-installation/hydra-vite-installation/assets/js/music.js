const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const audioElement = document.querySelector('audio');
const audioTrack = audioContext.createMediaElementSource(audioElement);
audioTrack.connect(audioContext.destination);

const controlButton = document.querySelector('button');
let state = "play";
controlButton.addEventListener('click', function(){
    console.log(state);
    
    if(state == "play"){
        audioElement.play();
        audioElement.volume = .2;        
        controlButton.innerText = ('control + ' + state);
        state = "pause";
    }
    else{
        audioElement.pause();
        controlButton.innerText = ('control + ' + state);
        state = "play";
    }
})